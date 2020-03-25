import React, { useEffect, useContext } from "react"
import { Testimonio } from "./Testimonio"
import {
  TestimoniosContainer,
  Title,
  Banner,
  Right,
  Left,
  Container,
  Circulo,
} from "../styles/components/Testimonios"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import { useTranslate } from "react-translate"
import { Context } from "../context"
// import Hammer from 'hammerjs'

let contador
const Testimonios = () => {
  let t = useTranslate("testimoniosPage")

  const { idioma } = useContext(Context)

  let $sliderList

  if (idioma || !idioma) {
    contador = 0
  }

  let touchstartY = 0
  let touchstartX = 0
  let touchendX = 0
  let touchendY = 0

  useEffect(() => {
    $sliderList = document.querySelectorAll("#banner")[0]
    document.addEventListener("touchstart", handleTouchStart, false)
    document.addEventListener("touchmove", handleTouchMove, false)

    var xDown = null
    var yDown = null

    function getTouches(evt) {
      return (
        evt.touches || evt.originalEvent.touches // browser API
      ) // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return
      }

      var xUp = evt.touches[0].clientX
      var yUp = evt.touches[0].clientY

      var xDiff = xDown - xUp
      var yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          slide(true)
        } else {
          slide(false)
        }
      }
      /* reset values */
      xDown = null
      yDown = null
    }
  }, [idioma])

  let testimonios = [
    {
      logo:
        "https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fp4b.png?alt=media&token=5d04bcb3-44e0-4573-b358-72c7f1c763d9",
      testimonio:
        "Orbittas, liderado por María Elizabeth, es una empresa que cuenta con el músculo y talento para sacar adelante proyectos complejos de tecnología. Nuestra red social de fútbol que va camino a romper barreras a nivel internacional es una realidad gracias a su arduo y profesional trabajo. Además son asequibles de forma tal que después de desarrollar la herramienta tecnológica solicitada prestan el servicio de mantenimiento, dando soluciones inmediatas a esas situaciones que siempre puede ocurrir! Por otro lado son de ética innegable lo cual genera confianza en ellos como personas y como aliados del negocio!",
      testimonioEn:
        "Orbittas, led by María Elizabeth, is a company that has the muscle and talent to carry out complex technology projects. Our football social network that is on its way to breaking down barriers internationally is a reality thanks to its hard and professional work. They are also affordable in such a way that after developing the requested technological tool they provide the maintenance service, giving immediate solutions to those situations that can always happen! On the other hand they are of undeniable ethics which generates trust in them as people and as business allies!",
      persona: "Felipe Sandoval",
      cargo: "Founder, P4B",
      personaProfile: "",
    },
    {
      logo:
        "https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Flogo-rmd.png?alt=media&token=9a08d427-322f-437d-883f-e807d852b7b1",
      testimonio:
        "Orbittas es un gran equipo de ingenieros, profesionales, responsables y con una gran calidad humana. Dispuestos a resolver cada situación y cada reto de ingeniería con la mayor excelencia posible. ¡Esta gente es simplemente genial!",
      testimonioEn:
        "Orbittas is a great engineering team, very professional, responsible and with great human quality. Willing to solve every situation and every engineering challenge with the greatest possible excellence. These people are simply amazing",
      persona: "Raul Moreno",
      cargo: "Founder of Design and Engineering",
      personaProfile:
        "https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fraul-moreno.png?alt=media&token=884caa0b-cac2-4fb9-befb-12d7591d085c",
    },
  ]

  function handleGesure() {
    if (!(touchendX < touchstartX) && !(touchendX > touchstartX)) {
      if (touchendY < touchstartY) {
        slide(false)
      }
      if (touchendY > touchstartY) {
        slide(true)
      }
    }
  }

  function siguiente() {
    slide(true)
  }

  function anterior() {
    slide(false)
  }

  function slide(direccion) {
    for (let i = 0; i < $sliderList.children.length; i++) {
      let hijo = $sliderList.children[i]
      let next
      console.log($sliderList.children.length)
      if (direccion) {
        next = i + 1
        if (next >= $sliderList.children.length) {
          next = 0
        }
      } else {
        next = i - 1
        if (next < 0) {
          next = $sliderList.children.length - 1
        }
      }
      let siguiente = $sliderList.children[next]
      if (hijo.classList[0] === "active" || hijo.classList[2] === "active") {
        cambiar(hijo, siguiente)
        break
      }
    }
  }

  function cambiar(hijo, siguiente) {
    hijo.classList.remove("active")
    siguiente.classList.add("active")
  }

  return (
    <TestimoniosContainer>
      <Title>{t("title")}</Title>
      <Container>
        <Banner id="banner">
          {testimonios.map(testimonio => {
            contador += 1
            console.log("contador")
            console.log(contador)
            if (contador === 1) {
              return (
                <Testimonio
                  siguiente={siguiente}
                  anterior={anterior}
                  className="active"
                  idioma={idioma}
                  {...testimonio}
                />
              )
            } else {
              return (
                <Testimonio
                  siguiente={siguiente}
                  anterior={anterior}
                  idioma={idioma}
                  {...testimonio}
                />
              )
            }
          })}
        </Banner>
        <Right onClick={() => siguiente()}>
          <Circulo>
            <FaAngleRight />
          </Circulo>
        </Right>
        <Left onClick={() => anterior()}>
          <Circulo>
            <FaAngleLeft />
          </Circulo>
        </Left>
      </Container>
    </TestimoniosContainer>
  )
}

export default Testimonios
