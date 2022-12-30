import { Container } from "./styles";

export function Button({ icon: Icon, title, ...rest }) {
   return(
      <Container 
         {...rest}
      >
         {Icon && <Icon size={26} />}
         {title}
      </Container>
   )
}