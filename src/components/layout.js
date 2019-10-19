/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { TranslatorProvider } from "react-translate"
import Menu from "./Menu"
import Footer from "./Footer"
import { Context } from "../context"

const Layout = ({ children }) => {
  const { handleIdioma, handleLang, handleIdiomaChanged } = useContext(Context)

  const [ruta, setRuta] = useState(null)
  let language = "es"
  if (typeof window !== `undefined`) {
    language = window.navigator.language
  }
  let otroIdioma = language.split("-")
  const [idioma, setIdioma] = useState(otroIdioma[0] === "es" ? false : true)

  const [lang, setLang] = useState(idioma ? "en" : "es")

  function handleIdiom(argumento) {
    if (!argumento) {
      setIdioma(false)
      setLang("es")
      handleIdiomaChanged(true)
    }
    if (argumento) {
      setIdioma(true)
      setLang("en")
      handleIdiomaChanged(true)
    }
  }
  handleLang(lang)
  handleIdioma(idioma)

  let traduccion = require(`../assets/i18n/${lang}.json`)

  return (
    <>
      <TranslatorProvider translations={traduccion}>
        <Menu
          index={ruta}
          lang={lang}
          changeIdioma={handleIdiom}
          idioma={idioma}
        />
        {children}
        <Footer />
      </TranslatorProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
