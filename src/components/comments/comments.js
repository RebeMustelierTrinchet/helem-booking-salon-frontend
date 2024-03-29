import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./comments.module.css"
import { FaStar } from "react-icons/fa";
import { getComments } from "../../api/comments-api"


function Comments() {

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
              <Card key={index} className={styles.card}>
                <Card.Header className={styles.card_Header}>
                  <div className={styles.card__Header__Div}>
                    <div className={styles.card__image}>{perfil.foto ?? ""}</div>
                    <div>{perfil.author ?? ""}</div>
                    <div className={styles.card__starts}>{
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
        : <div>There is nothing</div>
      }
    </div>
  )
}

export default Comments;