import styles from './Clubs.module.css';
import react from 'react';
import Cards from './Cards';
import {data} from './CardData';
export default function Clubs()
{
    return(
        <div className={styles.clubs}>
            <div className={styles.styling}></div>
            <p className={styles.Par}>Clubs</p>
            <div className={styles.clubCards}>
                {
                    data.map((x,id)=>(
                        <Cards
                            icons={x.url}
                            content={x.content}
                            key={id}
                        />
                    ))
                }
            </div>
        </div>
    );
}
