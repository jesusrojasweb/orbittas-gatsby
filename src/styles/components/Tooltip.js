import styled, { css } from "styled-components"
import { colorPrincipal, mobile } from "../variables"

export const Tiptext = styled.span`
  visibility: hidden;
  background: black;
  text-align: center;
  border-radius: 5px;
  padding: 6px 1em;
  position: absolute;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  top: -9px;
  right: 125%;
  font-size: 1rem;
  opacity: 0;
  transition: 0.3s;
  width: 8em;
  color: white;
  @media (${mobile}) {
    display: none;
  }
`

export const TooltipContainer = styled.a`
  font-size: 2.5rem;
  position: relative;
  color: ${colorPrincipal};
  ${({ fondo }) =>
    fondo &&
    css`
      color: white;
    `}
  &:hover ${Tiptext}{
    visibility: visible;
    opacity: 1;
  }
`
