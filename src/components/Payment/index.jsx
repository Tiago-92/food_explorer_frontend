import { useState } from "react";

import { Container } from "./styles";

import { Button } from "../Button";

import pixLogo from "../../assets/pix.svg";
import cardImage from "../../assets/card.svg";
import qrCode from "../../assets/qrCode.png";
import { Receipt } from 'phosphor-react';

export function Payment() {
   const [isCredit, setIsCredit] = useState(false);

   function showCredit() {
      setIsCredit(true)
   }

   function showPix() {
      setIsCredit(false)
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

            {isCredit === false && 
               <div className="pix">
                  <img src={qrCode} />
               </div>   
            }
         
            {isCredit &&
               <div className="card"> 
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

                  <div className="button">
                     <Button 
                        title="Finalizar Compra"
                        icon={Receipt}
                     />
                  </div>
                 
               </div>
            }
         </div>  
      </Container>
      )
   } 