'use server'

import { CreatePostFormState } from '@/lib/states'
import { kv } from '@vercel/kv'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import * as bcrypt from 'bcrypt'
import { PostType } from '@/lib/types'

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

  if (!title || !content) {
    return { errors: { _form: 'Formulário inválido' } }
  }

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

  const newPost = {
    title: title as string,
    content: content as string,
    createdAt: new Date(),
  }

  await kv.hset('posts', {
    [title as string]: JSON.stringify(newPost),
  })

  revalidatePath('/blog')
  redirect('/blog')
}

export async function getPosts(): Promise<Record<string, PostType> | null> {
  return kv.hgetall('posts')
}

export async function getPostByTitle(
  title: string,
): Promise<Record<string, PostType> | null> {
  return kv.hget('posts', title)
}
