import { Container, Form } from "./styles";

import polygon from "../../assets/polygon.svg";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

export function SignUp() {
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
                    <h2>Faça Login</h2>

                    <p>E-mail</p>
                    <Input
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com"
                    />

                    <p>Senha</p>
                    <Input
                        type="password"
                        placeholder="No minímo 6 caracteres" 
                    />
                    <Button title="Entrar" />
                </div>

                <button className="button">
                        Criar uma Conta
                    </button>
            </Form>            
        </Container>
    )
};