import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <section className="mb-10">{children}</section>
)
