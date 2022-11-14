import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

import { Link } from "react-router-dom";

import polygon from "../../assets/polygon.svg";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { SignIn } = useAuth();

    function handleSignUp() {
        SignIn({ email, password })
    }

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
                        onChange={e => setEmail(e.target.value)}
                    />

                    <p>Senha</p>
                    <Input
                        type="password"
                        placeholder="No minímo 6 caracteres"
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <Button title="Entrar" onClick={handleSignUp} />
                </div>

                <button className="button">
                    <Link to="/">
                        Criar uma Conta
                    </Link>
                </button>
            </Form>            
        </Container>
    )
};