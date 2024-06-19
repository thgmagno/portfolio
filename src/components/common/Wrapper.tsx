import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <section className="mb-10 pr-5">{children}</section>
)
