import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Payment } from "../../components/Payment";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";

import { Container, Content } from "./styles";

export function FinalizeOrder() {
   const [carts, setCarts] = useState([]);
   
   useEffect(() => {
      async function fetchCart() {
         const response = await api.get("/cart/?user_id=14");
         setCarts(response.data)
      }

      fetchCart()
   }, [])

   return(
      <Container>
          <Header/>
          
         <Content>
            <div className="order">
               <h1>Meu Pedido</h1>

               {
                  carts.map(cart => (
                     <Cart
                        key={String(cart.id)}
                        data={cart}
                     />
                  ))
               }
               
               <p>TOTAL: R$</p>
            </div>
            <Payment />

         </Content>

         <Footer />         
      </Container>
   )
}