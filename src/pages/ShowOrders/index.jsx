import { useState, useEffect } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export function ShowOrders() {
   /*const [orders, setOrders] = useState([]);

      useEffect(() => {
      async function fetchOrders() {
         const response = await api.get("orders")
         setOrders(response.data)
         console.log(response.data)
      }
      fetchOrders()
   }, [])
   */

   return(
      <Container>
         <Header />

         <h1>Pedidos</h1>

         <table>
               <thead>
                  <tr>
                     <th>Status</th>
                     <th>Código</th>
                     <th>Detalhamento</th>
                     <th>Data e Hora</th>
                  </tr>
               </thead>
               <tbody>
               <tr>
                  <td>
                     <li className="pending">Pendente</li>
                  </td>
                  <td>00000004</td>
                  <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
               </tr>
               <tr>
                  <td>
                     <li className="preparing">Preparando</li>
                  </td>
                  <td>00000003</td>
                  <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
               </tr>
               <tr>
                  <td>
                     <li className="delivered">Entregue</li>
                  </td>
                  <td>00000002</td>
                  <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
               </tr>
               <tr>
                  <td>
                     <li className="delivered">Entregue</li>
                  </td>
                  <td>00000001</td>
                  <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
               </tr>
               </tbody>
         </table>

         <Footer />
      </Container>
   )
}

