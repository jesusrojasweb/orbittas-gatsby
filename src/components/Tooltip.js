import React from "react"
import { TooltipContainer, Tiptext } from "../styles/components/Tooltip"

export const Tooltip = ({ href, target, tiptext, children, fondo }) => {
  return (
    <TooltipContainer href={href} target={target} fondo={fondo}>
      <Tiptext>{tiptext}</Tiptext>
      {children}
    </TooltipContainer>
  )
}
