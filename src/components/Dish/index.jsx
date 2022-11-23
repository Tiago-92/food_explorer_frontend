import { api } from "../../services/api";

import { Container } from "./styles";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";

import favorite from "../../assets/favorite.svg";

import { Button } from "../../components/Button";

export function Dish({ data, ...rest }) {
   
   const imageURL = `${api.defaults.baseURL}/files/${data.img}`;

   return(
      <Container 
         {...rest}
      >
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
                  <img src={acc} />
                     3
                  <img src={add} />
                  <div>
                     <Button
                        type="submit"
                        title="Incluir"
                     />
                  </div>
               </div>                     
            </div>
         </div>
      </Container>
   )
}