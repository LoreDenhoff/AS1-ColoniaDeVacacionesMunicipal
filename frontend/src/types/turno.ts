export interface Turno {
    id: number;
    nombre: string;
    sede: string;
    fecha_desde: string;
    fecha_hasta: string;
    cupo_total: number;
    temporada: number;
    cupos_disponibles: number;
}