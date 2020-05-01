import React from "react"
import { graphql } from "gatsby"
import { users } from "../api/db.json"

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
  console.log(data.allApiUsuarios.edges)
  return (
    <>
      <SEO title="About" />
      <HeroAbout />
      <Valores />
      {/*<Equipo usuarios={data.allApiUsuarios.edges[1].node.data} />*/}
      <Equipo usuarios={users} />
    </>
  )
}
export default AboutPage
