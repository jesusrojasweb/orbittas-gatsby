import styled from "styled-components"
import {
  colorPrincipal,
  btn,
  colorFluerecente,
  tablet,
  mobile,
  desktop,
  tituloSecundario,
} from "../variables"
import { Link } from "gatsby"
import { Margen } from "../Styles"
import { rotate } from "../animations"

export const About = styled.section`
  background: none;
  align-items: center;
  width: 100%;
  position: relative;
  overflow-x: visible;
  position: relative;
  background: ${colorPrincipal};
  z-index: 600;
  @media (${mobile}) {
    height: auto;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-evenly;
  ${Margen}
  padding-top: 5em;
  padding-bottom: 5em;
  @media (${mobile}) {
    height: auto;
    padding: 3em 3em 0em;
    & .img {
      margin: 0 !important;
      width: 100% !important;
    }
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 2em;
  }
`

export const Title = styled.h2`
  margin: 0;
  font-family: ${tituloSecundario};
  font-size: 1.17rem;
  text-transform: uppercase;
  @media (${mobile}) {
    margin-bottom: 1em;
  }
`

export const Item = styled.div`
  &:nth-of-type(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    align-items: center;
    @media (${mobile}) {
      grid-template-columns: 1fr;
      margin-bottom: 3em;
    }
    @media (max-width: 700px) and (orientation: landscape) {
      grid-template-columns: 1fr;
    }
  }
  &:last-child {
    z-index: 1000;
    justify-self: flex-end;
    @media (${mobile}) {
      margin-bottom: 4em;
    }
  }
`
export const Imagen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & img {
    position: absolute;
    width: 70%;
    &:first-child {
      width: 55%;
    }
  }
  @media (${mobile}) {
    display: none;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    display: none;
  }
`
export const ImageRotate = styled.div`
  ${rotate}
  width: 70%;
`
export const Descripcion = styled.p`
  margin: 0 0 1em;
  background: ${colorPrincipal};
  @media (${mobile}) {
    text-align: justify;
  }
`
export const Cualidades = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-top: 2em;
  @media (${tablet}) {
    margin-top: 2em;
  }
  @media (${desktop}) {
    margin-top: 2em;
  }
`
export const Icono = styled.div`
  width: 13%;
  @media (${tablet}) {
    width: 20%;
  }
`
export const Cualidad = styled.div`
  display: flex;
  align-items: center;
  background: ${colorPrincipal};
  &:nth-of-type(2) {
    & ${Icono} {
      width: 8%;
    }
  }
  @media (${mobile}) {
    flex-direction: column;
    text-align: center;
  }
`

export const CualidadNombre = styled.span`
  margin-left: 1em;
  @media (${mobile}) {
    margin-left: 0;
  }
`
export const Btn = styled(Link)`
  ${btn}
  z-index: 900;
  &:hover {
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal};
  }
`
export const Contenedor = styled.div`
  background: none;
`
export const Img = styled.div`
  border-radius: 50%;
  width: 55%;
  overflow: hidden;
  position: absolute;
`
