import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Payment } from "../../components/Payment";

import food_1 from "../../assets/food_1.png";

import { Container } from "./styles";

export function FinalizeOrder() {
   return(
      <Container>

         <Header />

         <div className="box">

            <div>

               <h1>Meu Pedido</h1>

               <div className="invisable-box">
                  <div className="dish">
                     <img src={food_1} alt="disk" />
                     <div>
                        <p>1 x Salada Radish<span>R$ 25.97</span></p>
                        <button>Excluir</button>
                     </div> 
                  </div>

                  <div className="dish">
                     <img src={food_1} alt="disk" />
                     <div>
                        <p>1 x Salada Radish<span>R$ 25.97</span></p>
                        <button>Excluir</button>
                     </div> 
               </div>

               <div className="dish">
                  <img src={food_1} alt="disk" />
                  <div>
                     <p>1 x Salada Radish<span>R$ 25.97</span></p>
                     <button>Excluir</button>
                  </div> 
               </div>

               <div className="dish">
                  <img src={food_1} alt="disk" />
                  <div>
                     <p>1 x Salada Radish<span>R$ 25.97</span></p>
                     <button>Excluir</button>
                  </div> 
               </div>
               <span>Total: R$ 45.56</span>
            </div>
         </div>

         <div className="payment">
            <Payment/>
         </div>
         </div>

         <Footer />
         
      </Container>
   )
}