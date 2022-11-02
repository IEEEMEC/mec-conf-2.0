import styles from "./Devsprints.module.css";
function Devsprints() {
  return (
    <>
      <div className={styles.devsprints_container}>
        <div>DEVSPRINTS</div>
        <div className={styles.content}>
          Get ready to contribute to open source organisations with this one day
          devsprint!
        </div>
      </div>
    </>
  );
}
export default Devsprints;
