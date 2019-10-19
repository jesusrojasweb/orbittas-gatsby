import React from "react"

import {
  Hover,
  DetalleClose,
  Detalle,
  Contenedor,
  Nombre,
  Skills,
  Item,
  Imagen,
  Subtitle,
  Gustar,
  Boton,
  Btn,
} from "../styles/components/ProyectoDetails"
import { FaTimes } from "react-icons/fa"

export const ProyectoDetails = ({
  _id,
  mostrar,
  handleMostrar,
  caracteristicas = [],
  servicio,
  brief,
  descripcionLong,
  primeraImagen,
  segundaImagen,
  nombre,
  servicioType,
  idioma,
  briefEn,
  servicioTypeEn,
  nombreEn,
  descripcionLongEn,
}) => {
  return (
    <>
      <Hover active={mostrar}>
        <Contenedor>
          <DetalleClose onClick={() => handleMostrar(false)}>
            <FaTimes />
          </DetalleClose>
        </Contenedor>
      </Hover>
      <Detalle active={mostrar} id={_id}>
        <Contenedor>
          {idioma ? (
            <>
              <Nombre>{nombreEn}</Nombre>
              <Skills>
                <div>
                  <Item>Experience</Item>
                  <p>{caracteristicas.map(({ value }) => (value += "/"))}</p>
                </div>
                <div>
                  <Item>Services</Item>
                  <p>{servicioTypeEn}</p>
                </div>
              </Skills>
              <Imagen>
                <img src={primeraImagen} alt="mockup p4b" />
              </Imagen>
              <Subtitle>Brif</Subtitle>
              <p>{briefEn}</p>
              <Subtitle>Description</Subtitle>
              <p>{descripcionLongEn}</p>
              <Imagen>
                <img src={segundaImagen} alt="overview de p4b" />
              </Imagen>
              <Gustar>¿Do you like this proyect?</Gustar>
              <Boton>
                <Btn to="/contact">Contact Us</Btn>
              </Boton>
            </>
          ) : (
            <>
              <Nombre>{nombre}</Nombre>
              <Skills>
                <div>
                  <Item>Experiencia</Item>
                  <p>{caracteristicas.map(({ value }) => (value += "/"))}</p>
                </div>
                <div>
                  <Item>Servicios</Item>
                  <p>{servicioType}</p>
                </div>
              </Skills>
              <Imagen>
                <img src={primeraImagen} alt="mockup p4b" />
              </Imagen>
              <Subtitle>El Brif</Subtitle>
              <p>{brief}</p>
              <Subtitle>Descripción</Subtitle>
              <p>{descripcionLong}</p>
              <Imagen>
                <img src={segundaImagen} alt="overview de p4b" />
              </Imagen>
              <Gustar>¿Te gusta este proyecto?</Gustar>
              <Boton>
                <Btn to="/contact">Contáctanos</Btn>
              </Boton>
            </>
          )}
        </Contenedor>
      </Detalle>
    </>
  )
}
