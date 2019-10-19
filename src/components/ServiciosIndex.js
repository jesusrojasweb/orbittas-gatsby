import React from "react"
import {
  Head,
  Servicios,
  Grid,
  Descripcion,
  Item,
  NombreServicio,
  Title,
} from "../styles/components/ServiciosIndex"
import { useTranslate } from "react-translate"
import { CirculoServicios } from "./CirculoServicios"

const ServiciosIndex = () => {
  let servicios = useTranslate("servicesName")
  let descripciones = useTranslate("servicesHomePage")
  return (
    <Servicios>
      <Grid>
        <Title>{servicios("title")}</Title>
        <Item>
          <Head to={`/services#proyecto`}>
            <CirculoServicios
              circulo="proyectos-circulo.png"
              imagen="proyectos.png"
            />
          </Head>
          <NombreServicio>{servicios("proyects")}</NombreServicio>
          <Descripcion>{descripciones("proyectsDescription")}</Descripcion>
        </Item>
        <Item>
          <Head to={`/services#electronica`}>
            <CirculoServicios
              circulo="electronica-circulo.png"
              imagen="electronica.png"
            />
          </Head>
          <NombreServicio>{servicios("electronic")}</NombreServicio>
          <Descripcion>{descripciones("electronicDescription")}</Descripcion>
        </Item>
        <Item>
          <Head to={`/services#web`}>
            <CirculoServicios circulo="web-circulo.png" imagen="web.png" />
          </Head>
          <NombreServicio>{servicios("web")}</NombreServicio>
          <Descripcion>{descripciones("webDescription")}</Descripcion>
        </Item>
        <Item>
          <Head to={`/services#movil`}>
            <CirculoServicios circulo="movil-circulo.png" imagen="movil.png" />
          </Head>
          <NombreServicio>{servicios("movil")}</NombreServicio>
          <Descripcion>{descripciones("movilDescription")}</Descripcion>
        </Item>
      </Grid>
    </Servicios>
  )
}
export default ServiciosIndex
