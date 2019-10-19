import styled, { css } from "styled-components"
import {
  colorPrincipal,
  tituloSecundario,
  fuenteSecundaria,
  mobile,
  min,
  desktop,
} from "../variables"

export const Figure = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colorPrincipal};
  position: absolute;
  width: 10%;
  left: 45%;
  top: -15%;
  padding-bottom: 10%;
  height: 0px;
  @media (${mobile}) {
    width: 30%;
    left: 35%;
    top: -50px;
    padding-bottom: 30%;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    width: 20%;
    padding-bottom: 20%;
    left: 40%;
    top: -70px;
  }
`

export const Container = styled.div`
  background: white;
  border-radius: 5px;
  position: absolute;
  background: #f3f3f3;
  transform: translate(140%);
  transition: 0.3s;
  margin: 0;
  text-align: center;
  width: 80%;
  &.active {
    z-index: 10;
    transform: translate(0);
    box-shadow: 0px 6px 20px 5px lightgrey;
  }
  @media (${mobile}) {
    width: 100%;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    width: 100%;
  }
`
export const Relative = styled.div`
  position: relative;
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${mobile}) {
    padding: 2em;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 3em 4em;
  }
`

export const Cita = styled.blockquote`
  margin: 0;
`

export const Descripcion = styled.p`
  font-size: 1rem;
  &:before {
    content: open-quote;
  }
  &:after {
    content: close-quote;
  }
`
export const Persona = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colorPrincipal};
  width: 100%;
  padding-bottom: 100%;
  height: 0px;
  @media (${mobile}) {
    display: none;
  }
`

export const Nombre = styled.h4`
  color: ${colorPrincipal};
  font-family: ${tituloSecundario};
  ${({ solo }) =>
    !solo &&
    css`
      text-align: left;
    `}
`

export const Cargo = styled.small`
  font-family: ${fuenteSecundaria};
  color: ${colorPrincipal};
  ${({ solo }) =>
    !solo &&
    css`
      @media (${desktop}) {
        text-align: left;
        margin-left: -4em;
      }
    `}
`

export const Contenedor = styled.div`
  width: 50%;
`
export const Informacion = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2em;
  @media (${mobile}) {
    grid-template-columns: 1fr;
  }
`
