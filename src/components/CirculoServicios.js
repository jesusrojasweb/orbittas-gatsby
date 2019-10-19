import React from "react"
import {
  Container,
  Circulo,
  Imagen,
} from "../styles/components/CirculoServicios"
import Images from "./Images"

export const CirculoServicios = ({ circulo, imagen }) => {
  return (
    <Container>
      <Circulo>
        <Images name={circulo} />
      </Circulo>
      <Imagen>
        <Images name={imagen} />
      </Imagen>
    </Container>
  )
}
