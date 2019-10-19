import styled from "styled-components"
import { Margen } from "../Styles"
import { Link } from "gatsby"
import {
  colorPrincipal,
  fuenteSecundaria,
  mobile,
  tablet,
  desktop,
  tituloSecundario,
} from "../variables"

export const Servicios = styled.section`
  align-items: center;
  background: white;
  @media (${mobile}) {
    height: auto;
  }
`
export const Head = styled(Link)`
  @media (${mobile}) {
    grid-area: 2 / 2 / 3 / 3;
  }
`

export const Item = styled.div`
  grid-row-start: 2;
  align-self: start;
  @media (${mobile}) {
    grid-row-start: auto;
    display: grid;
    text-align: left;
    flex-direction: row-reverse;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 2em;
  }
  &:hover {
    // .pro .prefix__cls-3{fill:#00c8f3}
  }
  @media (max-width: 700px) and (orientation: landscape) {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      grid-row-start: 3;
    }
  }
`
export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em 5em;
  text-align: center;
  position: relative;
  padding-top: 4em;
  padding-right: 9em;
  align-items: center;
  @media (${tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em 8em;
    & ${Item} {
      margin-top: 0 !important;
    }
  }
  @media (${mobile}) {
    height: auto;
    grid-template-columns: 1fr !important;
    padding-top: 2em !important;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 2em;
    height: auto;
  }
`

export const Title = styled.h2`
  font-family: ${tituloSecundario};
  font-size: 1.17rem;
  margin-bottom: 2em;
  font-weight: 600;
  justify-self: start;
  align-self: end;
  color: ${colorPrincipal};
  text-transform: uppercase;
  @media (${desktop}) {
    grid-column-start: 4 span;
  }
  @media (${mobile}) {
    text-align: left;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    grid-column-start: 2 span;
  }
`

export const NombreServicio = styled.h3`
  color: ${colorPrincipal};
  font-family: ${fuenteSecundaria};
  @media (${mobile}) {
    grid-column: 2 span;
  }
`
export const Descripcion = styled.p`
  color: black;
`
