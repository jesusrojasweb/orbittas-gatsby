import React, { useContext } from "react"

import {
  Proyecto,
  Imagen,
  Caracteristicas,
  Nombre,
} from "../styles/components/ProyectoItem"
import { Context } from "../context"

const DEFAULT_IMAGE =
  "https://jesusrojasweb.github.io/orbittas/img/mockup-p4b.png"

export const ProyectoItem = ({
  _id,
  nombre = "P4b",
  src = DEFAULT_IMAGE,
  caracteristicas = "Wordpress",
  link = "/portfolio/proyecto",
  nombreEn,
}) => {
  const { idioma } = useContext(Context)
  return (
    <Proyecto to={`/portfolio/${link}`}>
      {idioma ? <Nombre>{nombreEn}</Nombre> : <Nombre>{nombre}</Nombre>}

      <Imagen>
        <img src={src} alt={`${nombre} imagen`} />
      </Imagen>
      <Caracteristicas>
        {caracteristicas.slice(0, 3).map(({ value }) => value + " / ")}
      </Caracteristicas>
    </Proyecto>
  )
}
