import { useRef } from "react";

import { Container, Content } from "./styles";
import arrow from "../../assets/arrow.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Dish } from "../../components/Dish";

export function Main() {
   const carousel = useRef(null);

   const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth
   };

   const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth
   };

   return(
      <Container>
        
        <Header />

         <Content>
            <div className="dishs">
               <div className="carousel" ref={carousel}>

                  <button onClick={handleLeftClick} className="button-left">
                     <img src={arrow} />
                  </button>
                  <button onClick={handleRightClick} className="button-right">
                     <img src={arrow} />
                  </button>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>

                  <div className="item">
                     <Dish/>
                  </div>
               </div>            
            </div>
         </Content>

         <Footer />
      </Container>
   )
}