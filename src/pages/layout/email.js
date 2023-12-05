
import React from 'react';
import emailjs from 'emailjs-com';
import styles from './email.module.css'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Hellen$99', 'template_w98nhrs', e.target,  'ckXDAVO_4j4kgd2l4')
      .then((result) => {
        window.location.reload()
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className={styles.contactContainer}>
        <form className={styles.contactForm} onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="html_message" className={styles.mensaje} />
        <input type="submit" value="Send" className={styles.botonEnviar} />
        </form>
    </div>
  );
}