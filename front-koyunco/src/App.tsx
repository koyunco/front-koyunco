import TopMenu from './components/TopMenu'
import AnimatedDotsHeader from './components/Header'
import Banner from "./components/Banner"
import Tile from "./components/Tile"
import Newsletter from './components/Newsletter'
import ContentFeature from "./components/ContentFeature"
import Footer from "./components/Footer"
import LogoCloud from './components/LogoCloud'
import LetsTalk from './components/Letstalk'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Product from './components/Product'


function App() {
  return (
    <>

      <TopMenu></TopMenu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Routes>



      <Footer></Footer>

    </>

  )
}
export default App
