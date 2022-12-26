import { Container } from "./styles";

export function Itens({ data, ...rest }){
    return(
        <Container {...rest}>
         <h1>{data.status}</h1>
         
      </Container>
    )
}