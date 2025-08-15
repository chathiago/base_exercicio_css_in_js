import styled from 'styled-components'

export const FormularioVagas = styled('form')`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const FormCampo = styled('input')`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const FormBotaoPesquisa = styled('button')`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 16px;
    margin-left: 0;
    width: 100%;
  }
`
