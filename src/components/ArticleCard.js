import React from "react"
import { Card, View, Details } from "../styles/components/ArticleCard"
import { Link } from "gatsby"

const ArticleCard = ({
  cargo,
  content,
  thumnail,
  title,
  user,
  userHover,
  userProfile,
}) => {
  let link = title
    .toLocaleLowerCase()
    .split(" ")
    .join("-")

  let resumen

  let total = content.split(" ")

  if (total.length > 29) {
    let cortado = total.slice(0, 29).join(" ")

    resumen = cortado + "..."
  } else {
    resumen = content
  }
  return (
    <Card thumnail={thumnail} to={title}>
      <Link to={`/blog/${link}`}>
        <View>
          <h2>{title}</h2>
        </View>
        <Details>
          <p>{resumen}</p>
          <div>
            <figure>
              <img src={userProfile} alt={`${user} perfil`} />
            </figure>
            <div>
              <h4>{user}</h4>
              <small>{cargo}</small>
            </div>
          </div>
        </Details>
      </Link>
    </Card>
  )
}

export default ArticleCard
