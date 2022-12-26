import { Container } from "./styles"

export function Ingredients({ name, img, img2, img3, ...rest}) {
   return(
      <Container {...rest}>
         {name}
         {img}
      </Container>
   )
}