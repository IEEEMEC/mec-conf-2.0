import styles from "./Contact.module.css";
function ContactCard(props) {
  if (props.id % 2 == 0) {
    return (
      <div className={styles.contact_card_1} data-aos="fade-left">
        <div className={styles.image_1}></div>
      </div>
    );
  }
  return (
    <div className={styles.contact_card} data-aos="fade-right">
      <div className={styles.image}></div>
    </div>
  );
}
export default ContactCard;
