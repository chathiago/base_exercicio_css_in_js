import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal from './globalstyles'
import TemaDefault from './themes/themedefault'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <ThemeProvider theme={TemaDefault}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
