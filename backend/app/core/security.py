from dataclasses import dataclass
from functools import lru_cache
from typing import Callable

import httpx
import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.core.config import get_settings

bearer = HTTPBearer(auto_error=False)


@dataclass
class CurrentUser:
    sub: str
    username: str
    roles: set[str]


@lru_cache(maxsize=1)
def _jwks() -> dict:
    settings = get_settings()
    url = f"{settings.keycloak_internal_url}/protocol/openid-connect/certs"
    with httpx.Client(timeout=5.0) as client:
        response = client.get(url)
        response.raise_for_status()
        return response.json()


def _decode_token(token: str) -> dict:
    settings = get_settings()
    if not settings.auth_enabled:
        return {
            "sub": "dev-user",
            "preferred_username": "dev-user",
            "realm_access": {"roles": ["tutor", "administrativo", "administrador_sistema"]},
        }

    try:
        header = jwt.get_unverified_header(token)
        keys = _jwks().get("keys", [])
        key_data = next(k for k in keys if k.get("kid") == header.get("kid"))
        key = jwt.algorithms.RSAAlgorithm.from_jwk(key_data)
        return jwt.decode(
            token,
            key=key,
            algorithms=["RS256"],
            audience="account",
            issuer=settings.keycloak_issuer_url,
            options={"verify_aud": False},
        )
    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token inválido o vencido") from exc


def get_current_user(credentials: HTTPAuthorizationCredentials | None = Depends(bearer)) -> CurrentUser:
    settings = get_settings()
    if settings.auth_enabled and credentials is None:
        raise HTTPException(status_code=401, detail="Falta token de acceso")
    payload = _decode_token(credentials.credentials if credentials else "")
    roles = set(payload.get("realm_access", {}).get("roles", []))
    return CurrentUser(
        sub=payload.get("sub", "unknown"),
        username=payload.get("preferred_username", payload.get("sub", "unknown")),
        roles=roles,
    )


def require_roles(*allowed: str) -> Callable:
    def dependency(user: CurrentUser = Depends(get_current_user)) -> CurrentUser:
        if not user.roles.intersection(allowed):
            raise HTTPException(status_code=403, detail="No tiene permisos para realizar esta acción")
        return user
    return dependency
