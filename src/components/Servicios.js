import React, { useEffect } from "react"
import { Servicio } from "./Servicio"

import { servicios } from "../api/db.json"
import { smoothScroll } from "../hooks/smoothScroll"

const Servicios = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollBy(0, -window.innerHeight)
      var id = window.location.hash.split("#")[1]
    }
    if (id) {
      smoothScroll(id, 1000)
    }
  }, [])

  return (
    <>
      {servicios.map(servicio => (
        <Servicio {...servicio} />
      ))}
    </>
  )
}

export default Servicios
