import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PortafolioPageContainer from "../components/PortafolioPageContainer"

export const query = graphql`
  query GET_PROYECTOS_PAGE {
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
            servicio
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

const PortfolioPage = ({ data }) => {
  return (
    <>
      <SEO title="Portfolio" />
      <PortafolioPageContainer
        proyectos={data.allApiProyectos.edges[0].node.data}
      />
    </>
  )
}
export default PortfolioPage
