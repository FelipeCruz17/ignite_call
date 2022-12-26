import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: '0px',
    margin: '0px',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
