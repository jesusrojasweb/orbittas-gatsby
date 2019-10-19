import React, { useContext } from "react"
import { Conexion } from "./Conexion"

import {
  ServicioContainer,
  Item,
  Grid,
  Head,
  Icono,
  Nombre,
  Lista,
  ListItem,
  Img,
  Btn,
} from "../styles/components/Servicio"
import { Context } from "../context"
import Images from "./Images"

const NOMBRE_DEFAULT = "Gestión de Proyectos"
const IMAGEN_DEFAULT =
  "https://jesusrojasweb.github.io/orbittas/img/servicio-proyectos.png"

export const Servicio = ({
  right = true,
  img = IMAGEN_DEFAULT,
  imagenServicio,
  nombre = NOMBRE_DEFAULT,
  id,
  es,
  en,
  nombreEn,
}) => {
  const { idioma } = useContext(Context)

  let servicios
  idioma ? (servicios = en) : (servicios = es)

  const Info = () => (
    <Item>
      <Head>
        <Icono>
          <Images name={img} />
        </Icono>
        {idioma ? <Nombre>{nombreEn}</Nombre> : <Nombre>{nombre}</Nombre>}
      </Head>
      <div>
        <Lista grid={servicios.length > 8}>
          {servicios.length > 8 ? (
            <>
              <div>
                {servicios.slice(0, 8).map(servicio => (
                  <ListItem key={servicio.id}>{servicio.nombre}</ListItem>
                ))}
              </div>
              <div>
                {servicios.slice(9, servicios.length).map(servicio => (
                  <ListItem key={servicio.id}>{servicio.nombre}</ListItem>
                ))}
              </div>
            </>
          ) : (
            servicios.map(servicio => (
              <ListItem key={servicio.id}>{servicio.nombre}</ListItem>
            ))
          )}
        </Lista>
        {idioma ? (
          <Btn to={`/portfolio?=${id}`}>Go to portfolio</Btn>
        ) : (
          <Btn to={`/portfolio?=${id}`}>Ir al portafolio</Btn>
        )}
      </div>
    </Item>
  )

  const ServicioRight = () => (
    <ServicioContainer right={right} id={id}>
      <Grid>
        <Info />
        <Item>
          <Img>
            <Images name={imagenServicio} />
          </Img>
        </Item>
      </Grid>
    </ServicioContainer>
  )
  const ServicioLeft = () => (
    <ServicioContainer right={right} id={id}>
      <Grid>
        <Item>
          <Img>
            <Images name={imagenServicio} />
          </Img>
        </Item>
        <Info />
      </Grid>
      <Conexion />
    </ServicioContainer>
  )
  return <>{right ? <ServicioRight /> : <ServicioLeft />}</>
}
