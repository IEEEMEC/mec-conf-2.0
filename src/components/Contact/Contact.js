import styles from "./Contact.module.css";
import ContactCard from "./ContactCard";
import contactData from "../../data/contactData";
function Contact() {
  return (
    <>
      <section id="contact">
        <div className={styles.contact_container}>
          <div className={styles.contact} data-aos="fade-down">CONTACT</div>
          <div className={styles.contact_cards}>
            {contactData.map((contact) => {
              return <ContactCard key={contact.id} id={contact.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
