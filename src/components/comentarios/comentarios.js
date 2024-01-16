import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./comentarios.module.css"
import { FaStar } from "react-icons/fa";
import { getComments } from "../../api/comments-api"




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

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getAllComments() {
      await getComments(setComments);
    }

    getAllComments();
  }, [])

  return (
    <div>
      {comments && comments.length ?
        <div>
          {comments.map((perfil, index) => {
            return (
              <Card key={index} className={styles.divPrincipal}>
                <Card.Header className={styles.cardHeader}>
                  <div className={styles.cardHeaderDiv}>
                    <div className={styles.photoDiv}>{perfil.foto ?? ""}</div>
                    <div>{perfil.author ?? ""}</div>
                    <div className={styles.starsDiv}>{
                      Array(5)
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

                <Card.Body>

                  <Card.Title style={{textAlign: "start"}}>{perfil.title ?? ""}</Card.Title>
                  <div className={styles.commentsDiv}>{perfil.message ?? ""}</div></Card.Body>
              </Card>
            );
          })}

        </div>
        : <div>No Hay Nada</div>
      }
    </div>
  )
}

export default Comentarios;