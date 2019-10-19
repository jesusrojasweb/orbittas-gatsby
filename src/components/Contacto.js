import React, { useState } from "react"
import {
  Upload,
  ContactoContainer,
  Grid,
  Item,
  Formulario,
  TextArea,
  InputName,
  InputEmail,
  FileUpload,
  Linea,
  Span,
  InputFile,
  Btn,
  LoaderCircle,
  LoaderCircleItem,
  Aviso,
  Muestra,
  Img,
  Pregress,
  Imagen,
  ImageRotate,
} from "../styles/components/Contacto"
import { FaCheck, FaExclamationTriangle } from "react-icons/fa"
import { ParticulasBajo } from "./ParticulasBajo"
import { useTranslate } from "react-translate"
import { Tooltip } from "./Tooltip"
import Images from "./Images"
import emailjs from "emailjs-com"
// import { storage } from "../firebase"

const Contacto = props => {
  const [name, setName] = useState("")
  const [proyect, setProyect] = useState("")
  const [email, setEmail] = useState("")
  const [archivo, setArchivo] = useState("No se subio archivo")
  const [idea, setIdea] = useState("")
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)
  const [uploadValue, setUploadValue] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  let t = useTranslate("contactoPage")
  let c = useTranslate("copyRight")
  let file
  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(null)
    if (name == "" || proyect == "" || email == "" || idea == "") {
      setError("Debe llenar todos los campos")
      setSuccess(false)
    } else {
      setLoading(true)
      sendFeedback()
    }
  }
  // function fileUpload(e) {
  //   if (typeof window !== `undefined`) {
  //     e.preventDefault()
  //     setUploading(true)
  //     const url =
  //       "https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2F"
  //     const fileUpload = e.target.files[0]
  //     const storageRef = storage.ref(`/files/${fileUpload.name}`)
  //     const task = storageRef.put(fileUpload)

  //     task.on(
  //       "state_changed",
  //       snapshot => {
  //         let percentage =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         if (percentage < 90) {
  //           setUploadValue(percentage)
  //         }
  //       },
  //       error => {
  //         console.log(error.message)
  //       },
  //       () => {
  //         window
  //           .fetch(url + task.metadata_.name)
  //           .then(res => res.json())
  //           .then(response => {
  //             let name = task.metadata_.name.split(" ").join("%20")
  //             file = `${url}${name}?alt=media&token=${response.downloadTokens}`
  //             let fileURL = file.toString()
  //             setUploadValue(100)
  //             setArchivo(file)
  //           })
  //       }
  //     )
  //   }
  // }
  function handleChange() {
    setSuccess(null)
  }

  function sendFeedback() {
    console.log(archivo)
    emailjs
      .send("smtp_server", "template_IstH5ylh", {
        name,
        proyect,
        email,
        idea,
        archivo,
      })
      .then(res => {
        setSuccess(true)
        setLoading(false)
        setName("")
        setProyect("")
        setEmail("")
        setArchivo("")
        setIdea("")
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        setSuccess(false)
        setLoading(false)
        setError("Hubo un error intento de nuevo ", err.status)
        console.error("Hubo un error al envia el correo. Error: ", err)
      })
  }
  return (
    <ContactoContainer>
      <Grid>
        <Item>
          <Muestra>
            <Imagen>
              <Img>
                <Images name="contacto-imagen.png" />
              </Img>
              <ImageRotate>
                <Images name="somos.png" />
              </ImageRotate>
            </Imagen>
            <Formulario onSubmit={handleSubmit}>
              <InputName
                onChange={e => {
                  setName(e.target.value)
                  handleChange()
                }}
                value={name}
                name="name"
                type="text"
                placeholder={t("name")}
                required=""
              />
              <InputName
                onChange={e => {
                  setProyect(e.target.value)
                  handleChange()
                }}
                value={proyect}
                name="proyect"
                type="text"
                placeholder={t("proyect")}
                required=""
              />
              <InputEmail
                onChange={e => {
                  setEmail(e.target.value)
                  handleChange()
                }}
                value={email}
                name="email"
                type="email"
                placeholder={t("email")}
                required=""
              />
              <TextArea
                onChange={e => {
                  setIdea(e.target.value)
                  handleChange()
                }}
                value={idea}
                name="idea"
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder={t("idea")}
                required=""
              />
              <Linea>
                {loading && (
                  <Aviso>
                    <LoaderCircle>
                      <LoaderCircleItem />
                    </LoaderCircle>
                    <span>Cargando ...</span>
                  </Aviso>
                )}
                {success && (
                  <Aviso success={success}>
                    <FaCheck />
                    <span>Te contactaremos pronto</span>
                  </Aviso>
                )}
                {success === false && (
                  <Aviso success={success}>
                    <FaExclamationTriangle />
                    <span>{error}</span>
                  </Aviso>
                )}
                {success === null && !loading && <Aviso vacio={true} />}
                {/* <FileUpload>
                  <InputFile
                    onChange={e => fileUpload(e)}
                    name="file"
                    type="file"
                  />
                  <Span>
                    <Tooltip
                      fondo={true}
                      onClick={e => e.preventDefault()}
                      tiptext="Tienes algún documento de tu proyecto, adjuntalo acá!"
                    >
                      <Upload />
                    </Tooltip>
                  </Span>
                </FileUpload> */}
                <div>
                  <Btn type="submit">{t("button")}</Btn>
                </div>
              </Linea>
              {uploading && <Pregress value={uploadValue} />}
            </Formulario>
          </Muestra>
        </Item>
        <ParticulasBajo />
      </Grid>
    </ContactoContainer>
  )
}

export default Contacto
