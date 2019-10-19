import styled from "styled-components"
import { Margen } from "../Styles"
import {
  btn,
  colorPrincipal,
  mobile,
  tablet,
  tituloSecundario,
  colorFluerecente,
} from "../variables"
import { Link } from "gatsby"

export const Contacto = styled.section`
  overflow: hidden;
  background: ${colorPrincipal};
  position: relative;
`

export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 2em;
  padding-bottom: 0;
  position: relative;
  padding-top: 7em;
  height: 100vh;
  box-sizing: border-box;
  @media (${tablet}) {
    grid-template-columns: 1fr;
    height: 92.5vh;
  }
  @media (${mobile}) {
    height: auto !important;
    padding-bottom: 6em;
    display: block;
  }
  @media (min-width: 1420px) {
    height: 700px;
  }
  @media (${tablet}) {
    grid-template-columns: 1fr;
  }
  @media (${mobile}) {
    padding-top: 2em;
    height: auto;
    & .item {
      /*width: 80%;*/
    }
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 3em 2em;
    height: auto;
  }
`

export const Animanos = styled.h2`
  color: white;
  font-family: ${tituloSecundario};
  font-size: 1.17rem;
  margin-bottom: 2em;
  text-transform: uppercase;
  // font-size: 2rem;
  margin-bottom: 3em;
  @media (${mobile}) {
    font-size: 1.2rem;
  }
`
export const Boton = styled.div`
  @media (${mobile}) {
    order: -1;
    margin-bottom: 2em;
  }
`
export const Btn = styled(Link)`
  ${btn()}
  z-index: 900;
  &:hover {
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal};
  }
`
export const Informacion = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  margin-top: 2em;
  text-align: center;
  @media (${mobile}) {
    width: 100%;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Info = styled.ul`
  list-style: none;
  @media (${mobile}) {
    margin: 1em 0;
  }
  & li {
    display: flex;
    align-items: center;
    & svg {
      margin-right: 0.5em;
    }
  }
`

export const Iconos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  margin-bottom: 2em;
  padding: 0 7em;
  @media (${tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em 5em;
  }
  @media (${mobile}) {
    grid-template-columns: 25vw 25vw !important;
    justify-content: center;
    margin-bottom: 0;
    padding: 0;
  }
  @media (min-width: 1420px) {
    grid-gap: 2em;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
`
export const IconosItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Icono = styled.div`
  width: 80%;
`
export const Caracteristica = styled.div`
  background: none;
`
export const Descripcion = styled.p`
  color: white;
  @media (${mobile}) {
    font-size: 0.55rem;
  }
`
export const GridItem = styled.div`
  &:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    text-align: center;
  }
  &:last-child {
    @media (${mobile}) {
      display: grid;
      grid-template-columns: 1fr 25vw;
      grid-column: 2 span;
      grid-gap: 2em;
      align-items: center;
      @media (${mobile}) {
        grid-template-columns: 1fr;
        width: 100%;
      }
      & ${Icono} {
        grid-column-start: 2;
      }
      & ${Caracteristica} {
        grid-column-start: 1;
        grid-row-start: 1;
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: center;
  grid-column: 2 span;
  background: none;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1em;
  box-sizing: border-box;
  padding-right: 9em;
  @media (${mobile}) {
    left: 0;
    padding-right: 1em;
  }
`
export const Copy = styled.p`
  display: flex;
  justify-content: center;
  color: ${colorPrincipal};
  margin: 0;
`
