import { Container } from "./styles";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";
import food_1 from "../../assets/food_1.png";

import { Button } from "../../components/Button";

export function Dish() {
   return(
      <Container>
         <div className="carousel">
            <div className="dish">
               <img src={food_1} />
               <h3>Salada Ravanello</h3>
               <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
               <span>R$ 49,97</span>
               <div className="add-acc">
                  <img src={acc} />
                     3
                  <img src={add} />
                  <Button title="Incluir" />
               </div>                     
            </div>
         </div>
      </Container>
   )
}