import styles from './AreYouReady.module.css'


import bubbles from '../../assets/svg/ready/Bubbles.svg'
function AreYouReady()
{
    return(
        <>
        <div className={styles.areyouready} style={{backgroundImage:`url(${bubbles.src})`}}>
           
            <div className={styles.ready}>
            <div className={styles.heading}>
            Are You Ready
            </div>
            <div className={styles.content}>
                Get Early Access to MEC.conf
            </div>

            <div className={styles.button}>
            Buy Tickets
            </div>
           

        </div>
      </div>
    </>
  );
}
export default AreYouReady;
