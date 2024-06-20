import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-10">
      <div className="flex flex-col">
        <p className="text-center font-serif text-2xl">404 Oops!</p>
        <span className="text-center text-sm text-stone-400">
          Esta rota não foi classificada.
        </span>
      </div>
      <Link href="/" className="flex items-center gap-1 underline">
        Voltar para a página inicial
      </Link>
    </div>
  )
}
