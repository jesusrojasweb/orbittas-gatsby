import {css} from 'styled-components'

export const colorPrincipal = '#007993';
export const colorSecundario = '#009270';
export const colorFluerecente = '#00caf5';
export const colorOscuro = '#035b6e';
export const fuentePrincipal = "'Dolce Vita', system-ui";
export const fuenteSecundaria ="'Arlon', system-ui";
export const tituloSecundario ="'Comfortaa', system-ui";

export const btn = ()=> css`
  color: white;
  border: 2px solid white;
  padding: 1em 2em;
  text-transform: uppercase;
  font-family: ${fuentePrincipal};
  text-decoration: none;
  border-radius: 2em;
  font-size: 1rem;
  transition: .3s;
  &:hover{
    box-shadow: 0 0 50px #00b5ff;
  }
`
export const gradient = ()=> css`
  background: rgb(0,121,147);
  background: -moz-linear-gradient(90deg, rgba(0,121,147,1) 0%, rgba(0,146,112,1) 100%) !important;
  background: -webkit-linear-gradient(90deg, rgba(0,121,147,1) 0%, rgba(0,146,112,1) 100%) !important;
  background: linear-gradient(90deg, rgba(0,121,147,1) 0%, rgba(0,146,112,1) 100%) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#007993",endColorstr="#009270",GradientType=1) !important;
`
export const gradiente = ()=> css`
  background: rgba(0,121,147,1);
  background: -moz-linear-gradient(top, rgba(0,121,147,1) 0%, rgba(0,202,245,1) 50%, rgba(0,121,147,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,121,147,1)), color-stop(50%, rgba(0,202,245,1)), color-stop(100%, rgba(0,121,147,1)));
  background: -webkit-linear-gradient(top, rgba(0,121,147,1) 0%, rgba(0,202,245,1) 50%, rgba(0,121,147,1) 100%);
  background: -o-linear-gradient(top, rgba(0,121,147,1) 0%, rgba(0,202,245,1) 50%, rgba(0,121,147,1) 100%);
  background: -ms-linear-gradient(top, rgba(0,121,147,1) 0%, rgba(0,202,245,1) 50%, rgba(0,121,147,1) 100%);
  background: linear-gradient(to bottom, rgba(0,121,147,1) 0%, rgba(0,202,245,1) 50%, rgba(0,121,147,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007993', endColorstr='#007993', GradientType=0 );
`
export const gradientInter = ()=> css`
  color: rgb(0,121,147);
  color: -moz-linear-gradient(90deg, rgba(0,121,147,1) 0%, rgba(0,146,112,1) 100%);
  color: -webkit-linear-gradient(90deg, rgba(0,121,147,1) 0%, rgba(0,146,112,1) 100%);
  color: linear-gradient(90deg, rgba(0,121,147,1) 0%, rgba(0,146,112,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#007993",endColorstr="#009270",GradientType=1);
`
export const mobile = 'max-width: 500px';
export const min = 'max-width: 360px';
export const tablet = 'max-width: 800px';
export const desktop = 'min-width: 800px';
