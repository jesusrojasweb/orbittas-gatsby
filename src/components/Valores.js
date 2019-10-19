import React from "react"
import { Empatia, Pasion, Focus, Equipo } from "../assets/ilustracionesValores"
import {
  ValoresContainer,
  Grid,
  Item,
  Head,
  Valor,
  Descripcion,
} from "../styles/components/Valores"
import { useTranslate } from "react-translate"

const Valores = () => {
  let t = useTranslate("valoresAboutPage")
  return (
    <ValoresContainer>
      <Grid>
        <Item>
          <Head>
            <Empatia />
          </Head>
          <Valor>{t("empathy")}</Valor>
          <Descripcion>{t("empathyDescription")}</Descripcion>
        </Item>
        <Item>
          <Head>
            <Pasion />
          </Head>
          <Valor>{t("passion")}</Valor>
          <Descripcion>{t("passionDescription")}</Descripcion>
        </Item>
        <Item>
          <Head>
            <Focus />
          </Head>
          <Valor>{t("focus")}</Valor>
          <Descripcion>{t("focusDescription")}</Descripcion>
        </Item>
        <Item>
          <Head>
            <Equipo />
          </Head>
          <Valor>{t("teamwork")}</Valor>
          <Descripcion>{t("teamDesciption")}</Descripcion>
        </Item>
      </Grid>
    </ValoresContainer>
  )
}

export default Valores
