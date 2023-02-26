  import './Footer.scss'
  import { Link } from 'react-router-dom';
  import { footerItems, links } from './data';
  import { icons } from '../../Utils/utils';
  import Swal from 'sweetalert2'

const Footer = () => {
  const showAlert = (e)=>{
    e.preventDefault();
    Swal.fire({
    title: "Sorry, We are working for you",
    icon: "warning",
    footer: "<b>Continue to enjoy our services</b>",
    timer: 3000,
})
}
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
            const linkProps = {
              to: item.path,
              key: index,
              className: 'links-company'
            };
            if (item.name === 'Community' || item.name === 'Testimonial') {
              linkProps.onClick = showAlert;
            }
            return <Link {...linkProps}>{item.name}</Link>;
          })}
        </div>
       

        <div className="footer-contact">
            <h1>Contact Us</h1>
                
                <p><span>United States</span>
                    - 420 Kent Dr, Mountain View, CA 94043</p>
            

            <div>
                <i className="fa fa-phone"></i>
                <p>55-3565-9898</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p onClick={showAlert}><a  href="CodeAdvisor@gmail.com">contact@codeadvisor.com</a></p>
            
        </div>
        </div>
        <div className="footer-links">
        <h1>Links</h1>
        {links.map((item, index) => {
          const linkProps = {
            to: item.path,
            key: index
          };
          if (item.name === 'FAQs' || item.name === 'Become a Teacher') {
            linkProps.onClick = showAlert;
          }
          return <Link {...linkProps}><div>{item.name}</div></Link>;
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