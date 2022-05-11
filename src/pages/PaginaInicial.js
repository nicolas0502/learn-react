import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import HeaderCard from "../components/HeaderCard"
import CardHqUsua from "../components/CardHqUsua"
import "./PaginaInicial.css"


const PaginaInicial = () => {
  return (
    <div className="initial">
      <HeaderCard />
      <Carousel />
      <CardHqUsua />
      <Footer/>
    </div>
  )
}

export default PaginaInicial