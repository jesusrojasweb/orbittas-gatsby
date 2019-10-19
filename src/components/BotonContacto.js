import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { Boton } from "../styles/components/BotonContacto"

export const BotonContacto = () => {
  return (
    <Boton href="http://consultas.orbittas.com" target="_blank">
      <FaWhatsapp />
    </Boton>
  )
}
