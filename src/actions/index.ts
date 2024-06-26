'use server'

import { CosmicObject } from '@/lib/cosmic-types'

export async function getCosmicData(): Promise<CosmicObject> {
  const res = await fetch(
    'https://api.cosmicjs.com/v3/buckets/autogestor-production/objects/667b5d5a864193998e15e9f7?read_key=UYSFgLvlR2SsD3ICdReucyKSlsEy71lABNMeAEMNFVQVXbRc92&depth=1&props=metadata,',
    {
      method: 'GET',
      next: {
        revalidate: 86400,
        tags: ['cosmic-object'],
      },
    },
  )

  return res.json()
}
