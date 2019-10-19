import styled from "styled-components"
import {
  fuentePrincipal,
  colorFluerecente,
  mobile,
  colorOscuro,
} from "../variables"

export const FooterContainer = styled.footer`
  background: ${colorOscuro};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5em;
  justify-items: center;
  padding: 2em 6em 2em;
  @media (${mobile}) {
    grid-gap: 2em;
    grid-template-columns: 1fr;
    padding: 2em 2em 1em;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    grid-gap: 2em;
    grid-template-columns: 1fr;
    padding: 2em 2em 1em;
  }
`

export const Item = styled.div`
  &:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
  @media (${mobile}) {
    &:nth-of-type(2),
    &:nth-of-type(3) {
      display: block;
    }
    &:nth-of-type(2) {
      grid-row-start: 1;
    }
    &:nth-of-type(3) {
      grid-row-start: 2;
    }
  }
  @media (max-width: 700px) and (orientation: landscape) {
    &:nth-of-type(2),
    &:nth-of-type(3) {
      display: block;
    }
    &:nth-of-type(2) {
      grid-row-start: 1;
    }
    &:nth-of-type(3) {
      grid-row-start: 2;
    }
  }
`

export const Img = styled.img`
  width: 70%;
  align-self: center;
  @media (${mobile}) {
    margin: 0 auto;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    margin: 0 auto;
  }
`

export const Title = styled.h3`
  color: white;
  font-family: ${fuentePrincipal};
`

export const Copy = styled.p`
  text-align: center;
  color: white;
  padding: 1em;
  margin: 0;
`

export const Ul = styled.ul`
  margin-top: 2em;
`

export const Li = styled.li`
  color: white;
  list-style: none;
  margin-top: 0.5em;
  & svg {
    margin-right: 1em;
  }
`

export const Sociales = styled.ul`
  display: flex;
  justify-content: start;
  flex-direction: row;
  list-style: none;
  margin-top: 2em;
  @media (${mobile}) {
    justify-content: space-between;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    justify-content: space-between;
  }
`
export const Icono = styled.a`
  color: white;
  font-size: 2.5rem;
  transition: 0.3s;
  margin-right: 1.5em;
  @media (${mobile}) {
    margin: 0;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    margin: 0;
  }

  &:hover {
    color: ${colorFluerecente};
  }
`
