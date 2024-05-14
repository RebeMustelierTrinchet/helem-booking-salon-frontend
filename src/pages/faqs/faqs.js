import React from "react";
import styles from "./faqs.module.css";

import Accordion from "react-bootstrap/Accordion";
import FaqHeader from "../../components/faqHeader/FaqHeader";

const ITEMS = [
  {
    title: "Espanol",
    body: "Tenemos Estilistas que hablan español a diferentes precios. Envíe un correo electrónico o llame para reservar una cita o consulta.",
  },
  {
    title: "Hours",
    body: "We are open:\nMonday-Saturday: 10:00 AM - 8:00 PM",
  },
  {
    title: "New Guest Deposit",
    body: " We require new Guests to secure their first appointment with a $50 non-refundable deposit when scheduling any color or keratin service. With a minimum of 48 hours notice to move or change your new guest appointment your deposit will be retained for future scheduled appointments. We understand that unplanned circumstances occur, and you may need to cancel or reschedule your appointment. If we receive less than 48 hours notice to cancel, move, or change your new guest appointment it will result in the loss of your deposit. A new deposit is required to schedule future appointments.",
  },
  {
    title: "New Guest Confirmation",
    body: "On your first visit please confirm via our text system, email, or verbally with a phone call to avoid your appointment being cancelled. Please confirm before 24 hours of your appointment start time.",
  },
  {
    title: "Cancellations",
    body: "Helem Salon is primarily “by appointment”, therefore last minute cancellations directly impact our Stylists. We ask established Guests to provide us with 24 hours notice to change or move an appointment so we can accommodate other Guests.",
  },
  {
    title: "Missed Appoinments",
    body: "We understand “life” happens, and as a courtesy we provide each Guest with one accidentally missed appointment at no charge. Subsequently established Guest missed appointments are charged at $50.",
  },

  {
    title: "Late Policy",
    body: "We pride ourselves on keeping appointments on time. Please let us know if you think you will be more than 15 minutes late for your appointment so that we can make arrangements. We will do our best to accomodate your services but we may have to reschedule your appointment as  a missed appointment.",
  },
  {
    title: "Refundd Policy",
    body: " We pride ourselves in our customer service and the exceptional quality of our work. We do our very best to ensure all guests are satisfied with all services provided. Due to unforeseen variables, we understand that sometimes things do not go as expected, and/or desired results can be miscommunicated. No matter what, our Guests satisfaction is our number one priority. We ask that any guest that needs an adjustment to their hair to reach out to the salon within 48 hours of original service. Please, be aware that shampooing hair within 48 hours can effect what adjustments can be made. Depending on the nature and cause of the adjustment needed the Salon will determine the proper course  of action. While adjustments can be made, NO REFUNDS will be issued. By agreeing to the service, the guest agrees to pay the full amount of the service total upon completion of the services the same day.",
  },
  {
    title: "Children Policy",
    body: "We ask parents to make outside arrangements for children during appointments. With hot tools and chemicals we are not a safe environment for unsupervised children and infants. For safety reasons we usually can schedule children 10 years of age or older to receive services.",
  },
  {
    title: "About Us",
    body: "",
  },
];

export default function Faqs() {
  return (
    <div className={styles.main__container}>
      <div className={styles.faq__header__conteiner}>
        <FaqHeader/>
      </div>
      <Accordion defaultActiveKey="1" className={styles.Accordion__container}>
        {ITEMS.map((item, itemIndex) => {
          return (
            <Accordion.Item className={styles.accordion__Item} eventKey={(itemIndex+1).toString()}>
              <Accordion.Header className={styles.accordion__Item__Header}>{item.title ?? ""}</Accordion.Header>
              <Accordion.Body>
                {item.body ?? ""}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
