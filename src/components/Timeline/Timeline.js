import styles from './Timeline.module.css'
import React,{useEffect, useState} from 'react';
function Timeline()
{
    const [width, setWidth] = useState(0);
    useEffect(()=>{
      addEventListener("resize", ()=>(setWidth(window.innerWidth)));
    })
    useEffect(()=>{
      setWidth(window.innerWidth);
    })
    return(
        <>
            <div className={styles.timeline_heading}> Timeline</div>
            <div className={styles.timeline}>
                <ul>
                    <li class="in-view">
                        <div data-aos="fade-left">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        </div>
                    </li>
                    <li class="in-view">
                        <div data-aos={width>600? "fade-right": "fade-left"}>
                            Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
                        </div>
                    </li>
                    <li>
                        <div data-aos="fade-left">
                            Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
                        </div>
                    </li>
                    <li>
                        <div data-aos={width>600? "fade-right": "fade-left"}>
                            In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div data-aos="fade-left">
                            In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div data-aos={width>600? "fade-right": "fade-left"}>
                            In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div data-aos="fade-left">
                            In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                </ul>

            </div>
        </>
        
        
    );
}
export default Timeline