import { FormEvent, useState } from 'react'
import { FormBotaoPesquisa, FormCampo, FormularioVagas } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <>
      <FormularioVagas onSubmit={aoEnviarForm}>
        <FormCampo
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <FormBotaoPesquisa type="submit">Pesquisar</FormBotaoPesquisa>
      </FormularioVagas>
    </>
  )
}
export default FormVagas
