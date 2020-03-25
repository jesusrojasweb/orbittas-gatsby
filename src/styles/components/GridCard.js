import styled from "styled-components"
import { mobile } from "../variables"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3em;
  margin: 2em 6em;
  @media (${mobile}) {
    margin: 2em 3em;
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    margin: 2em 3em;
    grid-template-columns: 1fr 1fr;
  }
`
