import styled from "styled-components"
import { rotate, rotateLeft } from "../animations"
import { mobile } from "../variables"

export const Svg = styled.svg`
  width: 50%;
  @media (${mobile}) {
    width: 60%;
    margin: 0 auto;
  }
`

export const Derecha = styled.path`
  ${rotate()}
  animation-duration: 20s;
  transform-origin: 50% 31%;
`
export const Izquierda = styled.path`
  ${rotateLeft()}
  animation-duration: 30s;
  transform-origin: 50% 31%;
`
