import styles from './Navbar.module.css'
import { navbarItems } from './data';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <div className={styles.navLeft}>
           <i className="fa-solid fa-house-laptop"></i>
            CodeAdvisor 
           </div> 
            <div className={styles.navRight}>
                    {navbarItems.map((item, index)=>{
                        return <div key={index}>{item.name}</div>
                    })}
                    <Searchbar/>
            </div>
        </div>
    );
};

export default Navbar;