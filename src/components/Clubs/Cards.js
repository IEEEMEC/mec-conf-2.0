import react from "react";
import styles from './Cards.module.css';
export default function Cards(props){
    return(
        <div className={styles.box}>
            <img src={require(props.icons)} className={styles.icons}></img>
            <p className={styles.content}>{props.content}</p>
        </div>
    );
}