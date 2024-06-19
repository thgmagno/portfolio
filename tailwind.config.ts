import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        body: '#120f10',
      },
      textColor: {
        muted: '#78716c',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        oxanium: ['var(--font-oxanium)'],
      },
    },
  },
}
export default config
