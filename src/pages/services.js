import React from "react"

import SEO from "../components/seo"
import HeroServicios from "../components/HeroServicios"
import Servicios from "../components/Servicios"

const ServicesPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeroServicios />
      <Servicios />
    </>
  )
}
export default ServicesPage
