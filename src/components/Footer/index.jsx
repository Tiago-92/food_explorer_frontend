import { Container } from "./styles";

import { AiOutlineCopyrightCircle } from "react-icons/ai";

import polygonGray from "../../assets/polygonGray.svg";

export function Footer() {
   return(
      <Container>
         <span className="food-explorer">
            <img src={polygonGray} />
            food explorer
         </span>
         
         <span className="copyright">
            <AiOutlineCopyrightCircle />
            2022 - Todos os direitos reservados
         </span>
      </Container>
   )
}