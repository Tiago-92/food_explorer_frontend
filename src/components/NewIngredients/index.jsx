import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NewIngredients({ isNew, value, onClick, ...rest }) {
   return(
      <Container isNew={isNew}>
         <input
            value={value}
            readOnly={!isNew}
            {...rest} 
         />

         <button
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'} 
         >
            { isNew ? <FiPlus /> : <FiX /> }
         </button>   
      </Container>
   )
}