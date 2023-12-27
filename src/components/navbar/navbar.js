 import React from "react";
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import Capture1 from "../../pages/layout/imagenes/Capture1.PNG";
import Capture from "../../pages/layout/imagenes/Capture.PNG";
import styles from "./navbar.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

 export default function NavBar(){
    return(
        <div>
             <Navbar variant="dark" collapseOnSelect expand="lg"  className={styles.contenedorPrincipal}>
      <Container>
        <Navbar.Brand href="/" >
                <div>
                    <img className={styles.imagen} src={Capture1}></img>
                    <img className={styles.imagen1} src={Capture}></img>
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.botonNav} href="/">Home</Nav.Link>
            <Nav.Link className={styles.botonNav} href="/faqs">Faqs</Nav.Link>
            <Nav.Link className={styles.botonNav} href="/gallery">Gallery</Nav.Link>
            <Nav.Link className={styles.botonNav} href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link className={styles.botonNav} href="/bookOnline">Book Online</Nav.Link>
    
          </Nav>
          <Nav className={styles.contBoton}>
            <Nav.Link className={styles.boton} href="https://www.facebook.com/profile.php?id=100082191186102"><FaFacebookF /></Nav.Link>
            <Nav.Link className={styles.boton} href="https://www.instagram.com/hellentrinchet/"><FaInstagram /></Nav.Link>
            <Nav.Link className={styles.boton} href="/"><FaTwitter /></Nav.Link>
            <Nav.Link className={styles.boton} href="/emails"><CgMail /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
 }