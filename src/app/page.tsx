import data from '@/data.json'
import { Profile } from '@/components/Profile'

export default function Home() {
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
