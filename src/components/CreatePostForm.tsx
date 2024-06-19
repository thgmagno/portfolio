'use client'

import { useFormState, useFormStatus } from 'react-dom'
import * as actions from '@/actions'

export function CreatePostForm() {
  const [formState, action] = useFormState(actions.newPost, { errors: {} })
  const { pending } = useFormStatus()

  return (
    <form action={action} className="create-post-form my-5">
      <section className="flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
        {/* Usuário */}
        <div>
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username" />
        </div>

        {/* Senha */}
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" />
        </div>
      </section>

      {/* Título */}
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" />
      </div>

      {/* Conteúdo */}
      <div>
        <label htmlFor="content">Conteúdo</label>
        <textarea id="content" name="content" />
      </div>

      {formState?.errors._form && (
        <p className="my-3 text-center text-sm text-red-600">
          {formState.errors._form}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-stone-800"
      >
        {pending ? 'Aguarde' : 'Publicar'}
      </button>
    </form>
  )
}
