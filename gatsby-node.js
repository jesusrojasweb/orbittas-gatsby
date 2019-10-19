const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const proyectoTemplate = path.resolve(`src/templates/Proyecto.js`)
  const result = await graphql(`
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

  if (result.errors) {
    throw result.errors
  }
  result.data.allApiProyectos.edges[0].node.data.forEach((datos) => {
    console.log("proyecto")
    createPage({
      path: `/portfolio/${datos.link}`,
      component: proyectoTemplate,
      context: datos,
    })
  })
}
