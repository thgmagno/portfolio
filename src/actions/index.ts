'use server'

import { CreatePostFormState } from '@/lib/states'
import { kv } from '@vercel/kv'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import * as bcrypt from 'bcrypt'

export async function newPost(
  formSate: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> {
  const username = formData.get('username')
  const password = formData.get('password')
  const title = formData.get('title')
  const content = formData.get('content')

  const usernameKV = await kv.hget('user', 'username')
  const passwordKV = await kv.hget('user', 'password')

  const usernameIsMatch = await bcrypt.compare(
    username as string,
    usernameKV as string,
  )

  const passwordIsMatch = await bcrypt.compare(
    password as string,
    passwordKV as string,
  )

  const isAuthorized = usernameIsMatch && passwordIsMatch

  if (!isAuthorized) {
    return { errors: { _form: 'Usuário não autorizado' } }
  }

  await kv.hset('posts', { [title as string]: { content } })

  revalidatePath('/')
  redirect('/blog')
}

export async function getAllPosts() {
  return kv.hgetall('posts')
}
