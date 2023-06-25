import styles from "./rating-card.module.css"
import {useState} from 'react'

export default function RatingCArd() {
const[rating, setRating] = useState<number>()
const[IsSubmited, setIsSubmited] = useState<boolean>(false)
/**
 * states das funções setar
 * @param rating 
 */

function handlerSteRating (rating: number){
    setRating (rating)
}

function handleSubmit (e: React.FormEvent){
    e.preventDefault()
    setIsSubmited(true)
}
/**
 * Condição para o formulario obrigado por nos avaliar
 */
if (IsSubmited){
    return <div className={styles.card} style={{alignItems:'center'}}>
            <div className={styles.MobilePhone}  >
            <img src="/paper-plane-solid.svg" alt="MobilePhone" />
            </div>
            <div>
                <p className={styles.pill}>You selected {rating} out of 5 ranting</p>
            </div>
            <div className={styles.texCenter}>

                        <h1 className={styles.title}>Thank You!</h1>
                        <p className={styles.description}>Consumers currently receive dozens of automated 
                            thank you emails from brands they have a relationship with. 
                            Most of these emails don't get much attention,
                             or even go straight to the trash without being read.</p>
            </div>
    </div>
}

    return(
        <form onSubmit={handleSubmit} className={styles.card}>
            <div></div>
           <div> <img className={styles.star} src="/icon-star.svg" alt="Estrela"/></div>
           <div className={styles.text}><h1 className={styles.title}>How do we do?</h1></div> 

            <p className={styles.description}>What about me in a personal presentation? <br/>Personal presentation: Check out tips to get along
                A good personal introduction should explain who you are and what your skills 
                    and qualifications are. <br/>Be careful not
                    to overdo it, but share your strengths. There is no need and no time to be very specific. </p>
                <div className={styles.buttonGroup}>
                    {[1, 2, 3, 4, 5].map((rating)=> (
                        <button type='button' onClick={() => handlerSteRating(rating)} 
                        className={styles.ratingButton}> 
                        {rating}
                        
                        </button>


                    ))}
                </div>
                    <button type="submit" className={styles.submitButton}>submit</button>
        </form>
    )
    
}