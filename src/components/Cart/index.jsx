import { api } from "../../services/api";

import { Container } from "./styles"

export function Cart({ data, ...rest }) {
    const imageURL = `${api.defaults.baseURL}/files/${data.dish_img}`;

    return (
        <Container {...rest}>
            <div className="description">
                <img src={imageURL} />
                <p>{data.quantity} x </p>  
                <p>{data.dish_title}</p>
                <span>R$ {data.dish_price}</span>
            </div>

            <div className="button">
                <button>Excluir</button>   
            </div>  
        </Container>
    )
}