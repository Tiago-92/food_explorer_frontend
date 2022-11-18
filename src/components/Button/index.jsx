import { Container } from "./styles";

export function Button({ icon: Icon, title, img, onClick, ...rest }) {
   return(
      <Container 
         type="submit"
         {...rest}
      >
         {Icon && <Icon size={19.5} />}
         {title}
      </Container>
   )
}