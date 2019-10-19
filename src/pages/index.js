import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import HeroIndex from "../components/HeroIndex"
import AboutIndex from "../components/AboutIndex"
import ServiciosIndex from "../components/ServiciosIndex"
import PortafolioIndex from "../components/PortafolioIndex"
import Testimonios from "../components/Testimonios"
import ContactoIndex from "../components/ContactoIndex"

export const query = graphql`
  query GET_PROYECTOS {
    allApiProyectos {
      edges {
        node {
          data {
            _id
            link
            nombre
            src
            estado
            nombreEn
            caracteristicas {
              value
              label
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeroIndex />
      <AboutIndex />
      <ServiciosIndex />
      <PortafolioIndex
        pagina={false}
        proyectos={data.allApiProyectos.edges[0].node.data}
      />
      <Testimonios />
      <ContactoIndex />
    </>
  )
}
export default IndexPage
