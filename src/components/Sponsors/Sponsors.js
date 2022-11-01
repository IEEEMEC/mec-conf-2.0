import styles from './Sponsors.module.css'
import Image from 'next/image'
import sponsorImg from '../../assets/sponsors/tinker.jpg'
function Sponsors()
{
    return(
        <>
        <div className={styles.sponsors}>
            <h1>Sponsors</h1>
            <div className={styles.cards}>
            
                <div class={styles.img}>
                    <Image src={sponsorImg}/>
                </div>
                <div class={styles.caption}>
                    <h3>Company 1</h3>
                    
                    
                </div>


          

            </div>      
            <div className={styles.cards}>
            
            <div class={styles.img}>
                <img src={sponsorImg}></img>
            </div>
            <div class={styles.caption}>
                <h3>Company 1</h3>
                
                
            </div>


      

        </div>  
        <div className={styles.cards}>
            
            <div class={styles.img}>
                <img src={sponsorImg}></img>
            </div>
            <div class={styles.caption}>
                <h3>Company 1</h3>
                
                
            </div>


      

        </div>  
        <div className={styles.cards}>
            
            <div class={styles.img}>
                <img src={sponsorImg}/>
            </div>
            <div class={styles.caption}>
                <h3>Company 1</h3>
                
                
            </div>


      

        </div>   
        
        </div>
        </>
    );
}
export default Sponsors