import React, { useContext } from "react"
import {
  EquipoContainer,
  Contenedor,
  Title,
  Grid,
  Item,
  Head,
  Body,
  Nombre,
  Cargo,
  Hover,
  LoaderCircle,
  LoaderCircleItem,
} from "../styles/components/Equipo"
import { ConexionArriba } from "./ConexionArriba"
import { Context } from "../context"
import { useTranslate } from "react-translate"

let contador = 0
let ultimo
let cuatro
let cinco

const Equipo = ({ usuarios }) => {
  const { idioma } = useContext(Context)
  if (usuarios === null || usuarios === undefined) {
    usuarios = []
  }

  const t = useTranslate("teamAboutPage")
  return (
    <EquipoContainer>
      <Contenedor>
        <Title>{t("title")}</Title>
        <Grid class="grid">
          {usuarios[0] === undefined || usuarios[0] === null ? (
            // true
            <LoaderCircle>
              <LoaderCircleItem />
            </LoaderCircle>
          ) : (
            usuarios.map(equipo => {
              contador += 1
              if (contador === 1) {
                cuatro = true
              } else {
                cuatro = false
              }

              if (contador === 2) {
                cinco = true
              } else {
                cinco = false
              }
              if (contador === 5) {
                ultimo = true
                contador = 0
              } else {
                ultimo = false
              }

              return (
                <Item
                  key={equipo._id}
                  ultimo={ultimo}
                  cuatro={cuatro}
                  cinco={cinco}
                >
                  <Head>
                    <img src={equipo.profileImage} alt="persona" />
                    <Hover>
                      <img
                        src={equipo.profileHover}
                        alt="persona"
                        class="img"
                      />
                    </Hover>
                  </Head>
                  <Body>
                    <Nombre>{equipo.name}</Nombre>
                    {idioma ? (
                      <Cargo>{equipo.cargoEn}</Cargo>
                    ) : (
                      <Cargo>{equipo.cargo}</Cargo>
                    )}
                  </Body>
                </Item>
              )
            })
          )}
        </Grid>
      </Contenedor>
      <ConexionArriba />
    </EquipoContainer>
  )
}

export default Equipo
