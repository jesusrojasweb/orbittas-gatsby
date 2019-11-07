import styled, { css } from "styled-components"
import { tituloSecundario, colorFluerecente, mobile } from "../variables"
import { Link } from "gatsby"

export const Details = styled.section`
  width: 100%;
`
export const Cabecera = styled.div`
  background: url(${({ thumnail }) =>
      thumnail
        ? thumnail
        : "https://cdn.pixabay.com/photo/2019/09/30/18/11/parliament-4516476__340.jpg"})
    no-repeat center center;
  background-size: cover;
  height: 400px;
  overflow: hidden;
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 6em;
  justify-content: flex-end;
  box-sizing: border-box;
  & h1 {
    color: white;
    text-transform: uppercase;
    font-family: ${tituloSecundario};
    font-size: 1.8rem;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    padding: 1em 0;
    align-items: center;
    & figure {
      overflow: hidden;
      border-radius: 50%;
      width: 6%;
      & img {
        width: 100%;
        vertical-align: top;
      }
    }
    & div {
      display: flex;
      flex-direction: column;
      margin-left: 1em;
      & h4 {
        margin: 0 0 1em;
      }
      & h4,
      & small {
        color: #ffffffd1;
      }
    }
    & span {
      align-self: flex-start;
      color: #ffffffd1;
      margin: 5px 1em;
    }
  }
  @media (${mobile}) {
    padding: 2em 3em;
    & > div {
      & figure {
        width: 14%;
      }
      & span {
        margin: 0 10px;
      }
    }
  }
`

export const Body = styled.div`
  padding: 3em 6em;
  & a {
    text-decoration: none;
    color: ${colorFluerecente};
  }

  & .left {
    display: inline;
    float: left;
    width: 50%;
    margin-right: 2em;
  }
  & .right {
    display: inline;
    float: right;
    width: 50%;
    margin-left: 2em;
  }
  @media (${mobile}) {
    padding: 3em;
  }
`

export const Pie = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 6em;
  @media (${mobile}) {
    padding: 2em 3em;
  }
`

const pasar = right => css`
  display: flex;
  flex-direction: column;
  align-items: ${right ? "flex-end" : "flex-start"};
  text-decoration: none;
  color: #919191;
  & span {
    color: #919191;
    text-transform: uppercase;
    margin-top: 0.5em;
  }
  & strong {
    color: #787878;
    text-transform: uppercase;
    width: 50%;
    text-align: right;
    margin-top: 0.5em;
    text-align: ${right ? "right" : "left"};
  }
`
export const Prev = styled(Link)`
  ${pasar(false)}
`
export const Next = styled(Link)`
  ${pasar(true)}
`
