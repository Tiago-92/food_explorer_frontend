import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import polygon from "../../assets/polygon.svg";
import goBack from "../../assets/goBack.svg";

import { AiOutlineSearch } from 'react-icons/ai';
import { Receipt } from 'phosphor-react';

import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Button } from "../Button";

 
export function Header({ search }) {
   const { SignOut } = useAuth();
   const navigate = useNavigate();

   function handleSignOut() {
      navigate("/");
      SignOut();
   }

   return(
      <Container>
         <h1>
            <img
               src={polygon}
               alt='Imagem de um polígno'
            />
            food explorer
         </h1>

         <button>Meus favoritos</button>

         <div className="input">
            <Input
               type="text"
               placeholder="Busque pelas opções de prato"
               icon={AiOutlineSearch}
               onChange={e => {search(e.target.value)}}
            />
         </div>
          
         <div className="button">
            <Button 
               title="Meus Pedidos (0)"
               to="/payment"
               icon={Receipt}
            />
         </div>

         <button onClick={handleSignOut}>
            <img src={goBack} />
         </button>
         
      </Container>
   )
}