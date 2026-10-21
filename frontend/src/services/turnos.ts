import type { Turno } from '../types/turno'

const API_URL = '/api/v1'

export async function obtenerTurnos(token: string): Promise<Turno[]> {
    const respuesta = await fetch(`${API_URL}/turnos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if (!respuesta.ok) {
        throw new Error ('No se pudieron obtener los turnos')
    }

    return (await respuesta.json()) as Turno[]
}