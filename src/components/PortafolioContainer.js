import React from "react"
import { Proyectos } from "../styles/components/PortafolioContainer"
import { ProyectoItem } from "./ProyectoItem"

export const PortafolioContainer = ({ proyectos, pagina }) => {
  return (
    <Proyectos pagina={pagina}>
      {proyectos[0] === undefined ? (
        <></>
      ) : (
        proyectos.map(proyecto => (
          <ProyectoItem link={proyecto.link} key={proyecto._id} {...proyecto} />
        ))
      )}
    </Proyectos>
  )
}
