import './Navbar.scss'
import { navbarItems } from './data';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = () => {
    return (
        <div className='navbar'>
           <div className='navLeft'>
           <i className="fa-solid fa-house-laptop"></i>
            CodeAdvisor 
           </div> 
            <div className='navRight'>
                    {navbarItems.map((item, index)=>{
                        return <div key={index}>{item.name}</div>
                    })}
                    <Searchbar/>
            </div>
        </div>
    );
};

export default Navbar;