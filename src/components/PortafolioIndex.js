import React, { useState } from "react"
import {
  Portafolio,
  Title,
  Grid,
  Btn,
} from "../styles/components/PortafolioIndex"
import { PortafolioContainer } from "./PortafolioContainer"
import { useTranslate } from "react-translate"
import { ParticulasBajo } from "./ParticulasBajo"
import { Conexion } from "./Conexion"

const PortafolioIndex = ({ idioma, proyectos }) => {
  const filtrar = proyectos.filter(({ estado }) => estado === "finalizado")
  const primeros = filtrar.slice(0, 4)
  let t = useTranslate("portfolioHomePage")
  return (
    <Portafolio>
      <ParticulasBajo />
      <Grid>
        <Title>{t("title")}</Title>
        <PortafolioContainer proyectos={primeros} pagina={false} />
        <Btn to={`/portfolio`}>{t("button")}</Btn>
      </Grid>
      <Conexion />
    </Portafolio>
  )
}

export default PortafolioIndex
