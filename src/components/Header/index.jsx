import { Container } from "./styles"

import polygon from "../../assets/polygon.svg";
import order from "../../assets/order.svg";
import goBack from "../../assets/goBack.svg";

import { AiOutlineSearch } from 'react-icons/ai';

import { Input } from "../Input";

import { Button } from "../Button";
 
export function Header() {
   return(
      <Container>
         <h1>
            <img
               src={polygon}
               alt='Imagem de um polígno'
            />
            food explorer
         </h1>

         <p>Meus favoritos</p>

         <div className="input">
            <Input
               type="text"
               placeholder="Busque pelas opções de prato"
               icon={AiOutlineSearch}
            />
         </div>
          
          <Button 
            title="Meus Pedidos (0)"
         />

         <img src={goBack}/>
         
      </Container>
   )
}