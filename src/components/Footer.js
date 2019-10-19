import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaRegEnvelope,
  FaMobileAlt,
} from "react-icons/fa"
import {
  FooterContainer,
  Grid,
  Item,
  Title,
  Img,
  Copy,
  Sociales,
  Icono,
  Li,
  Ul,
} from "../styles/components/Footer"
import { Logo } from "./Logo"
import { useTranslate } from "react-translate"

const Footer = () => {
  const t = useTranslate("footer")
  console.log("footer")
  return (
    <FooterContainer>
      <Grid>
        <Item>
          {/*<Img src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Flogo-emblema.png?alt=media&token=14d3d373-8259-4f5d-85f2-fdbaddb71cd7" alt="logo con emblema"/>*/}
          <Logo />
        </Item>
        <Item>
          <Title>{t("info")}</Title>
          <Ul>
            <Li>
              {" "}
              <FaRegEnvelope /> info@orbittas.com
            </Li>
            <Li>
              {" "}
              <FaMobileAlt /> +57 302 2457991
            </Li>
          </Ul>
        </Item>
        <Item>
          <Title>{t("social")}</Title>
          <Sociales>
            <li>
              <Icono href="https://www.facebook.com/orbittas" target="_blank">
                <FaFacebook />
              </Icono>
            </li>
            <li>
              <Icono href="https://www.instagram.com/orbittas/" target="_blank">
                <FaInstagram />
              </Icono>
            </li>
          </Sociales>
        </Item>
      </Grid>
      <Copy>&copy; Copyright {t("copy")}</Copy>
    </FooterContainer>
  )
}

export default Footer
