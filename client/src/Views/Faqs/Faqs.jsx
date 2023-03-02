import { questionAndAnswer, textLeftFaqs } from './data';
import './Faqs.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Faqs = () => {
    const [isOpen,setIsOpen]=useState(
        { 0: false, 1: false, 2: false, 3: false, 4: false }
    );
    
    return (
        <div className='faqs'>
            <div className="wrapper">

                <div className="left">
                    <h1>{textLeftFaqs.h1}</h1>
                    <p>{textLeftFaqs.p1}</p>
                    <p>{textLeftFaqs.p2}</p>

                    <div className="call-to-contact">

                        <h3>{textLeftFaqs.h3}</h3>
                        <p>{textLeftFaqs.p3}</p>
                        <Link to='/contact'className='link'>  
                            <button className='btn'>Contact Us</button>
                        </Link> 
                    </div>
                </div>

                <div className="right">
                    {questionAndAnswer.map((item,index)=>{
                        return(
                        <div className='container-QA' key={index}>
                            <div className="question">
                                <h3>{item.question}
                                <i  onClick={() => setIsOpen(prevState => ({ ...prevState, [index]: !prevState[index] }))}
                                 className={`plus fa-solid fa-plus ${isOpen[index] ? 'is-open' : ''}`}></i>
                                </h3>
                                
                            </div>

                            <div className={`answer ${isOpen[index] ? 'is-open' : ''}`} > 
                                <p>{item.answer}</p>
                            </div> 

                        </div>
                        )
                    })}
                </div>
            </div>
           
        </div>
    );
};

export default Faqs;