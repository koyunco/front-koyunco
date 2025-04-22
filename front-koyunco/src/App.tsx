import Header from './components/Header'
import AnimatedDotsHeader from './components/HeroHome'
import Banner from "./components/Banner"
import Tile from "./components/Tile"
import Newsletter from './components/Newsletter'
import ContentFeature from "./components/ContentFeature"
import Footer from "./components/Footer"
import LogoCloud from './components/LogoCloud'
import LetsTalk from './components/Letstalk'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product'


function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Routes>

      <Footer></Footer>
    </>

  )
}
export default App
