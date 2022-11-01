import styles from './CodeofConduct.module.css'
import down from '../../assets/svg/download.svg'
function CodeOfConduct()
{
    return(
        <>
        <div className={styles.codeofconduct}>
        <div className={styles.heading}> CODE OF CONDUCT</div>
            <div className={styles.code}>
               <div>Download Code of Conduct for MEC.conf</div>
               <div className='img'>
               <img src={down}/> 
               </div>
                

            </div>
        
        
        
        
        
        
        </div>
        </>
    );
}
export default CodeOfConduct