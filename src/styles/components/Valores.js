import styled from "styled-components"
import { Margen } from "../Styles"
import { tablet, mobile, colorPrincipal, fuenteSecundaria } from "../variables"

export const ValoresContainer = styled.section`
  background: white;
`

export const Grid = styled.div`
  ${Margen}
  padding-top: 4em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 7em;
  text-align: center;
  align-items: center;
  @media (${tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em 8em;
  }
  @media (${mobile}) {
    align-items: center;
    grid-template-columns: 1fr !important;
    height: auto;
  }
`
export const Item = styled.div`
  @media (${mobile}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 2em;
    text-align: left;
  }
`
export const Head = styled.div`
  grid-area: 2 / 2 / 3/ 3;
  align-self: center;
`
export const Valor = styled.h3`
  color: ${colorPrincipal};
  font-family: ${fuenteSecundaria};
  font-size: 1.5rem;
  grid-area: 1 / 1 / 2 / 2;
  @media (${tablet}) {
    margin: 0;
  }
`
export const Descripcion = styled.p`
  margin-bottom: 0;
  grid-area: 2 / 1 / 3 / 2;
`
