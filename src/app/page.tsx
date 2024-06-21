import data from '@/data.json'
import { Profile } from '@/components/Profile'

export default function Home() {
  const { profile } = data

  return (
    <>
      <section className="mb-5 flex flex-col space-y-2.5 font-serif">
        <h1 className="text-3xl md:text-5xl">{profile.name}</h1>
        <span className="leading-relaxed text-stone-500">
          Desenvolvedor Web
        </span>
      </section>
      <p className="leading-relaxed">{profile.insights[0]}</p>
      <Profile />
      <p className="leading-relaxed">{profile.insights[1]}</p>
    </>
  )
}
