import React, { Fragment } from "react"
import { TopContainer, BottomContainer } from "../styles/components/Conexion"

const Conect = props => (
  <svg
    viewBox="0 0 2600 131.1"
    preserveAspectRatio="none"
    style={{
      width: "calc(100% + 1.3px)",
      position: "relative",
      left: "50%",
      WebkitTransform: "translateX(-50%)",
      msTransform: "translateX(-50%)",
    }}
    display="block"
    {...props}
  >
    <style>
      {
        ".prefix__elementor-shape-fill{fill:#fff;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}"
      }
    </style>
    <path className="prefix__elementor-shape-fill" d="M0 0h2600v69.1L0 0z" />
    <path
      className="prefix__elementor-shape-fill"
      d="M0 0h2600v69.1H0z"
      opacity={0.5}
    />
    <path
      className="prefix__elementor-shape-fill"
      d="M2600 0H0v130.1l2600-61z"
      opacity={0.25}
    />
  </svg>
)

export const Conexion = props => {
  return (
    <Fragment>
      <TopContainer>
        <Conect />
      </TopContainer>
      <BottomContainer>
        <Conect />
      </BottomContainer>
    </Fragment>
  )
}
