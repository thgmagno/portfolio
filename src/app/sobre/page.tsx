export default function About() {
  return (
    <div className="page">
      <section className="flex flex-col space-y-3">
        <h2 className="font-serif text-xl font-bold md:text-3xl">
          Habilidades técnicas
        </h2>
        <p>
          Tenho experiência sólida em várias tecnologias de desenvolvimento. No
          front-end, utilizo <strong>React</strong> e <strong>Next.js</strong>
          para criar interfaces de usuário dinâmicas e responsivas. Além disso,
          sou proficiente em <strong>HTML</strong>, <strong>CSS</strong> e{' '}
          <strong>Tailwind CSS</strong>, o que me permite construir designs
          visualmente agradáveis e funcionais. No back-end, trabalho com{' '}
          <strong>Node.js</strong>, utilizando <strong>Typescript</strong> para
          garantir a tipagem estática e a manutenção do código. Tenho também
          experiência em bancos de dados relacionais, especialmente{' '}
          <strong>PostgreSQL</strong>, e uso o <strong>Prisma ORM</strong> para
          gerenciar as interações com o banco de dados. Além disso, possuo
          conhecimento em desenvolvimento de APIs RESTful, facilitando a
          integração entre diferentes serviços e aplicações.
        </p>
      </section>

      <section className="flex flex-col space-y-3">
        <h3 className="font-serif text-xl font-bold md:text-3xl">
          Habilidades não técnicas
        </h3>
        <p>
          No que diz respeito às habilidades não técnicas, sou especializado em
          desenvolvimento front-end, onde crio interfaces responsivas e
          otimizadas, garantindo compatibilidade entre dispositivos. No
          desenvolvimento back-end, foco na implementação de sistemas robustos e
          escaláveis, com atenção especial à segurança e performance. A
          integração de APIs é uma das minhas competências chave, permitindo a
          conexão de serviços e dados de diversas fontes para fornecer
          funcionalidades avançadas. Além disso, aplico princípios de UX/UI
          design para melhorar a interação do usuário e a estética visual das
          aplicações que desenvolvo.
        </p>
      </section>

      <section className="flex flex-col space-y-3">
        <h4 className="font-serif text-xl font-bold md:text-3xl">Formação</h4>
        <p>
          Concluí meu curso técnico em Informática no SENAI, onde estudei de
          junho de 2017 a junho de 2019. Durante esse período, adquiri uma base
          sólida em várias disciplinas de tecnologia, que tem sido fundamental
          para minha carreira como desenvolvedor.
        </p>
      </section>

      <section className="flex flex-col space-y-3">
        <h4 className="font-serif text-xl font-bold md:text-3xl">Idiomas</h4>
        <p>
          Sou fluente em português, minha língua nativa, e possuo um bom nível
          de inglês, o que me permite ler, escrever e me comunicar efetivamente
          em contextos profissionais.
        </p>
      </section>
    </div>
  )
}
