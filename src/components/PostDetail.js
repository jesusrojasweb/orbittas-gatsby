import React, { useEffect } from "react"
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
  const {
    _id,
    title,
    titleEn,
    link,
    user,
    username,
    cargo,
    content,
    contentEn,
    thumnail,
    date,
    userProfile,
    userHover,
    click,
  } = datos
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

  useEffect(() => {
    console.log("hola como estas")
    if (typeof window !== `undefined`) {
      let clickSuma = {
        ...datos,
        click: click + 1,
      }
      let data = JSON.stringify(clickSuma)
      window
        .fetch(`https://orbittasteam-ssr.jesusrojasweb.now.sh/posts/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(res => {
          console.log("Se edito correctamente el articulo")
        })
        .catch(e => console.error("Hubo un error", e))
    }
  }, [])

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
