import { createGlobalStyle } from "styled-components"
import { fuenteSecundaria, colorOscuro } from "./variables"
import { nprogressSpinner } from "./animations"

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${fuenteSecundaria} !important;
    margin: 0;
    padding: 0;
    position: relative;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 10px;
      background: white;
    }
    &::-webkit-scrollbar-thumb{
      background: #004958;
      border-radius: 5px;
    }
    & #___gatsby{
      overflow-x: hidden;
    }
  }
  img{
    width: 100%;
  }
  ul,figure{
    margin: 0;
    padding: 0;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${colorOscuro};

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${colorOscuro}, 0 0 5px ${colorOscuro};
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${colorOscuro};
    border-left-color: ${colorOscuro};
    border-radius: 50%;
    ${nprogressSpinner()}
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`
