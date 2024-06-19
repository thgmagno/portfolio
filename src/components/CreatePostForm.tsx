'use client'

import { useFormState } from 'react-dom'
import * as actions from '@/actions'

export function CreatePostForm() {
  const [formState, action] = useFormState(actions.newPost, { errors: {} })

  return (
    <form action={action}>
      <section>
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

      {formState?.errors._form && <p>{formState.errors._form}</p>}

      {/* Submit */}
      <button type="submit">Publicar</button>
    </form>
  )
}
