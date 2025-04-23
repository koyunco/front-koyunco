import HeroProduct from "./components/HeroProduct";
import ContentFeature from "./components/ContentFeatureProduct";
import Section1 from "./components/Section1";
import LogoCloud from "./components/LogoCloudProduct";
import Tile from "./components/TileProduct";
import Content from "./components/ContentProduct";
import Price from "./components/Price";
import Newsletter from './components/Newsletter'
import AnimatedDotsHeader from './components/HeroHome'
import LetsTalk from './components/Letstalk'

const Product = () => {
    return (
      <div>
        {/* Add your content here */}
        <AnimatedDotsHeader></AnimatedDotsHeader>
        <Tile></Tile>
        <HeroProduct></HeroProduct>
        <ContentFeature></ContentFeature>
        <Section1></Section1>
        <LogoCloud></LogoCloud>
        <LetsTalk></LetsTalk>
        <Content></Content>

        <Price></Price>

        <Newsletter></Newsletter>
      </div>
      );
};

export default Product;