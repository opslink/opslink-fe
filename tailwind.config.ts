import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(0,119,250,1)',
      },
      backgroundImage: {
        'login-gradient': `linear-gradient(to right, rgba(0,119,250,1), rgba(255,255,255,0.7))`,
      },
    },
  },
  plugins: [],
}
export default config
