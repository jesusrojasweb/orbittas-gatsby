import React from "react"
import {
  Escucha,
  Compania,
  Ejecuta,
  Estudio,
} from "../assets/ilustracionesContactoIndex"
import {
  IconosItem,
  Contacto,
  Btn,
  Caracteristica,
  Grid,
  Descripcion,
  Icono,
  Animanos,
  GridItem,
  Iconos,
  Informacion,
} from "../styles/components/ContactoIndex"
import { useTranslate } from "react-translate"
import { ConexionArriba } from "./ConexionArriba"
import { ParticulasBajo } from "./ParticulasBajo"

const ContactoIndex = () => {
  const c = useTranslate("contactHomePage")

  return (
    <Contacto>
      <ParticulasBajo />
      <Grid>
        <GridItem>
          <Animanos>{c("title")}</Animanos>
          <Iconos>
            <IconosItem>
              <Icono>
                <Escucha />
              </Icono>
              <Caracteristica>
                <Descripcion>{c("listen")}</Descripcion>
              </Caracteristica>
            </IconosItem>
            <IconosItem>
              <Icono>
                <Estudio />
              </Icono>
              <Caracteristica>
                <Descripcion>{c("research")}</Descripcion>
              </Caracteristica>
            </IconosItem>
            <IconosItem>
              <Icono>
                <Ejecuta />
              </Icono>
              <Caracteristica>
                <Descripcion>{c("plan")}</Descripcion>
              </Caracteristica>
            </IconosItem>
            <IconosItem>
              <Icono>
                <Compania />
              </Icono>
              <Caracteristica>
                <Descripcion>{c("together")}</Descripcion>
              </Caracteristica>
            </IconosItem>
          </Iconos>
          <Informacion>
            <Btn to={`/contact`}>{c("button")}</Btn>
          </Informacion>
        </GridItem>
      </Grid>
      <ConexionArriba />
    </Contacto>
  )
}

export default ContactoIndex
