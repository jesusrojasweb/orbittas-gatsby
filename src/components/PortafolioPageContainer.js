import React from "react"
import { PortafolioContainer } from "./PortafolioContainer"
import {
  Body,
  Portafolio,
  Grid,
  Item,
  Menu,
  Anchor,
  Icono,
  ListItem,
  ElecI,
  WebI,
  MovilI,
} from "../styles/components/PortafolioPageContainer"
import { ParticulasBajo } from "./ParticulasBajo"
import { useTranslate } from "react-translate"

const PortfolioPageContainer = ({ proyectos }) => {
  let servicio = ""
  if (typeof window !== `undefined`) {
    servicio = window.location.search
  }
  let search = servicio
    .split("?")
    .join("")
    .split("=")
    .join("")
  let filtrar = proyectos.filter(({ estado }) => estado === "finalizado")
  let proyectShowed = filtrar

  const t = useTranslate("portfolio")

  if (search) {
    proyectShowed = filtrar.filter(proyecto => proyecto.servicio === search)
    if (search === "proyecto" || search === "diseno") {
      proyectShowed = filtrar
    }
  }

  return (
    <Portafolio>
      <Body />
      <ParticulasBajo />
      <Grid>
        <Item>
          <Menu>
            <ListItem activo={true}>
              <Anchor to="/portfolio?=proyecto">{t("proyect")}</Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                activo={search === "electronica"}
                to="/portfolio?=electronica"
              >
                <Icono>
                  <ElecI />
                </Icono>
                {t("elect")}
              </Anchor>{" "}
            </ListItem>
            <ListItem>
              <Anchor activo={search === "web"} to="/portfolio?=web">
                <Icono>
                  <WebI />
                </Icono>
                {t("web")}{" "}
              </Anchor>{" "}
            </ListItem>
            <ListItem>
              <Anchor activo={search === "movil"} to="/portfolio?=movil">
                <Icono>
                  <MovilI />
                </Icono>
                {t("mobile")}
              </Anchor>{" "}
            </ListItem>
          </Menu>
        </Item>
        <PortafolioContainer pagina={true} proyectos={proyectShowed} />
      </Grid>
    </Portafolio>
  )
}

export default PortfolioPageContainer
