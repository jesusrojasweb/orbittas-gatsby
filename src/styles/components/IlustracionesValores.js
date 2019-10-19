import styled from "styled-components"
import { palpitar, floating, color, escalar } from "../animations"

export const Palpitar = styled.path`
  ${palpitar()}
`
export const Floating = styled.path`
  ${floating()}
`
export const Aparecer = styled.circle`
  ${escalar()}
`

export const Color = styled.path`
  ${color()}
`
