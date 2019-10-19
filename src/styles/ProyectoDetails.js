import styled,{css} from 'styled-components'
import {Link} from 'gatsby'
import {colorPrincipal, tablet, mobile, fuentePrincipal, fuenteSecundaria, btn} from "../variables";

export const Hover = styled.div`
  width: 30%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.5);
  top: 0;
  left: -100%;
  z-index: 1000;
  transition: .3s;
  transition: 1s;
  @media(${tablet}){
    display: none;
  }
  ${({active})=> active && css`
    left: 0;
  `}
`
export const DetalleClose = styled.button`
  background: none;
  color: white;
  font-size: 2rem;
  border: none;
  position: absolute;
  right: 1em;
  top: 2.3em;
  cursor: pointer;
  &:focus{
    outline: none;
  }
`
export const Detalle = styled.div`
  background: white;
  position: absolute;
  width: 70%;
  box-sizing: border-box;
  right: -100%;
  top: 0;
  z-index: 1000;
  padding: 5em 6em;
  overflow: hidden scroll;
  height: 100%;
  transition: 1s;
  @media(${tablet}){
    overflow: hidden;
    height: auto;
    right: 0;
    top: 100vh;
    width: 100%;
  }
  @media(${mobile}){
    padding: 5em 3em;
  }
  &::-webkit-scrollbar{
    width: 9px;
  }
  &::-webkit-scrollbar-thumb{

    background: ${colorPrincipal};
    border-radius: 5px;
    border-right: 2px solid white;
  }
  ${({active})=> active && css`
    right: 0;
  `}
      
`
export const Contenedor = styled.div`
  position: relative;
`
export const Nombre = styled.h2`
  color: ${colorPrincipal};
  font-family: ${fuentePrincipal};
  font-size: 4rem;
  text-align: center;
  margin-top: 0;
`
export const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  @media(${mobile}){
    flex-direction: column;
  }
`
export const Item = styled.h4`
  color: ${colorPrincipal};
`
export const Imagen = styled.div`
  width: 100%;
  background: white;
  margin: 2em 0;
  & img{
    vertical-align: top;
  }
`
export const Subtitle = styled.h3`
  color: ${colorPrincipal};
  font-family: ${fuentePrincipal};
  font-size: 2rem;
`
export const Gustar = styled.h3`
  color: ${colorPrincipal};
  text-align: center;
  font-size: 1.5rem;
`
export const Boton = styled.div`
  display: flex;
  justify-content: center;
`
export const Btn = styled(Link)`
  ${btn}
  background: ${colorPrincipal};
  border: none;
  text-align: center;
`
