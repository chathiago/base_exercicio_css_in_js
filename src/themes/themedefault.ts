import 'styled-components'

const TemaDefault = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7',
  corTerciaria: '#eee'
}

export default TemaDefault

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
    corTerciaria: string
  }
}
