"""esquema inicial

Revision ID: 0001
Revises:
"""
from alembic import op
import sqlalchemy as sa

revision = "0001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "turnos",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("nombre", sa.String(length=120), nullable=False),
        sa.Column("sede", sa.String(length=120), nullable=False),
        sa.Column("fecha_desde", sa.Date(), nullable=False),
        sa.Column("fecha_hasta", sa.Date(), nullable=False),
        sa.Column("cupo_total", sa.Integer(), nullable=False),
        sa.Column("temporada", sa.Integer(), nullable=False),
    )
    op.create_index("ix_turnos_temporada", "turnos", ["temporada"])
    op.create_table(
        "inscripciones",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("turno_id", sa.Integer(), sa.ForeignKey("turnos.id", ondelete="RESTRICT"), nullable=False),
        sa.Column("temporada", sa.Integer(), nullable=False),
        sa.Column("dni_chico", sa.String(length=20), nullable=False),
        sa.Column("nombre_chico", sa.String(length=100), nullable=False),
        sa.Column("apellido_chico", sa.String(length=100), nullable=False),
        sa.Column("fecha_nacimiento", sa.Date(), nullable=False),
        sa.Column("dni_tutor", sa.String(length=20), nullable=False),
        sa.Column("nombre_tutor", sa.String(length=120), nullable=False),
        sa.Column("email_tutor", sa.String(length=180), nullable=False),
        sa.Column("telefono_tutor", sa.String(length=50), nullable=False),
        sa.Column("estado", sa.String(length=30), nullable=False),
        sa.Column("posicion_espera", sa.Integer(), nullable=True),
        sa.Column("creado_por", sa.String(length=120), nullable=False),
        sa.Column("creado_en", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.UniqueConstraint("dni_chico", "temporada", name="uq_dni_chico_temporada"),
    )
    op.create_index("ix_inscripciones_turno_id", "inscripciones", ["turno_id"])
    op.create_index("ix_inscripciones_temporada", "inscripciones", ["temporada"])


def downgrade():
    op.drop_table("inscripciones")
    op.drop_table("turnos")
