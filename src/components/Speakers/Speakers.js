import Image from "next/image";
import speakerData from "../../data/speakerData";
import styles from "./Speakers.module.css";
function Speakers() {
  return (
    <>
    <section id="speakers">
      <div className={styles.speakers_container} data-aos="fade-down">
        <div className={styles.speakers}>
          EVENT <span className={styles.speakers_1}>SPEAKERS</span>
        </div>
        <div className={styles.speakers_content}>
          <div className={styles.speakers_left}></div>
          <div className={styles.speakers_list}>
            {speakerData.map((speaker) => {
              return (
                <div key={speaker.id} className={styles.speaker}>
                  <div className={styles.speaker_image}>
                    <Image src={speaker.image} alt={speaker.name} className={styles.speaker_image} />
                  </div>
                  <div className={styles.speaker_name}>{speaker.name}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.speakers_right}></div>
        </div>
      </div>
      </section>
    </>
  );
}
export default Speakers;
