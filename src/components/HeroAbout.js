import React from "react"
import { ParticulasBajo } from "./ParticulasBajo"
import {
  Hero,
  Grid,
  Item,
  Title,
  Sangria,
  Spacing,
  Descripcion,
} from "../styles/components/HeroAbout"
import { useTranslate } from "react-translate"

const HeroAbout = () => {
  let t = useTranslate("heroAboutPage")
  return (
    <Hero>
      <ParticulasBajo />
      <Grid>
        <Item>
          <Title>
            ¡{t("firstTitle")}
            <br />{" "}
            <Sangria>
              <Spacing>Va</Spacing>
              {t("secondTitle")}!
            </Sangria>
          </Title>
        </Item>
        <Item>
          <Descripcion>{t("firstDescription")}</Descripcion>
          <Descripcion>{t("secondDescription")}</Descripcion>
        </Item>
      </Grid>
    </Hero>
  )
}

export default HeroAbout
