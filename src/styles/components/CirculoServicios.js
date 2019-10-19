import styled from "styled-components"
import { rotateLeft } from "../animations"

export const Container = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`

export const Circulo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${rotateLeft()}
`

export const Imagen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: scale(0.8);
  transform-origin: 50%;
`
