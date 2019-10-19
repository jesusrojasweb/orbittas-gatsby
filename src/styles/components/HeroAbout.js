import styled from "styled-components"
import { Margen } from "../Styles"
import {
  tablet,
  mobile,
  fuentePrincipal,
  colorPrincipal,
  btn,
  gradient,
} from "../variables"

export const Hero = styled.section`
  background: ${colorPrincipal};
  position: relative;
`
export const Grid = styled.div`
  ${Margen}
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 2em;
  @media (${mobile}) {
    padding: 4em 3em 0;
    height: 100vh !important;
    grid-template-rows: 8em 1fr;
  }
  @media (${tablet}) {
    grid-template-columns: 1fr;
    height: 100%;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 2em;
  }
`
export const Item = styled.div`
  @media (${tablet}) {
    height: auto;
    &:first-child {
      align-self: end;
    }
    &:last-child {
      align-self: start;
    }
  }
  @media (max-width: 700px) and (orientation: landscape) {
    &:first-child {
      display: flex;
      justify-content: center;
    }
  }
`
export const Title = styled.h1`
  color: white;
  font-family: ${fuentePrincipal};
  font-size: 5.8rem;
  margin: 0;
  line-height: 1em;
  @media (${mobile}) {
    font-size: 2.6rem;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 4rem;
    margin-top: 1em;
  }
`
export const Sangria = styled.span`
  margin-left: 1em;
`
export const Spacing = styled.span`
  letter-spacing: -25px;
  margin-right: 25px;
  @media (${mobile}) {
    letter-spacing: -13px;
    margin-right: 13px;
  }
`

export const Descripcion = styled.p`
  color: white;
  @media (${mobile}) {
    text-align: justify;
  }
`
