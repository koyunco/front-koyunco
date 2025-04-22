import HeroProduct from "./components/HeroProduct";
import ContentFeature from "./components/ContentFeatureProduct";
import Section1 from "./components/Section1";
import LogoCloud from "./components/LogoCloudProduct";
import Tile from "./components/TileProduct";
import Content from "./components/ContentProduct";
import Price from "./components/Price";

const Product = () => {
    return (
        <div>
          {/* Add your content here */}
            <HeroProduct></HeroProduct>
            <ContentFeature></ContentFeature>
            <Section1></Section1>
            <LogoCloud></LogoCloud>
            <Tile></Tile>
            <Content></Content>
            <Price></Price>

        </div>
      );
};

export default Product;