import { Container, Form } from "./styles";

import { Link } from "react-router-dom";

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

                    <div>
                        <label>Seu Nome</label>
                        <Input
                            isTransparent
                            type="text"
                            placeholder="Exemplo: Maria da Silva"
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <Input
                            isTransparent
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com" 
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <Input
                            isTransparent
                            type="password"
                            placeholder="No minímo 6 caracteres" 
                        />
                    </div>
                    
                    <Button title="Criar Conta" />
                </div>

                <button className="button">
                    <Link to="/register">
                        Já tenho uma conta
                    </Link>
                </button>
            </Form>            
        </Container>
    )
};