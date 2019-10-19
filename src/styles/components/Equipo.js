import styled, { css } from "styled-components"
import { Margen } from "../Styles"
import { tablet, mobile, fuentePrincipal, colorPrincipal } from "../variables"
import { loaderCircle } from "../animations"

export const LoaderCircle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  transform: translateZ(1px);
`
export const LoaderCircleItem = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 6px;
  border-radius: 50%;
  background: #fff;
  ${loaderCircle()}
`

export const EquipoContainer = styled.section`
  background: ${colorPrincipal};
  height: auto;
  position: relative;
  overflow: hidden;
`
export const Contenedor = styled.div`
  ${Margen}
  text-align: center;
  height: auto;
  padding-top: 7em;
  @media (${mobile}) {
    padding-top: 2em;
  }
`
export const Title = styled.h2`
  color: white;
  font-family: ${fuentePrincipal};
  font-size: 3rem;
  @media (${mobile}) {
    font-size: 2rem;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 2em;
`

export const Item = styled.div`
  width: 25%;
  margin-right: 2em;
  margin-bottom: 4em;
  @media(${tablet}){
    width: 45%;
    margin-right: 0;
  }
  ${({ ultimo }) =>
    ultimo &&
    css`
      margin-right: 0;
    `}
  ${({ cuatro }) =>
    cuatro &&
    css`
      margin-left: 10em;
      @media (${tablet}) {
        margin-left: 0;
      }
    `}
  ${({ cinco }) =>
    cinco &&
    css`
      margin-right: 10em;
      @media (${tablet}) {
        margin-right: 0;
      }
    `}
  // :nth-of-type(3){
  //   margin-right: 0;
  // }
  // &:nth-of-type(4){
  //   margin-left: 10em;
  //   @media(${tablet}){
  //     margin-left: 0;
  //   }
  // }
  // &:nth-of-type(5){
  //   margin-right: 10em;
  //   @media(${tablet}){
  //     margin-right: 0;
  //   }
  // }
`
export const Anchor = styled.a`
  color: white;
`

export const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: 0.5s;
`
export const Head = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  &:hover {
    & ${Hover} {
      opacity: 1;
    }
  }
`
export const Red = styled.div`
  position: absolute;
  bottom: 15%;
  left: 25%;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  z-index: 1000;
`
export const Body = styled.div`
  color: white;
`
export const Nombre = styled.h3`
  font-size: 1.3rem;
  @media (${mobile}) {
    font-size: 0.9rem;
  }
`
export const Cargo = styled.span`
  @media (${mobile}) {
    font-size: 0.9rem;
  }
`
