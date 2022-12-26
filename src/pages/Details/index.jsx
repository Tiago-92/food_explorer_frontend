import { useState, useEffect, } from "react";

import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, Content } from "./styles";

import def4ult from "../../assets/Imagens/def4ult.png";
import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";
import order from "../../assets/order.svg";

export function Details() {
   const [data, setData] = useState(null);
 
   const params = useParams();

   const imageURL = data && `${api.defaults.baseURL}/files/${data.img}`

   const ingredientsIMG = data && data.ingredients[0] ? data && `${api.defaults.baseURL}/files/${data.ingredients[0].img}` : def4ult; 
   const ingredientsIMG1 = data && data.ingredients[1] ? data && `${api.defaults.baseURL}/files/${data.ingredients[1].img}` : def4ult; 
   const ingredientsIMG2 = data && data.ingredients[2] ? data && `${api.defaults.baseURL}/files/${data.ingredients[2].img}` : def4ult;
   const ingredientsIMG3 = data && data.ingredients[3] ? data && `${api.defaults.baseURL}/files/${data.ingredients[3].img}` : def4ult;

   const ingredientesName = data && data.ingredients[0] ? data && data.ingredients[0].name : '';
   const ingredientesName1 = data && data.ingredients[1] ? data && data.ingredients[1].name : '';
   const ingredientesName2 = data && data.ingredients[2] ? data && data.ingredients[2].name : '';
   const ingredientesName3 = data && data.ingredients[3] ? data && data.ingredients[3].name : '';
  
   useEffect(() => {
      async function fetchDish() {
         const response = await api.get(`/dishs/${params.id}`);
         setData(response.data)
         console.log(response.data)
      }

      fetchDish();
   }, [])

   return(
      <Container>
         <Header />

         {
            data &&
            
            <Content>
               <img src={imageURL} alt="Salada Ravanello"/>

               <div className="column">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>

                  <div className="ingredients">

                     <div>
                        <img src={ingredientsIMG} />
                        <span>{ingredientesName}</span>
                     </div>

                     <div>
                        <img src={ingredientsIMG1} />
                        <span>{ingredientesName1}</span>
                     </div>

                     <div>
                        <img src={ingredientsIMG2} />
                        <span>{ingredientesName2}</span>
                     </div>

                     <div>
                        <img src={ingredientsIMG3} />
                        <span>{ingredientesName3}</span>
                     </div>
                  </div>

                  <div className="value">
                     <span>{data.price}</span>
                     <button className="add">
                        <img src={acc} />
                     </button>
                     01
                     <button className="acc">
                        <img src={add} />
                     </button>
                     <Button 
                        title="Incluir" 
                        img src={order}
                     />
                  </div>
               </div>
            </Content> 
         }
      </Container>
   )
}