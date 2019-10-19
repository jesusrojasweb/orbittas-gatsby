import {css} from 'styled-components'
import {mobile} from './variables'

export const Margen = ()=> css`
  padding: 10em 6em 4em;
  height: 1066px;
  box-sizing: border-box;
  height: 700px;
  max-width: 1420px;
  width: 100%;
  @media(${mobile}){
    padding: 2em 3em 6em 2em;
  }
  @media(min-width: 1420px){
    margin: 0 auto;
  }
`
