import React from "react";
import { Card } from "react-bootstrap";
import styles from "./comentarios.module.css"
import { FaStar } from "react-icons/fa";

const Perfiles = [
  {
    foto: " ",
    nombre: "Maria Castillo",
    estrellas: 5,
    comentario: "The hairdressing service was excellent. I loved their treatment, they have great skills, and an excellent team. I am very happy with the outcome.",
  },
  {
    foto: " ",
    nombre: "Joyce Reyes",
    estrellas: 5,
    comentario: "Their hairdressing service was outstanding. I really loved how they treated me, their skills were top-notch and they had an excellent team. I'm extremely satisfied with the results.",
  },
  {
    foto: " ",
    nombre: "Camila Perez",
    estrellas: 5,
    comentario: "The hairdressing service was superb. I absolutely loved how they treated me, they had great skills and an excellent team. I'm really happy with the outcome.",
  },
  {
    foto: " ",
    nombre: "Rosa Mustelier",
    estrellas: 5,
    comentario: "The hair salon service was excellent. I loved how they treated me and their skillful hands. The team working there is outstanding. I am very happy with the outcome.!",
  },
  {
    foto: " ",
    nombre: "Rebeca Matos",
    estrellas: 5,
    comentario: "The hair salon service was excellent. I loved how they treated me and their skillful hands. The team working there is outstanding. I am very happy with the outcome.",
  },
  {
    foto: " ",
    nombre: "Niurca Castro",
    estrellas: 5,
    comentario: "The hairdressing service was outstanding. I loved their treatment, the stylist had great skills, and the team worked excellently together. I was very pleased with the outcome.",
  },
];

function Comentarios() {
  return (
    <div>
      {Perfiles.map((perfil, index) => {
        return (
          <Card key={index} className={styles.divPrincipal}>
            <Card.Header className={styles.cardHeader}>
                <div className={styles.cardHeaderDiv}>
                    <div className={styles.photoDiv}>{perfil.foto??""}</div>
                    <div>{perfil.nombre ?? ""}</div>
                    <div className={styles.starsDiv}>{
                         Array(perfil.estrellas??5)
                         .fill()
                         .map((_, i) => {
                           return (
                             <div>
                               <FaStar
                                 color={"#ffc107"}
                                 size={25}
                               />
                             </div>
                           );
                         })
                         }</div>
                </div>
            </Card.Header>

            <Card.Body><div className={styles.commentsDiv}>{perfil.comentario ?? ""}</div></Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Comentarios;
