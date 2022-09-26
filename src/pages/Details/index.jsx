import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";

import food_1 from "../../assets/food_1.png";
import lettuce from "../../assets/lettuce.png";
import tomato from "../../assets/tomato.png";
import radish from "../../assets/radish.png";
import bread from "../../assets/bread.png";

import acc from "../../assets/acc.svg";
import add from "../../assets/add.svg";
import order from "../../assets/order.svg";


export function Details() {
   return(
      <Container>
         <Header />
         
         <Content>
            <img src={food_1} alt="Salada Ravanello"/>

            <div className="column">
               <h1>Salada Ravanello</h1>
               <p>Rabanetes, folhas verdes e molho agridoce<br/> salpicados com gergelim.</p>

               <div className="ingredients">
                  <div>
                     <img src={lettuce} alt="alface" />
                     alface
                  </div>
                  <div>
                     <img src={tomato} alt="tomate" />
                     tomate
                  </div>
                  <div>
                     <img src={radish} alt="rabanete" />
                     rabanete
                  </div>
                  <div>
                     <img src={bread} alt="pão naan" />
                     pão naan 
                  </div> 
               </div>

               <div className="value">
                  <span>R$ 25,97</span>
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
      </Container>
   )
}