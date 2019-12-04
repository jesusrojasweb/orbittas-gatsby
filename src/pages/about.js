import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import HeroAbout from "../components/HeroAbout"
import Valores from "../components/Valores"
import Equipo from "../components/Equipo"

export const query = graphql`
  query GET_USERS {
    allApiUsuarios {
      edges {
        node {
          data {
            _id
            name
            cargo
            cargoEn
            profileImage
            profileHover
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeroAbout />
      <Valores />
      <Equipo usuarios={data.allApiUsuarios.edges[1].node.data} />
    </>
  )
}
export default AboutPage
