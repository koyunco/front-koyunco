import AnimatedDotsHeader from './Header'
import Banner from "./Banner"
import Tile from "./Tile"
import Newsletter from './Newsletter'
import ContentFeature from "./ContentFeature"
import LogoCloud from './LogoCloud'
import LetsTalk from './Letstalk'


const Home = () => {
    return (
      <div>
        {/* Add your content here */}
        <AnimatedDotsHeader></AnimatedDotsHeader>
        <Tile></Tile>
        <ContentFeature></ContentFeature>
        <Banner></Banner>
        <LetsTalk></LetsTalk>
        <LogoCloud></LogoCloud>
        <Newsletter></Newsletter>
      </div>
    );
  };
  export default Home;


