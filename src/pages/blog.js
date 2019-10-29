import React, { useContext } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import GridCard from "../components/GridCard"
import { Context } from "../context"
import Popular from "../components/Popular"

export const query = graphql`
  query GET_POSTS {
    allApiArticles {
      edges {
        node {
          data {
            _id
            cargo
            click
            content
            thumnail
            title
            user
            userHover
            userProfile
            date
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  const {
    contador,
    handleContador,
    articles,
    handleArticles,
    mostPopular,
    handleMostPopular,
  } = useContext(Context)
  if (contador === 0) {
    const allArticles = data.allApiArticles.edges[0].node.data
    const orderMostPopular = allArticles.sort((a, b) => b.click - a.click)
    const otherArticles = orderMostPopular.splice(
      1,
      orderMostPopular.length - 1
    )

    handleMostPopular(orderMostPopular[0])
    handleArticles(otherArticles)
    handleContador(1)
  }
  return (
    <>
      <SEO title="Blog" />
      <Popular {...mostPopular} />
      <GridCard articles={articles} />
    </>
  )
}
export default BlogPage
