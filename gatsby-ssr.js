const React = require("react")
const { GlobalStyle } = require("./src/styles/GlobalStyles")
const { Fuentes } = require("./src/styles/fuentes")
const Layout = require("./src/components/layout").default
const { Provider } = require("./src/context")
const emailjs = require("emailjs-com")
const ReactGA = require("react-ga")

ReactGA.initialize("UA-145708307-1")

emailjs.init("user_vgaiuG2MxGaza3rUjDn7B")

exports.wrapRootElement = ({ element }) => (
  <Provider>
    <Layout>
      <link
        href="https://fonts.googleapis.com/css?family=Comfortaa:600&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Fuentes />
      {element}
    </Layout>
  </Provider>
)
