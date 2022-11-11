import { useRef } from "react";

import { Container, Content } from "./styles";
import arrow from "../../assets/arrow.svg";
import flavors from "../../assets/flavors.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Dish } from "../../components/Dish";

export function Main() {
   const carousel = useRef(null);
   const carousel_2 = useRef(null);
   const carousel_3 = useRef(null);

   const handleLeftClickDish = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth
   };

   const handleRightClickDish = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth
   };

   const handleLeftClickDessert = (e) => {
      e.preventDefault();
      carousel_2.current.scrollLeft -= carousel_2.current.offsetWidth
   };

   const handleRightClickDessert = (e) => {
      e.preventDefault();
      carousel_2.current.scrollLeft += carousel_2.current.offsetWidth
   };

   const handleLeftClickDrink = (e) => {
      e.preventDefault();
      carousel_3.current.scrollLeft -= carousel_3.current.offsetWidth
   };

   const handleRightClickDrink = (e) => {
      e.preventDefault();
      carousel_3.current.scrollLeft += carousel_3.current.offsetWidth
   };

   return(
      <Container>
        
         <Header />

         <div className="flavors">
            <img src={flavors} />
            <div className="box-green">
               <div className="content">
                  <h2>Sabores inigualáveis</h2>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
               </div>
            </div>
         </div>

         <Content>

            <h1>Pratos Principais</h1>

            <div className="dishs">
               <div className="carousel" ref={carousel}>

                  <button onClick={handleLeftClickDish} className="button-left">
                     <img src={arrow} />
                  </button>
                  <button onClick={handleRightClickDish} className="button-right">
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
               </div>                      
            </div> 
         </Content>
         <Content>

            <h1>Sobremesas</h1>
            
            <div className="dishs">
                  <div className="carousel" ref={carousel_3}>

                     <button onClick={handleLeftClickDrink} className="button-left">
                        <img src={arrow} />
                     </button>
                     <button onClick={handleRightClickDrink} className="button-right">
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
                  </div>
               </div>         
         </Content>
         <Content>
            
         <h1>Bebidas</h1>

         <div className="dishs">
               <div className="carousel" ref={carousel_2}>

                  <button onClick={handleLeftClickDessert} className="button-left">
                     <img src={arrow} />
                  </button>
                  <button onClick={handleRightClickDessert} className="button-right">
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
               </div>
            </div>         
         </Content>
         <Footer />
      </Container>
   )
}