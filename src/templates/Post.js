import React from "react"
import PostDetail from "../components/PostDetail"

export default function Post({ pageContext }) {
  return <PostDetail {...pageContext} />
}
