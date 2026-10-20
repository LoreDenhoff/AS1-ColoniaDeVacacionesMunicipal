from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Colonia de Vacaciones 6A"
    environment: str = "dev"
    database_url: str = "postgresql+psycopg://colonia:colonia@postgres:5432/colonia"
    padron_base_url: str = "http://wiremock:8080"
    padron_timeout_seconds: float = 3.0
    temporada: int = 2027
    keycloak_issuer_url: str = "http://localhost:8080/realms/colonia"
    keycloak_internal_url: str = "http://keycloak:8080/realms/colonia"
    keycloak_client_id: str = "colonia-spa"
    auth_enabled: bool = True
    public_app_url: str = "http://localhost:8000"
    keycloak_public_url: str = "http://localhost:8080"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    return Settings()
