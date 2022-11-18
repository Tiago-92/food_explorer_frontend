import { api } from "../../services/api";

import { Container } from "./styles";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";

import favorite from "../../assets/favorite.svg";

import { Button } from "../../components/Button";

export function Dish({ data, ...rest }) {
   
   const imageURL = `${api.defaults.baseURL}/files/${data.img}`;

   /* Tentei chamar o controller que eu eu criei no back-end aqui, mas não encontei uma forma de vincular o id do prato quando eu
      eu chamo essa função lá em baixo no botão

     async function handleAddOrder() {

      await api.post("/myorder?id");
   }
   */
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
                  <img src={acc} />
                     3
                  <img src={add} />
                  <div>
                     <Button
                        type="submit"
                        title="Incluir"
                       // onClick={handleAddOrder}
                     />
                  </div>
                  <div>{data.id}</div>
               </div>                     
            </div>
         </div>
      </Container>
   )
}