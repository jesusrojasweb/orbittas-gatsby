const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const proyectoTemplate = path.resolve(`src/templates/Proyecto.js`)
  const resultProyectos = await graphql(`
    query GET_PROYECTO {
      allApiProyectos {
        edges {
          node {
            data {
              _id
              link
              servicio
              nombre
              src
              descripcionShort
              descripcionShortEn
              nombreEn
              servicioType
              servicioTypeEn
              brief
              briefEn
              descripcionLong
              descripcionLongEn
              primeraImagen
              segundaImagen
              slogan
              sloganEn
              estado
              caracteristicas {
                value
                label
              }
            }
          }
        }
      }
    }
  `)

  if (resultProyectos.errors) {
    throw resultProyectos.errors
  }
  resultProyectos.data.allApiProyectos.edges[0].node.data.forEach(datos => {
    console.log("proyecto")
    createPage({
      path: `/portfolio/${datos.link}`,
      component: proyectoTemplate,
      context: datos,
    })
  })

  const postTemplate = path.resolve(`src/templates/Post.js`)
  const resultPost = await graphql(`
    query GET_POSTS {
      allApiArticles {
        edges {
          node {
            data {
              _id
              title
              user
              username
              cargo
              content
              thumnail
              date
              userProfile
              userHover
              click
            }
          }
        }
      }
    }
  `)

  if (resultPost.errors) {
    throw resultPost.errors
  }

  const postApi = resultPost.data.allApiArticles.edges[0].node.data
  postApi.forEach((datos, index) => {
    let link = datos.title.toLocaleLowerCase().split(' ').join('-')
    const previous = index === postApi.length - 1 ? null : postApi[index + 1]
    const next = index === 0 ? null : postApi[index - 1]
    createPage({
      path: `/blog/${link}`,
      component: postTemplate,
      context: {
        datos,
        previous,
        next,
      },
    })
  })
}
