import styled, { css } from "styled-components"
import { Margen } from "../Styles"
import { colorPrincipal, tituloSecundario, mobile, min } from "../variables"

export const Circulo = styled.div`
  background: ${colorPrincipal};
  width: 47.5px;
  height: 47.5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  margin-left: -3px;
`

const botones = (right, left) => css`
  background: ${colorPrincipal};
  position: absolute;
  width: 55px;
  height: 55px;
  ${right && `right: 7em;`}
  ${left && `left: 7em;`}
  top: 50%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  z-index: 20;
  background: none;
  border: 1px solid ${colorPrincipal};
  &:focus {
    outline: none;
  }
  @media (${mobile}) {
    ${right && `right: -3em;`}
    ${left && `left: -3em;`}
    border: none;
    & ${Circulo} {
      background: none;
      color: #b2adad;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 700px) and (orientation: landscape) {
    ${right && `right: -3em;`}
    ${left && `left: -3em;`}
        border: none;
    & ${Circulo} {
      background: none;
      color: #b2adad;
      font-size: 1.5rem;
    }
  }
`

export const TestimoniosContainer = styled.section`
  background: white;
  ${Margen}
  padding-top: 4em;
  height: 700px;
  @media (${mobile}) {
    height: 875px;
  }
  @media (${min}) {
    padding: 2em 2em 6em;
    height: 950px !important;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 2em;
  }
`
export const Title = styled.h2`
  color: ${colorPrincipal};
  font-family: ${tituloSecundario};
  text-transform: uppercase;
  font-size: 1.17rem;
`

export const Banner = styled.div`
  margin-top: 8em;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (${mobile}) {
    margin-top: 5em;
  }
`

export const Container = styled.div`
  position: relative;
  height: 50%;
`

export const Right = styled.button`
  ${botones(true, false)}
`

export const Left = styled.button`
  ${botones(false, true)}
`
