import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";

import favorite from "../../assets/favorite.svg";

import { Button } from "../../components/Button";

export function Dish({ data, ...rest }) {
   const [quantity, setQuantity] = useState(0);
   
   const navigate = useNavigate();

   const imageURL = `${api.defaults.baseURL}/files/${data.img}`;

   function handleDetails(id) {
      navigate(`/details/${data.id}`)
   }   

   function addQuantity() {
      setQuantity(quantity + 1)
   }

   function removeQuantity() {
      setQuantity(quantity - 1)
   }

   async function handleAddDishToMyOrder() {
      await api.post(`/myorder/?id=${data.id}`, {
         quantity,
      });

      alert("Prato adicionado ao carrinho!")
   }

   return(
      <Container {...rest}>
         <div className="carousel">
            <div className="dish">
               <div>
                  <button className="favorite">
                     <img 
                        src={favorite} 
                     />
                  </button>
               </div>

               <button
                  onClick={handleDetails}
               >
                  <img 
                     src={imageURL}
                     alt={`imagem de ${data.title}`} 
                  />
               </button>
      
               <h3>{data.title}</h3>

               <p>{data.description}</p>
               
               <span>R$ {data.price}</span>
               
               
               <div className="add-acc">
                  <button
                     onClick={removeQuantity}
                  >
                     <img src={acc} />
                  </button>
                  <span>
                     {quantity}
                  </span>
                  <button
                     onClick={addQuantity}
                  >
                     <img src={add} />
                  </button>
                  
               <div>
                  <Button
                     type="button"
                     title="Incluir"
                     onClick={handleAddDishToMyOrder}
                     onChange={e => setQuantity(e.target.value)}
                  >
                     Incluir
                  </Button>                  
               </div>
               </div>                     
            </div>
         </div>
      </Container>
   )
}