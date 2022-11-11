import { Container } from "./styles";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";
import food_1 from "../../assets/food_1.png";
import favorite from "../../assets/favorite.svg";

import { Button } from "../../components/Button";

export function Dish() {
   return(
      <Container>
         <div className="carousel">
            <div className="dish">
               <div>
                  <button className="favorite">
                     <img src={favorite} />
                  </button>
               </div>

               <img src={food_1} />
               <h3>Salada Ravanello</h3>
               <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
               <span>R$ 49,97</span>
               
               <div className="add-acc">
                  <img src={acc} />
                     3
                  <img src={add} />
                  <div>
                     <Button title="Incluir" />
                  </div>
               </div>                     
            </div>
         </div>
      </Container>
   )
}