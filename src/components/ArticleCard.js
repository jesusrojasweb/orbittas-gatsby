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
  return (
    <Card thumnail={thumnail} to={title}>
      <Link to={`/blog/${link}`}>
        <View>
          <h2>{title}</h2>
        </View>
        <Details>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
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
