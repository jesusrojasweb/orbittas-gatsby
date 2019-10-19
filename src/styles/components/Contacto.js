import styled, {css} from 'styled-components'
import {colorFluerecente ,colorPrincipal,fuenteSecundaria, mobile, tablet, fuentePrincipal, btn} from "../variables";
import {Margen} from "../Styles";
import {loaderCircle} from "../animations";
import {FaUpload} from "react-icons/fa";
import {floating} from '../animations'

export const LoaderCircle = styled.div`
  display: inline-block;
  transform: translateZ(1px);
  margin-right: 1em;
`
export const LoaderCircleItem = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 6px;
  border-radius: 50%;
  background: #fff;
  ${loaderCircle()}
`

const inputStyle = ()=> css`
  background: none;
  border: none;
  font-family: ${fuenteSecundaria};
  padding: 1em;
  transition: .3s;
  background: white;
  color: ${colorPrincipal};
  border-radius: 5px;
  margin-bottom: 1em;
  &::placeholder{
    color:#009270;
    color:rgba(0,146,112,.5);
  }
  &:focus{
    border-color: white;
    outline: none;
  }
`

export const ContactoContainer = styled.section`
  overflow: hidden;
  background: ${colorPrincipal};
  @media(${mobile}){
    height: auto;
  }
`
export const Upload = styled(FaUpload)`
  font-size: 2rem;
`


export const Grid = styled.div`
  ${Margen}
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 2em;
  padding-bottom: 0;
  position: relative;
  padding-top: 8em;
  height: 100vh;
  @media(${tablet}){
    grid-template-columns: 1fr;
    height: auto;
  }
  @media(${mobile}){
    padding-top: 5em;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    padding: 7em 2em;
  }
`

export const Animanos = styled.h1`
  color: white;
  font-family: ${fuentePrincipal};
  font-size: 3rem;
  @media(${mobile}){
    font-size: 2rem;
  }
`

export const Item = styled.div`
  align-self: center;
  margin-bottom: 8em;
  &:first-child{
    align-self: start;
    margin-bottom: 8em;
  }
  @media(${mobile}){
    margin-bottom: 4em;
    &:first-child{
      margin-bottom: 1em;
    }
  }
`

export const Formulario = styled.form`
  width: 93%;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 6em;
  padding: 0;
  @media(${tablet}){
    margin-top: 0;
  }
  @media(${mobile}){
    width: 100%;
    grid-template-columns: 1fr;  
  }
  @media (max-width: 700px) and (orientation: landscape) {
    width: 100%;
  }
`
export const TextArea = styled.textarea`
  ${inputStyle}
  grid-row: 1 / 3;
  grid-column: 5/7;
  border: 2px solid white;
  @media(${mobile}){
    grid-column: 1/2;
    grid-row: 4;
  }
`
export const InputName = styled.input`
${inputStyle}
  grid-column: 2 span;
  @media(${mobile}){
    grid-column: 1 span;
  }
`
export const InputEmail = styled.input`
  ${inputStyle}
`
export const FileUpload = styled.label`
  background: none;
  cursor: pointer;
  border: none;

`

export const Aviso = styled.div`
  background: rgba(0,0,0,.2);
  padding: .5em 1em;
  display: flex;
  align-items: center;
  color: white;
  border-radius: 5px;
  justify-content: space-around;
  transition: .3s;
  opacity: 1;
  & svg{
    margin-right: 1em;
    font-size: 2em;
  }
  ${({success}) => success && css`
    background: #92ef00ab;
  `}
  ${({success})=> success === false && css`
    background: #ea1b1b
  `}
  ${({vacio})=> vacio && css`
    opacity: 0;
  `}
`

export const Linea = styled.div`
  grid-column: 1/4;
  display: grid;
  /* grid-template-columns: 5fr 1fr 1fr; */
  grid-template-columns: 5fr 1fr;
  grid-gap: 2em;
  align-items: center;
  z-index: 800;
  @media(${mobile}){
    grid-column: 1/ 2;
    grid-template-columns: 2fr 9fr;
    grid-gap: 1em;
    & ${Aviso}{
      grid-row-start: 2;
      grid-column-start: 2 span;
    }
  }
`
export const Span = styled.span`
  color: white;
  font-size: 1.5rem;
`
export const InputFile = styled.input`
  display: none;
`

export const Btn = styled.button`
  ${btn()}
  background: none;
  padding: .8em 1.5em;
  z-index: 800;

  &:hover{
    border-color: ${colorFluerecente};
    background: ${colorFluerecente};
    color: ${colorPrincipal};
  }
  &:focus{
    outline: none;
  }
`
// export const Img = styled.img`
//   width: 49%;
//   margin-left: 1em;
// `
export const ImgSend = styled.img`
  width: 42%;
`
export const Robots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  flex-direction: column;
  @media(${tablet}){
    display: none;
  }
`
export const Imagen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5em
  & img{
    position: absolute;
    width: 90%;
    &:first-child{
      width: 70%;
    }
  }
  @media(${mobile}){
    display: none;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    display: none;
  }
`
export const ImageRotate = styled.div`
  background: none;
  position: absolute;
  width: 90%;
`
export const Img = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  width: 70%;
`

export const Propulcion = styled.div`
  margin-top: -1em;
  display: flex;
  justify-content: center;
  filter: brightness(0) invert(1);
  opacity: 0.5;
  & img{
    ${floating()}
    width: 35% !important;
  }
  @media(${mobile}){
    padding-right: 3em;
    margin-top: -2em;
  }

`
export const Muestra = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-gap: 5em;
  @media(${tablet}){
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: center;
  grid-column: 2 span;
  background: NONE;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1em;
  box-sizing: border-box;
  @media(${mobile}){
    bottom: 5em
  }
`
export const Copy = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  margin: 0;
`

export const Pregress = styled.div`
  width: 100%;
  height: 1em;
  margin-top: 1em;
  border-radius: 2em;
  background: white;
  position: relative;
  overflow: hidden;
  &:before{
    background: #00c8f3;
    width: ${({value}) => value}%;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after{
    content: '${({value}) => Math.round(value)}%';
    position: absolute;
    font-size: 1em;
    top: -1px;
    left: calc(50% - 1em);
    width: 1em;
  }
`
