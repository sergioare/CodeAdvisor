  import './Footer.scss'
  import { Link } from 'react-router-dom';
  import { footerItems, links } from './data';
  import { icons } from '../../Utils/utils';
const Footer = () => {
  return(
    <div>
        <footer className="footer-distributed">

        <div className="footer-logo">
            <Link to='/' className='linkLogo' >
              <i className="fa-solid fa-house-laptop"></i>
              CodeAdvisor
            </Link>
            <p>CodeAdvisor is a project that seeks to facilitate the access to online software advisors and connect with freelance programmers.</p>
            <div className='icons-footer'>
              
                {icons.map((icon, index) => (
                  <div className='icon' key={index}>
                    {icon.name}
                  </div>
                ))}
            </div>

          </div>


        <div className="footer-company">
            <h1>Company</h1>
            {footerItems.map((item, index) => {
            return <Link to={item.path} key={index}><div key={index} className='links-company'>{item.name}</div></Link>
          })}
            
        </div>
       

        <div className="footer-contact">
            <h1>Contact Us</h1>
                
                <p><span>Colombia</span>
                    - Colombia</p>
            

            <div>
                <i className="fa fa-phone"></i>
                <p>+57 320 142 1245</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="CodeAdvisor@gmail.com">CodeAdvisor@gmail.com</a></p>
            
        </div>
        </div>
        <div className="footer-links">
          <h1>Links</h1>
          {links.map((item, index) => {
            return <Link to={item.path} key={index}><div key={index}>{item.name}</div></Link>
          })}
          
         
        </div>
         
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <p className="rights">
              Copyright © 2023   <strong>  CodeAdvisor  </strong>  All rights reserved
              </p>
        </footer>
     

    </div>
    );
};

export default Footer;