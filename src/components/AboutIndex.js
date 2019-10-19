import React from "react"
import {
  Equipo,
  Calidad,
  Eficiencia,
  Soluciones,
} from "../assets/IlustracionesAboutIndex"
import {
  ImageRotate,
  About,
  Btn,
  Item,
  Cualidad,
  Cualidades,
  CualidadNombre,
  Descripcion,
  Grid,
  Icono,
  Imagen,
  Contenedor,
  Title,
  Img,
} from "../styles/components/AboutIndex"
import { useTranslate } from "react-translate"
import { ParticulasBajo } from "./ParticulasBajo"
import { Conexion } from "./Conexion"
import Images from "./Images"

const AboutIndex = () => {
  let t = useTranslate("aboutHomePage")
  return (
    <About>
      <ParticulasBajo />
      <Grid>
        <Title>{t("title")}</Title>
        <Item>
          <Contenedor>
            <Descripcion>{t("firstParagraph")}</Descripcion>
            <Descripcion>{t("secondParagraph")}</Descripcion>
            <Cualidades>
              <Cualidad>
                <Icono>
                  <Equipo />
                </Icono>
                <CualidadNombre>{t("expert")} </CualidadNombre>
              </Cualidad>
              <Cualidad>
                <Icono>
                  <Calidad />
                </Icono>
                <CualidadNombre>{t("quality")} </CualidadNombre>
              </Cualidad>
              <Cualidad>
                <Icono>
                  <Eficiencia />
                </Icono>
                <CualidadNombre>{t("efficiency")} </CualidadNombre>
              </Cualidad>
              <Cualidad>
                <Icono>
                  <Soluciones />
                </Icono>
                <CualidadNombre>{t("solutions")} </CualidadNombre>
              </Cualidad>
            </Cualidades>
          </Contenedor>
          <Imagen>
            <Img>
              <Images name="quienes-somos.png" />
            </Img>
            <ImageRotate>
              <Images name="somos.png" />
            </ImageRotate>
          </Imagen>
        </Item>
        <Item>
          <Btn to={`/about`}>{t("button")} </Btn>
        </Item>
      </Grid>
      <Conexion />
    </About>
  )
}
export default AboutIndex
