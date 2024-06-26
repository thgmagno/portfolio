type ValueProps = 'front-end' | 'back-end' | 'fundamentals' | 'tools'

export const translateCategory = (value: string) => {
  const valueMapping = {
    'front-end': 'Front-end',
    'back-end': 'Back-end',
    'full-stack': 'Full-stack',
    fundamentals: 'Fundamentos',
    tools: 'Ferramentas',
  }

  return valueMapping[value as ValueProps]
}
