module.exports = {
  siteMetadata: {
    title: `ORBITTAS - Agencia Digital`,
    description: `Somos un equipo apasionado por la tecnología e innovación, conformado por profesionales en diversas áreas.`,
    author: `@jesusrojasweb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ORBITTAS - Agencia Digital`,
        short_name: `orbittas`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#007993`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        name: "Usuarios",
        typePrefix: "api",
        data: {
          ns: "users",
          method: "usuarios",
        },
        url: "https://orbittasteam-ssr.jesusrojasweb.now.sh/users",
        method: "GET",
        auth: false,
        headers: {
          "Content-Type": "application/json",
        },
        verboseOutput: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        name: "Proyectos",
        typePrefix: "api",
        data: {
          ns: "proyects",
          method: "proyectos",
        },
        url: "https://orbittasteam-ssr.jesusrojasweb.now.sh/proyectos",
        method: "GET",
        auth: false,
        headers: {
          "Content-Type": "application/json",
        },
        verboseOutput: process.env.NODE_ENV !== "production",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
