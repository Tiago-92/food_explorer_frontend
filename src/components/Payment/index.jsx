import { useState } from "react";

import { Container } from "./styles";

import { Button } from "../Button";

import pixLogo from "../../assets/pix.svg";
import cardImage from "../../assets/card.svg";
import qrCode from "../../assets/qrCode.png";
import clock from "../../assets/clock.svg";
import checkCircle from "../../assets/checkCircle.svg";
import delivered from "../../assets/delivered.svg";
import { Receipt } from 'phosphor-react';

export function Payment() {
   const [isCredit, setIsCredit] = useState(false);
   const [awaitPayment, setAwaitPayment] = useState(false);
   const [paymentAccepted, setPaymentAccepted] = useState(false);
   const [orderDelivered, setOrderDelivered] = useState(false);

   function showCredit() {
      setIsCredit(true)
      setAwaitPayment(null)
      setOrderDelivered(false)
   }

   function showPix() {
      setIsCredit(false)
      setAwaitPayment(null)
      setOrderDelivered(false)
   }

   function showCheckCircle() {
      setAwaitPayment(true)
      setIsCredit(null)
      showPaymentAccept()
   }

   function showPaymentAccept () {
      setTimeout(() => {
         setPaymentAccepted(true)
         setAwaitPayment(null)
         showOrderDelivered()
    }, 5000);
   }

   function showOrderDelivered() {
      setTimeout(() => {
         setOrderDelivered(true)
         setPaymentAccepted(null)
      }, 5000);
   }

   return (
      <Container>
          <h1>Pagamento</h1>

         <div className="payment">
            <div className="pix-our-credit">
               <button 
                  className={isCredit === false ? "buttonPix" : "button-transparent"}
                  onClick={showPix}
               >
               <img src={pixLogo} alt="logo do pix" />
               PIX
               </button>

               <button 
                  className={isCredit ? "buttonCredit" : "button-transparent"}
                  onClick={showCredit}
               >
                  <img src={cardImage} alt="Imagem de um cartão" />
                  Crédito
               </button>
            </div>

            {
               isCredit === false && 
               <div className="pix">
                  <img src={qrCode} />
               </div>   
            }

            {
               awaitPayment && 
               <div className="await">
                  <img src={clock} />
                  <span>Aguardando pagamento no caixa</span>
               </div>   
            }

            {
               paymentAccepted && 
               <div className="accept">
                  <img src={checkCircle} />
                  <span>Pagamento aprovado!</span>
               </div>
            }

            {
               orderDelivered &&
               <div className="delivered">
                  <img src={delivered} />
                  <span>Pedido entregue!</span>
               </div> 
            }   
         
            {
               isCredit &&
               <div className="card"> 
                  <div className="number">
                     <span>Número do cartão</span>
                     <input 
                        type="number"
                        placeholder="0000 0000 0000 0000"
                     />
                  </div>
                  <div className="security">
                     <div>
                        <span>Validade</span>
                        <input
                           placeholder="04/25"
                           maxLength="5"
                        />
                     </div>
                  <div>
                     <span>CVC</span>
                     <input 
                        type="password" 
                        placeholder="***"
                        maxLength="3"
                     />
                  </div>
                  </div>

                  <div className="button">
                     <Button 
                        title="Finalizar Compra"
                        icon={Receipt}
                        onClick={showCheckCircle}
                     />
                  </div>
                 
               </div>
            }
         </div>  
      </Container>
      )
   } 