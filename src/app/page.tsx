import { ThgMagno } from '@/components/ThgMagno'

export default function Home() {
  return (
    <div className="page">
      <section className="flex flex-col space-y-3">
        <h1 className="font-serif text-xl font-bold md:text-3xl">
          Thiago Magno
        </h1>
        <p>
          Sou um desenvolvedor web apaixonado por criar soluções digitais
          inovadoras e eficientes.
        </p>
      </section>
      <ThgMagno />
      <section className="flex flex-col space-y-3">
        <p>
          Meu foco é proporcionar uma experiência de usuário excepcional,
          utilizando as melhores práticas de design e desenvolvimento.
        </p>
      </section>
    </div>
  )
}
