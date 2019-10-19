import styled, { css } from "styled-components"
import { Margen } from "../Styles"
import {
  colorPrincipal,
  tablet,
  mobile,
  fuentePrincipal,
  btn,
  gradient,
} from "../variables"
import { Link } from "gatsby"

export const Item = styled.div`
  background: none;
  align-self: center;
`

export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em;
  height: auto;
  padding-top: 4em;
  @media (${tablet}) {
    grid-template-columns: 1fr;
    height: auto;
  }
  @media (${mobile}) {
    padding-top: 2em;
    padding-bottom: 0;
  }
`
export const Img = styled.div`
  background: none;
  @media (${tablet}) {
    display: none;
  }
`
export const ServicioContainer = styled.section`
  background: white;
  position: relative;
  ${props =>
    !props.right &&
    css`
      background: #007993;
      background: rgba(0, 121, 147, 0.1);
      & ${Grid} {
        @media (${tablet}) {
          & ${Item}:first-child {
            grid-row-start: 2;
          }
        }
      }
      & ${Img} {
        margin-left: -6em;
      }
    `}
  ${props =>
    props.right &&
    css`
      & ${Img} {
        margin-left: 6em;
        @media (${mobile}) {
          margin-left: 0 !important;
          width: 122%;
        }
      }
    `}
`
export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`
export const Icono = styled.div`
  width: 10%;
  margin-right: 2em;
  &:nth-of-type(1) {
    width: 8%;
  }
  @media (${mobile}) {
    width: 10%;
    margin-right: 0.5em;
  }
`
export const Nombre = styled.h3`
  color: ${colorPrincipal};
  font-size: 2rem;
  font-family: ${fuentePrincipal};
  @media (${mobile}) {
    font-size: 1rem;
  }
`
export const Lista = styled.ul`
  list-style: none;
  padding-left: 2em;
  margin-bottom: 2em;
  ${({ grid }) =>
    grid &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
`
export const ListItem = styled.li`
  padding-bottom: 1em;
  position: relative;
  @media (${mobile}) {
    font-size: 0.8rem;
  }
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${colorPrincipal};
    left: -2em;
    top: 0;
    position: absolute;
    border-radius: 50%;
  }
`

export const Btn = styled(Link)`
  ${btn}
  ${gradient()}
  color: white;
  border: none;
`
