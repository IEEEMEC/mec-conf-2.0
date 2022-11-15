import styles from "./Contact.module.css";
import ContactCard from "./ContactCard";
import contactData from "../../data/contactData";
function Contact() {
  return (
    <>
      <div className={styles.contact_container}>
        <div className={styles.contact}>CONTACT</div>
        <div className={styles.contact_cards}> 
          {contactData.map((contact) => {
            return <ContactCard key={contact.id} id={contact.id} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Contact;
