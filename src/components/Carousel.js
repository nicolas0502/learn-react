import { useState } from "react"
import { Carousel } from "react-bootstrap"
import Imagem1 from '../assets/img/imagem 1.png'
import Imagem2 from '../assets/img/imagem 2.png'  
import Imagem3 from '../assets/img/imagem 3.png' 
import Banner from '../assets/img/Banner.png'
import "./Carousel.css"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagem1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Library HQs</h3>
              <p>Os melhores quadrinhos e managas da América do Sul.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagem2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Incriveis Promoções</h3>
              <p>Promoções imperdiveis em toda loja a todo tempo.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagem3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Hqs de Todo Tipo</h3>
              <p>Não importa o hq que você procure nós teremos.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <img src={Banner} alt="Banner" className="Banner"/>
      </div>

    );
  }
  
export default ControlledCarousel 