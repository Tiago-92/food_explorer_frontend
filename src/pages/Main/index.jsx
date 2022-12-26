import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Link } from "react-router-dom";

import { Container, Content } from "./styles";
import arrow from "../../assets/arrow.svg";
import flavors from "../../assets/flavors.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Dish } from "../../components/Dish";

export function Main() {
   const [dishs, setDishs] = useState([]);
   const [ingredients, setIngredients] = useState([]);
   const [search, setSearch] = useState("");

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

   useEffect(() => {
      async function fetchDishs() {
          const response = await api.get(`/dishs?title=${search}`);
          setDishs(response.data)
          console.log(response.data)
          
          const responseIngredients = await api.get("/ingredients")
          setIngredients(responseIngredients.data)
      }         
      fetchDishs();
  }, [search])

   return(
      <Container>
         <Header search={setSearch}/>

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

            <button>
               <Link to="/create">
                  Criar prato
               </Link>
            </button>

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
                     {
                        dishs.map(dish => (
                           <Dish
                              key={String(dish.id)}
                              data={dish}
                           />
                        ))
                     }
      
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
                
                  </div>

                  <div className="item">
         
                  </div>

                  <div className="item">
          
                  </div>

                  <div className="item">
                
                  </div>
               </div>
            </div>         
         </Content>
         <Footer />
      </Container>
   )
}