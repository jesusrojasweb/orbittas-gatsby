import React from "react"
import { Card, View, Details } from "../styles/components/Popular"
import { Link } from "gatsby"

const Popular = ({
  cargo,
  content,
  thumnail,
  title,
  user,
  userHover,
  userProfile,
}) => {
  let link = title
    ? title
        .toLowerCase()
        .split(" ")
        .join("-")
    : "link"
  return (
    <Card thumnail={thumnail} to={title}>
      <Link to={`/blog/${link}`}>
        <View>
          <h2>{title}</h2>
        </View>
        <Details>
          <figure>
            <img src={userProfile} alt={`${user} perfil`} />
          </figure>
          <span>
            <h4>{user}</h4>
            <small>{cargo}</small>
          </span>
        </Details>
      </Link>
    </Card>
  )
}

export default Popular
