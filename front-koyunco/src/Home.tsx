import AnimatedDotsHeader from './components/HeroHome'
import Banner from "./components/Banner"
import Tile from "./components/Tile"
import Newsletter from './components/Newsletter'
import ContentFeature from "./components/ContentFeature"
import LogoCloud from './components/LogoCloud'
import LetsTalk from './components/Letstalk'


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


