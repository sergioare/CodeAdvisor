import './Newsletter.scss'
import Swal from 'sweetalert2'

const Newsletter = () => {
    const showAlert=()=>{
        Swal.fire({
            title: '',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

    return (
        <div className="newsletter">
            {/* <div className="form"> */}

            <form className="form">
            <h1>Get Started Now</h1>
            <p>Subscribe to our newsletter to receive promotions and news of our online classes</p>
                <input
                    type='text'
                    placeholder="Full name"
                    name="name"
                    id="name"
                    className='input-name'
                />
                <input
                    type='email'
                    placeholder="E-mail"
                    name="email"
                    id="email"
                    className='input-email'
                />
                <button className='btn'>Submit</button>
            </form>
            {/* </div> */}
        </div>
    );
};

export default Newsletter;