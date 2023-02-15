import { infoUs } from "./data"

const AboutUs = () => {

    return (
        <>
            {infoUs.map((i) => {
                return <div>

                    <img src={i.img} alt="developer" />
                    <p>{i.name}</p>
                    <p>{i.ocupation}</p>
                    <p>{i.linkedin}</p>
                    <p href="https://github.com/mariatm97" 
                    >{i.gitHub}</p>

                    {/* <a id="profile-link" href="https://github.com/mariatm97" target="_blank" class="btn contact-details">
          <i class="fab fa-github"></i> 
          GitHub
          </a> */}

                </div>
            })}

        </>
    )
}
export default AboutUs;