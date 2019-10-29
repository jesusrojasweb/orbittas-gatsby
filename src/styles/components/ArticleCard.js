import styled from "styled-components"
import { tituloSecundario, colorPrincipal } from "../variables"

export const View = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 2em 1.5em;
  box-sizing: border-box;
  transition: 0.3s;
  & h2 {
    color: white;
    margin-top: 0;
    font-family: ${tituloSecundario};
    text-transform: uppercase;
    line-height: 1.8rem;
    margin-bottom: 0;
  }
`

export const Details = styled.div`
  background: white;
  height: 100%;
  box-sizing: border-box;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p {
    padding: 2em;
  }
  & > div {
    background: #d8d8d8;
    display: flex;
    flex-wrap: wrap;
    padding: 1em 2em;
    align-items: center;
    & figure {
      overflow: hidden;
      border-radius: 50%;
      width: 30%;
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
        color: ${colorPrincipal};
      }
    }
  }
`

export const Card = styled.article`
  background: url(${({ thumnail }) =>
      thumnail
        ? thumnail
        : '"https://cdn.pixabay.com/photo/2019/09/30/18/11/parliament-4516476__340.jpg"'})
    no-repeat center center;
  background-size: cover;
  height: 400px;
  overflow: hidden;
  box-shadow: 0px 1px 20px 0px #eeeeee;
  border-radius: 5px;

  & a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    cursor: pointer;
    & ${View} {
      transform: translateY(-100%);
    }
    & ${Details} {
      transform: translateY(-100%);
    }
  }
`
