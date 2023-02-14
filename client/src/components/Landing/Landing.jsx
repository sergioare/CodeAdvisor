import styles from './Landing.module.css'
import Navbar from '../Navbar/Navbar';
import Cards from '../Cards/Cards';
import { images, textLanding } from './data';

const Landing = () => {
    return (
        <div className={styles.landing}>
          <div className={styles.navbar}>
            <Navbar/>
          </div>

          <div className={styles.leftSide}>
            <h1>{textLanding.h1}</h1>
            <p>{textLanding.p1}</p>
          </div>

          <div className={styles.rightSide}>
            {images.map((image, index)=>(
              <img 
                src={image.src}
                alt={image.alt}
                key={index}
              />
            ))}
          </div>  

          <Cards />
      
        </div>
    );
};

export default Landing;