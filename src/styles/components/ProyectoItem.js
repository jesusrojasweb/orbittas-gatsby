import styled from "styled-components"
import { Link } from "gatsby"
import { mobile } from "../variables"

export const Proyecto = styled(Link)`
  text-align: center;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: white;
  text-decoration: none;
  height: 250px;
  overflow: hidden;
  transition: 0.3s;
  background: #006176;
  border-radius: 5px;
  &:hover {
    background: #fff;
    background: hsla(0, 0%, 100%, 0.1);
  }
  @media (${mobile}) {
    height: 160px;
    padding: 2em 1em;
  }
`
export const Nombre = styled.h2`
  z-index: 500;
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;
  @media (${mobile}) {
    font-size: 1rem;
  }
`
export const Imagen = styled.span`
  z-index: 500;
`
export const Caracteristicas = styled.span`
  z-index: 500;
  color: white;
  text-transform: uppercase;
  @media (${mobile}) {
    font-size: 0.65rem;
  }
`
