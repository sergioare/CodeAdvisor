import './Home.scss'
import Cards from "../../components/Cards/Cards"
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Testimonials  from '../../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div className='home'>
      <Commercial />
      <Cards />
      <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            {icon.name}
          </div>
        ))}
      </div>


    </div>
  );
};

export default Home;
