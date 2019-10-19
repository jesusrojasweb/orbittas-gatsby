import React, { useState, useEffect, useContext } from "react"

import { ProyectoDetails } from "./ProyectoDetails"
import {
  Body,
  ProyectoContainer,
  Grid,
  Volver,
  Item,
  Caption,
  Nombre,
  Descripcion,
  Texto,
  Boton,
  Icono,
  Imagen,
} from "../styles/components/Proyecto"
import { FaAngleLeft } from "react-icons/fa"
import { ScrollIcon } from "../assets/scrollIcon"
import { smoothScroll } from "../hooks/smoothScroll"
import { Context } from "../context"
import SEO from "./seo"

const ProyectoComponent = proyecto => {
  const { idioma } = useContext(Context)

  const [scroll, setScroll] = useState(false)
  const [show, setShow] = useState(false)
  let contador = 0
  let ancho = 0
  if (typeof window !== `undefined`) {
    ancho = window.screen.availWidth
  }
  const {
    slogan,
    src,
    nombre,
    descripcionShort,
    sloganEn,
    descripcionShortEn,
    nombreEn,
  } = proyecto

  useEffect(() => {
    handleScroll()
  }, [])

  function handleScroll() {
    document.addEventListener("mousewheel", e => detectar(e))
    setScroll(true)
  }

  console.log(ancho)

  function detectar(e) {
    console.log("se hizo scroll")
    if (e.deltaY > 0) {
      toggle()
    }
  }
  function toggle() {
    setShow(!show)
  }

  function showDetail() {
    if (ancho > 800) {
      setShow(true)
      console.log("mostrar show")
    } else {
      console.log("smooth")
      smoothScroll("details", 1000)
    }
  }

  return (
    <ProyectoContainer>
      <SEO title={nombre} />
      <Body />
      <Grid grid={nombre === undefined}>
        <Volver to="/portfolio">
          <FaAngleLeft />
        </Volver>
        <Imagen>
          <img src={src} alt="p4b" />
        </Imagen>
        <Item>
          {idioma ? (
            <>
              <Caption>{sloganEn}</Caption>
              <Nombre>{nombreEn}</Nombre>
              <Descripcion>{descripcionShortEn}</Descripcion>
            </>
          ) : (
            <>
              <Caption>{slogan}</Caption>
              <Nombre>{nombre}</Nombre>
              <Descripcion>{descripcionShort}</Descripcion>
            </>
          )}

          <Boton onClick={() => showDetail()} href="#">
            <Texto>Scroll para la información del proyecto</Texto>{" "}
            <Icono>
              <ScrollIcon />{" "}
            </Icono>
          </Boton>
        </Item>
      </Grid>
      <ProyectoDetails
        id="details"
        mostrar={show}
        handleMostrar={setShow}
        {...proyecto}
        idioma={idioma}
      />
    </ProyectoContainer>
  )
}
export default ProyectoComponent
