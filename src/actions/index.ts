'use server'

import { CosmicObject } from '@/lib/cosmic-types'

export async function getCosmicData(): Promise<CosmicObject> {
  const apiURL = String(process.env.API_URL)

  return fetch(apiURL, {
    method: 'GET',
    next: {
      revalidate: 86400,
      tags: ['cosmic-object'],
    },
  }).then((res) => res.json())
}
