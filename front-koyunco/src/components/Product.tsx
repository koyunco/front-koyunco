import Message from "./Message";
import ContentFeature from "./ContentFeatureProduct";
import Section1 from "./Section1";
import LogoCloud from "./LogoCloud";
import Tile from "./Tile";
import Content from "./ContentProduct";
import Price from "./Price";

const Product = () => {
    return (
        <div>
          {/* Add your content here */}
            <Message></Message>
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