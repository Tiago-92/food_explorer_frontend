import { Container, Form } from "./styles";

import polygon from "../../assets/polygon.svg";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

export function SignIn() {
    return (
        <Container>
            <h1>
                <img    
                    src={polygon}
                    alt='Imagem de um polígno'
                />

                food explorer
            </h1>

            <Form>
                <div className="form">
                    <h2>Crie Sua Conta</h2>
    
                    <p>Seu Nome</p>
                    <Input
                        type="text"
                        placeholder="Exemplo: Maria da Silva"
                    />
    
                    <p>Email</p>
                    <Input
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com" 
                    />
    
                    <p>Senha</p>
                    <Input
                        type="password"
                        placeholder="No minímo 6 caracteres" 
                    />
    
                    <Button title="Criar Conta" />
                </div>

                <button className="button">
                    Já tenho uma conta
                </button>
            </Form>            
        </Container>
    )
};