import styled from "styled-components"
import { colorPrincipal, fuentePrincipal, mobile, tablet } from "../variables"
import { Margen } from "../Styles"

export const Hero = styled.section`
  background: ${colorPrincipal};
  overflow: hidden;
  position: relative;
`
export const Container = styled.div`
  ${Margen}
  position: relative;
  @media (${mobile}) {
    padding: 4em 3em 0;
    height: 100vh !important;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 2em;
  }
`
export const Item = styled.div`
  background: none;
`
export const Contenedor = styled.div`
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;
  height: 100%;
  @media (${tablet}) {
    grid-template-columns: 1fr;
    & ${Item}:first-child {
      align-self: end;
    }
    & ${Item}:last-child {
      align-self: start;
    }
  }
  @media (${mobile}) {
    grid-gap: 1em;
    grid-template-rows: 8em 1fr;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4em;
  align-items: center;
  margin-top: 3em;
  @media (${mobile}) {
    display: none;
  }
`
export const Icono = styled.a`
  &:first-child {
    width: 72.5%;
  }
`
export const Title = styled.h1`
  color: white;
  font-family: ${fuentePrincipal};
  font-size: 5.8rem;
  margin-bottom: 1.5em;
  line-height: 1em;
  @media (${mobile}) {
    margin: 0;
    font-size: 2.6rem;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 4rem;
    margin: 0em 0em -0.5em 0em;
  }
`
export const Spacing = styled.span`
  letter-spacing: -25px;
  margin-right: 25px;
  @media (${mobile}) {
    letter-spacing: -13px !important;
    margin-right: 13px !important;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    letter-spacing: -27px;
    margin-right: 27px;
  }
`
export const Ancho = styled.span`
  font-size: 4.7rem;
  @media (${mobile}) {
    font-size: 1.7rem;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 4rem;
  }
`
export const Descripcion = styled.p`
  color: white;
`
