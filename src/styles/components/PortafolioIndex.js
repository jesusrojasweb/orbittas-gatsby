import styled from "styled-components"
import {
  colorPrincipal,
  btn,
  colorFluerecente,
  tituloSecundario,
} from "../variables"
import { Margen } from "../Styles"
import { Link } from "gatsby"

export const Portafolio = styled.section`
  align-items: center;
  position: relative;
  background: none;
  background: ${colorPrincipal};
`
export const Grid = styled.div`
  ${Margen}
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 7em;
  padding-bottom: 8em;
  justify-content: center;
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 4em 2em;
  }
`
export const Title = styled.h2`
  color: white;
  font-family: ${tituloSecundario};
  font-size: 1.17rem;
  margin-bottom: 2em;
  text-transform: uppercase;
`

export const Btn = styled(Link)`
  ${btn}
  z-index: 1000;
  &:hover {
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal};
  }
`
