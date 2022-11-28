import { useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";

import favorite from "../../assets/favorite.svg";

import { Button } from "../../components/Button";

export function Dish({ data, ...rest }) {
   const [quantity, setQuantity] = useState(0);

   const id = data.id

   const imageURL = `${api.defaults.baseURL}/files/${data.img}`;

   function addQuantity() {
      setQuantity(quantity + 1)
   }

   function removeQuantity() {
      setQuantity(quantity - 1)
   }

   async function handleAddDishToMyOrder() {
      await api.post(`/myorder/?id=${id}`, {
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

               <img 
                  src={imageURL}
                  alt={`imagem de ${data.title}`} 
               />

               <h3>{data.title}</h3>

               <p>{data.description}</p>
               
               <span>R$ {data.price}</span>
               
               
               <div className="add-acc">
                  <button
                     onClick={removeQuantity}
                  >
                     <img src={acc} />
                  </button>
                  {quantity}
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