import React from "react"
import ArticleCard from "./ArticleCard"
import { Grid } from "../styles/components/GridCard"

const GridCard = ({ articles }) => {
  return (
    <Grid>
      {articles.map(article => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </Grid>
  )
}

export default GridCard
