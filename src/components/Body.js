import styles from './Body.module.css'
import Rodape from '../elements/Rodape.svg'

function Body(){
    return(
        <div className='Body-container'>
            <h1 className={styles.h1}>Create design that is<br></br> out-of-this-world.</h1>
            <p className={styles.p}>Get access to unlimited courses and design <br></br>
            resources to shoot your design career to the<br></br> moon.</p>
            <button className={styles.button}>Get Started</button>
            <p className={styles.p2}>Join 3,000+ designers from</p>
            <img src={Rodape} alt="Imagem de rodape com as marcas: 
            airbnb, amazon, tesla, slack e atripe"></img>
        </div>
    );
}

export default Body;