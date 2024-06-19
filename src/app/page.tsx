import data from '@/data.json'
import { Profile } from '@/components/Profile'
import { unstable_noStore as noStore } from 'next/cache'

export default function Home() {
  noStore()
  const { profile } = data

  return (
    <>
      <h1 className="mb-5 font-serif text-3xl md:text-5xl">{profile.name}</h1>
      <p>{profile.insights[0]}</p>
      <Profile />
      <p>{profile.insights[1]}</p>
    </>
  )
}
