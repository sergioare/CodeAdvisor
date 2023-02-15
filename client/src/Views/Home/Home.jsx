import './Home.scss'
import Cards from "../../components/Cards/Cards"
import { icons } from '../../utils';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';

const Home = (props) => {
  return (
    <div className='home'>
      <SideBar/>
      <Cards />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon'>
            {icon.name}
          </div>
        ))}
      </div>
      <ConfigSideBar isConfigBarOpen={props.isConfigBarOpen} toggleConfigBar={props.toggleConfigBar}/>


    </div>
  );
};

export default Home;
