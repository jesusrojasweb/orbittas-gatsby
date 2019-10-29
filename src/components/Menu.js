import React, { useState, useEffect } from "react"
import {
  Idioma,
  Header,
  Contenedor,
  Navbar,
  MenuList,
  Item,
  Logo,
  Burger,
  Close,
} from "../styles/components/Menu"
import { FaBars, FaTimes } from "react-icons/fa"
import { useTranslate } from "react-translate"
import nprogress from "nprogress"
import { Location } from "@reach/router"
import ReactGA from "react-ga"

const Menu = ({ index, lang, changeIdioma, idioma }) => {
  const [scroll, setScroll] = useState(false)
  const [show, setShow] = useState(false)
  const [cambio, setCambio] = useState(false)
  let t = useTranslate("menu")

  useEffect(() => {
    document.addEventListener("scroll", mover)
    nprogress.done()
    return () => {
      document.removeEventListener("scroll", mover)
      nprogress.done()
    }
  }, [scroll, cambio])

  function mover() {
    if (typeof window !== `undefined`) {
      const newShowFixed = window.scrollY > 50
      scroll != newShowFixed && setScroll(newShowFixed)
    }
  }
  function click() {
    // window.scrollBy(0, -window.innerHeight);
    nprogress.start()
    setCambio(!cambio)
    if (typeof window !== `undefined`) {
      window.scrollBy({
        top: -4000,
        left: 0,
        behaviour: "smooth",
      })
    }
  }

  return (
    <Location>
      {({ location }) => {
        ReactGA.pageview(location.pathname + location.search)
        return (
          <Header scroll={scroll} fondo={location.pathname} index={index}>
            <Contenedor>
              <Navbar>
                <Logo to={`/`} onClick={() => click()}>
                  <figure>
                    <img
                      src="https://jesusrojasweb.github.io/orbittas/img/logo-largo.png"
                      alt="logo"
                    />
                  </figure>
                </Logo>
                <MenuList show={show} onClick={() => setShow(false)}>
                  <Item onClick={() => click()} to={`/about`}>
                    {t("about")}
                  </Item>
                  <Item onClick={() => click()} to={`/services`}>
                    {t("services")}
                  </Item>
                  <Item onClick={() => click()} to={`/portfolio`}>
                    {t("portfolio")}
                  </Item>

                  <Item onClick={() => click()} to={`/blog`}>
                    Blog
                  </Item>
                  <Item onClick={() => click()} to={`/contact`}>
                    {t("contact")}
                  </Item>
                  {idioma ? (
                    <Idioma onClick={() => changeIdioma(false)}>ES</Idioma>
                  ) : (
                    <Idioma onClick={() => changeIdioma(true)}>EN</Idioma>
                  )}
                </MenuList>
              </Navbar>

              <Burger onClick={() => setShow(true)}>
                <FaBars />
              </Burger>
              <Close show={show} onClick={() => setShow(false)}>
                <FaTimes />
              </Close>
            </Contenedor>
          </Header>
        )
      }}
    </Location>
  )
}

export default Menu
