export type PlanetItem = {
  name: string,
  climate: string,
  population: number
}

export type PlanetsResult = {
    count: number,
    next: string | null,
    previous: string | null,
    results: PlanetItem[]
}
