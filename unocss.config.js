import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
  },
  include: [
    'layouts/**/*.html',
    'content/**/*.md',
  ],
  safelist: [
    'font-sans',
    'container','mx-auto','px-4',
    'h-16','pt-16','mt-8',
    'text-base','leading-relaxed','leading-tight',
    'text-center','font-bold',
    'space-y-4','lg:text-5xl'
  ],
  preflights: [
    {
      getCSS: () => `body { font-family: 'Open Sans', system-ui, sans-serif; }
        table { 
          border-collapse: collapse; 
          width: 100%; 
          margin-bottom: 1rem; 
          font-size: 0.95rem; 
        }

        th, td { 
          border: 1px solid #ccc; 
          padding: 8px; 
          text-align: left; 
          vertical-align: top; 
        }

        th { 
          background-color: #f2f2f2; 
          font-weight: bold; 
        }

        tr:nth-child(even) { 
          background-color: #fafafa; 
        }

        .table-wrapper { 
          overflow-x: auto; 
          -webkit-overflow-scrolling: touch; 
        }
        blockquote { border-left: 4px solid #828282; padding-left: 12px; font-style: italic; }
        details { margin-bottom: 1rem; }
        summary { cursor: pointer; font-weight: bold; }`,
    },
  ]
})
