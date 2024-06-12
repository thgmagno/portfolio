'use client'

import { useFormState } from 'react-dom'
import * as actions from '@/actions'

export function CreatePostForm() {
  const [formState, action] = useFormState(actions.newPost, { errors: {} })

  return (
    <form action={action} className="flex flex-col space-y-3">
      <section className="flex flex-col space-y-3 md:flex-row md:gap-4 md:space-y-0">
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
        <p className="error">{formState.errors._form}</p>
      )}

      {/* Submit */}
      <button type="submit">Publicar</button>
    </form>
  )
}
