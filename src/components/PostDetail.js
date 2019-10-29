import React from "react"
import ReactMarkdown from "react-markdown"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import {
  Next,
  Details,
  Cabecera,
  Overlay,
  Pie,
  Prev,
  Body,
} from "../styles/components/PostDetail"

const PostDetail = ({ datos, previous, next }) => {
  const { cargo, content, date, thumnail, title, user, userProfile } = datos
  if (next) {
    var { title: nextTitle } = next
    var nextLink = nextTitle
      .toLowerCase()
      .split(" ")
      .join("-")
  }
  if (previous) {
    var { title: previousTitle } = previous
    var prevLink = previousTitle
      .toLowerCase()
      .split(" ")
      .join("-")
  }

  console.log(date)

  return (
    <Details>
      <Cabecera thumnail={thumnail}>
        <Overlay>
          <h1>{title}</h1>
          <div>
            <figure>
              <img src={userProfile} alt={`${user} perfil`} />
            </figure>
            <div>
              <h4>{user}</h4>
              <small>{cargo}</small>
            </div>
            <span>{`${date}`}</span>
          </div>
        </Overlay>
      </Cabecera>
      <Body>
        <ReactMarkdown source={`${content}`} />
      </Body>
      <Pie>
        {previous ? (
          <Prev to={`/blog/${prevLink}`}>
            <FaAngleLeft />
            <span>Anterior</span>
            <strong>{previousTitle}</strong>
          </Prev>
        ) : (
          <div />
        )}
        {next ? (
          <Next to={`/blog/${nextLink}`}>
            <FaAngleRight />
            <span>Anterior</span>
            <strong>{nextTitle}</strong>
          </Next>
        ) : (
          <div />
        )}
      </Pie>
    </Details>
  )
}

export default PostDetail
