import styled from "styled-components"
import { tituloSecundario, colorPrincipal } from "../variables"
import { Link } from "gatsby"

export const View = styled.span`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 2em 4em 3em;
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

export const Details = styled.span`
  background: white;
  height: 40%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  transition: 0.3s;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4em 1em;
  align-items: center;
  & figure {
    overflow: hidden;
    border-radius: 50%;
    width: 80px;
    & img {
      width: 100%;
      vertical-align: top;
    }
  }
  & > span {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    & h4 {
      margin: 0 0 1em;
    }
    & h4,
    & small {
      color: white;
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
  width: calc(100% - 12em);
  margin: 9em 6em 3em;
  & a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    cursor: pointer;
    & ${View} {
      transform: translateY(-40%);
      padding-bottom: 0;
    }
    & ${Details} {
      transform: translateY(-100%);
    }
  }
`
