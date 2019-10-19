import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(edge => {
          return edge.node.fluid.originalName === name
        })

        if (!image) {
          console.log("No existe")
          return null
        }

        return <Img fluid={image.node.fluid} />
      }}
    />
  )
}

export default Image
