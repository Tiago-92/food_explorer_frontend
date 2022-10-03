import { Container } from "./styles";

export function Button({ icon: Icon, title, img, ...rest }) {
   return(
      <Container 
         type="button"
         {...rest}
      >
         {Icon && <Icon size={19.5} />}
         {title}
      </Container>
   )
}