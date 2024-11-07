 import React from "react";
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import Capture1 from "../../images/logo.png";
import Capture from "../../pages/layout/imagenes/Capture.PNG";
import styles from "./navbar.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

 export default function NavBar(){
    return(
        <div>
             <Navbar variant="dark" collapseOnSelect expand="lg"  className={styles.main__container}>
      <Container>
        <Navbar.Brand href="/" >
                <div>
                    <img className={styles.image} src={Capture1}></img>
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.btn__displacement} href="/">Home</Nav.Link>
            <Nav.Link className={styles.btn__displacement} href="/faqs">Faqs</Nav.Link>
            <Nav.Link className={styles.btn__displacement} href="/gallery">Coments</Nav.Link>
            <Nav.Link className={styles.btn__displacement} href="/contact">Contact Us</Nav.Link>
            {/* <Nav.Link className={styles.btn__displacement} href="/bookOnline">Book Online</Nav.Link> */}
    
          </Nav>
          <Nav className={styles.btn__social__media__container}>
            <Nav.Link className={styles.btn__social__media} href="https://www.facebook.com/profile.php?id=100082191186102"><FaFacebookF /></Nav.Link>
            <Nav.Link className={styles.btn__social__media} href="https://www.instagram.com/hellentrinchet/"><FaInstagram /></Nav.Link>
            <Nav.Link className={styles.btn__social__media} href="/"><FaTwitter /></Nav.Link>
            <Nav.Link className={styles.btn__social__media} href="/emails"><CgMail /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
 }