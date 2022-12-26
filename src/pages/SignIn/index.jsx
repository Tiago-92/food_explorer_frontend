import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import polygon from "../../assets/polygon.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignIn() {
        if (!name || !email || !password) {
            return alert("Todos os campos devem ser preenchidos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar.")
            }
        })
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
                    <h2>Crie Sua Conta</h2>

                    <div>
                        <label>Seu Nome</label>
                        <Input
                            isTransparent
                            type="text"
                            placeholder="Exemplo: Maria da Silva"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <Input
                            isTransparent
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com"
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <Input
                            isTransparent
                            type="password"
                            placeholder="No minímo 6 caracteres"
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>
                    
                    <Button title="Criar Conta" onClick={handleSignIn} />
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