import React, { useContext } from "react"
import { useTranslate } from "react-translate"
import { ParticulasBajo } from "./ParticulasBajo"

import {
  Hero,
  Container,
  Item,
  Contenedor,
  Grid,
  Icono,
  Title,
  Spacing,
  Ancho,
  Descripcion,
} from "../styles/components/HeroServicios"
import {
  HeroProyecto,
  HeroElec,
  HeroWeb,
  HeroMovil,
} from "../assets/ilustracionesServiciosHero"
import { smoothScroll } from "../hooks/smoothScroll"
import { Context } from "../context"

const HeroServicios = () => {
  let t = useTranslate("heroServicesPage")

  const { idioma } = useContext(Context)

  return (
    <Hero>
      <ParticulasBajo />
      <Container>
        <Contenedor>
          <Item>
            {idioma ? (
              <Title>
                <Ancho>{t("firstTitle")}</Ancho> <br /> {t("secondTitle")}
              </Title>
            ) : (
              <Title>
                <Ancho>{t("firstTitle")}</Ancho>
                <br /> <Spacing>va</Spacing>
                {t("secondTitle")}
              </Title>
            )}
          </Item>
          <Item>
            <Descripcion>{t("firstDescription")}</Descripcion>
            <Descripcion>{t("secondDescription")}</Descripcion>
            <Grid>
              <Icono
                href="#proyecto"
                onClick={() => smoothScroll("proyecto", 1000)}
              >
                <HeroProyecto />
              </Icono>
              <Icono
                href="#electronica"
                onClick={() => smoothScroll("electronica", 1000)}
              >
                <HeroElec />
              </Icono>
              <Icono href="#web" onClick={() => smoothScroll("web", 1000)}>
                <HeroWeb />
              </Icono>
              <Icono href="#movil" onClick={() => smoothScroll("movil", 1000)}>
                <HeroMovil />
              </Icono>
            </Grid>
          </Item>
        </Contenedor>
      </Container>
    </Hero>
  )
}

export default HeroServicios
