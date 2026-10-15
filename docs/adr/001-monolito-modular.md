# ADR-001 · Monolito modular

**Estado:** Aceptada
**Fecha:** 15/10/2026
**Autor:** Hernán Viltez

## Contexto

El escenario 6A es una colonia de vacaciones de un municipio chico: 600 cupos, unas 1.500 familias y la
inscripción abierta 3 semanas por año. Lo mantiene una sola persona de sistemas y corre en un servidor
municipal compartido con otros sistemas. El NFR estrella es mantenibilidad y costo, y la restricción es
que al año siguiente se tiene que poder volver a levantar sin que nadie se acuerde de cómo se hacía.

Hay que decidir cómo se empaquetan y despliegan los componentes: inscripciones, turnos, administración e
integración con el padrón.

## Decisión

Vamos a construir un **monolito modular**: una sola aplicación FastAPI desplegable, con módulos separados
por responsabilidad que se comunican por interfaces, y una única base PostgreSQL.

## Alternativas

- **Monolito por capas:** igual de simple de desplegar, pero las capas horizontales mezclan las
  responsabilidades de todos los módulos y cuesta mantener límites claros.
- **Microservicios:** despliegue y escalado independientes que esta escala no necesita; multiplica
  contenedores, bases de datos y complejidad operativa para una sola persona. Sería sobredimensionar.
- **Orientado a eventos:** suma un broker y un flujo difícil de depurar y de transaccionar, sin beneficio
  con este volumen de inscripciones.

La comparación con criterios está en la Matriz de Pugh de `docs/ARQUITECTURA.md`.

## Consecuencias

- Se gana: un solo desplegable que levanta con un comando, bajo consumo de recursos en el servidor
  compartido, un sistema fácil de entender para quien lo herede y transacciones locales para el cupo.
- Los módulos con interfaces permitirían separar un servicio en el futuro si la escala cambiara.
- Se resigna: escalar o desplegar partes por separado (no hace falta con esta carga) y aislar fallas
  entre módulos. Hay que sostener la disciplina de no cruzar los límites entre módulos.

## NFRs

- Favorece: mantenibilidad, costo, simplicidad de operación, consistencia de datos.
- Perjudica: escalabilidad independiente y aislamiento de fallas (aceptable para el escenario).
