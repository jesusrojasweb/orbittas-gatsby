import styled, { css, createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import { colorPrincipal, mobile, fuentePrincipal, tablet } from "../variables"
import { Margen } from "../Styles"
import {
  HeroProyecto,
  HeroElec,
  HeroWeb,
  HeroMovil,
} from "../../assets/ilustracionesServiciosHero"

export const ProyectoI = styled(HeroProyecto)`
  background: none;
`

export const ElecI = styled(HeroElec)`
  background: none;
`
export const WebI = styled(HeroWeb)`
  background: none;
`
export const MovilI = styled(HeroMovil)`
  background: none;
`

export const Body = createGlobalStyle`
  body{
    overflow: hidden;
    @media(${tablet}){
      overflow: scroll;
    }
  }
`

export const Portafolio = styled.section`
  background: ${colorPrincipal};
  position: relative;
  min-height: 100vh;
`
export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 3fr 7fr;
  align-items: center;
  grid-gap: 5em;
  padding-bottom: 3em;
  align-self: top;
  z-index: 800;
  @media (${mobile}) {
    grid-template-columns: 1fr;
    height: auto;
    grid-gap: 0;
    padding-top: 6em;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    grid-template-columns: 1fr;
    height: auto;
    grid-gap: 0;
    padding: 6em 2em 2em;
  }
`

export const Item = styled.div`
  z-index: 800;
  &:nth-of-type(1) {
    align-self: start;
    margin-top: 1em;
  }
`

export const Menu = styled.ul`
  list-style: none;
  width: 100%;
  @media (${mobile}) {
    display: flex;
    flex-flow: wrap;
    margin-top: 0;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    display: flex;
    flex-flow: wrap;
    margin-top: 0;
  }
`

export const Anchor = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: ${fuentePrincipal};
  font-size: 1rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  ${({ activo }) =>
    activo &&
    css`
      color: #00caf5;
      & .heroElec {
        & .prefix__cls-2,
        & .rect {
          stroke: #00caf5 !important;
        }
        & .prefix__cls-3 {
          fill: #00caf5 !important;
        }
      }
      & .heroWeb {
        & .prefix__cls- {
          stroke: #00caf5 !important;
        }
      }
      & .heroMovil {
        & .prefix__cls-1,
        & .prefix__cls-2 {
          stroke: #00caf5 !important;
        }
      }
    `}
  &:focus {
  }
  @media (${mobile}) {
    flex-direction: column;
    &:nth-of-type(1) {
      justify-content: center;
    }
  }
  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: column;
    &:nth-of-type(1) {
      justify-content: center;
    }
  }
`
export const Icono = styled.span`
  width: 12%;
  margin: 0 1em 0 0.5em;
  @media (${mobile}) {
    margin-right: 1em;
    width: 40%;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    margin-right: 1em;
    width: 40%;
  }
`
export const ListItem = styled.li`
  margin-bottom: 2em;

  background: ${colorPrincipal};
  &:nth-of-type(1) {
    & ${Anchor} {
      font-size: 1.5rem;
    }
  }
  @media (${mobile}) {
    width: 33%;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    width: 33%;
  }
  ${props =>
    props.activo &&
    css`
      @media (${mobile}) {
        width: 100%;
        order: -1;
        & ${Icono} {
          display: none;
        }
        & ${Anchor} {
          flex-direction: row;
          font-size: 1.3rem;
        }
      }
      @media (max-width: 700px) and (orientation: landscape) {
        width: 100%;
        order: -1;
        & ${Icono} {
          display: none;
        }
        & ${Anchor} {
          flex-direction: row;
          font-size: 1.3rem;
        }
      }
    `}
`
