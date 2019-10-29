import React, { createContext, useState } from "react"

export const Context = createContext()

export const Provider = ({ children }) => {
  const [idioma, setIdioma] = useState(false)
  const [idiomaChanged, setIdomaGhanged] = useState(false)
  const [lang, setLang] = useState("")
  const [contador, setContador] = useState(0)
  const [mostPopular, setMostPopular] = useState({})
  const [articles, setArticles] = useState([])

  const value = {
    idioma,
    handleIdioma: info => {
      setIdioma(info)
    },
    idiomaChanged,
    handleIdiomaChanged: info => {
      setIdomaGhanged(info)
    },
    lang,
    handleLang: info => {
      setLang(info)
    },
    contador,
    handleContador: info => {
      setContador(info)
    },
    mostPopular,
    handleMostPopular: info => {
      setMostPopular(info)
    },
    articles,
    handleArticles: info => {
      setArticles(info)
    },
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
