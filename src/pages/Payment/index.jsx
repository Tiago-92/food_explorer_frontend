import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import food_1 from "../../assets/food_1.png";
import pixLogo from "../../assets/pix.svg";
import cardImage from "../../assets/card.svg";
import order from "../../assets/order.svg";

import { Container } from "./styles";

export function Payment() {
   return(
      <Container>
         <Header />

         <h1>Meu Pedido</h1>
         
         <div>
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

            <div className="flex-container">
               <h1>Pagamento</h1>
               <div className="payment">
                  <div className="pix-our-credit">
                     <button className="buttonPix">
                        <img src={pixLogo} alt="logo do pix" />
                        PIX
                     </button>
                     <button className="buttonCredit">
                        <img src={cardImage} alt="Imagem de um cartão" />
                        Crédito
                     </button>
                  </div>

                  <div className="date-card">
                     <div className="number">
                        <span>Número do cartão</span>
                        <input type="number" placeholder="0000 0000 0000 0000"/>
                     </div>
                     <div className="security">
                        <div>
                           <span>Validade</span>
                           <input placeholder="04/25"/>
                        </div>
                       <div>
                        <span>CVC</span>
                        <input type="number" placeholder="04/25"/>
                       </div>
                     </div>
                     <button>
                        <img src={order} />
                        Finalizar pagamento
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
         
      </Container>
   )
}