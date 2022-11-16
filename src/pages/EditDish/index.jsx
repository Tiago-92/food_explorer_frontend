import { useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg"

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NewIngredients } from "../../components/NewIngredients";
import { Footer } from "../../components/Footer";

export function EditDish() {
   const [title, setTitle] = useState("");
   const [ingredients, setIngredients] = useState([]);
   const [newIngredient, setNewIngredient] = useState("");
   const [price, setPrice] = useState("");
   const [description, setDescription] = useState("");

   async function handleCreateDish() {
      if(!title) {
         alert("Digite um título para o seu prato!")
      }

      if(!price) {
         alert("Digite um preço para o seu prato!")
      }

      if(!description) {
         alert("Digite uma descrição para o seu prato!")
      }

      await api.post("/dishs", {
         title,
         price,
         description,
         ingredients
      });

      alert("Novo prato criado com sucesso!")
   }

   function handleAddIngredients() {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
   }

   function handleRemoveIngredient(deleted) {
      setIngredients(prevState => prevState.filter(ingredient => ingredients !== deleted));
  }

   return(
      <Container>
         <Header />

         <button className="button-arrow-left">
            <img src={arrowLeft} />
            voltar
         </button>

         <h1>Editar Prato</h1>
         
         <div className="flex-row">
            <div>
               <span>Imagem do prato</span>
               <div className="button">
                  <Button title="Selecionar imagem" />
               </div>
            </div>
            
            <div className="input">
               <span>Nome</span>
               <Input
                  type="text" 
                  placeholder="Ex: Salada Ceasar"
                  onChange={e => setTitle(e.target.value)}
               />
            </div>
         </div>

         <div className="flex-row2">
            <div>
               <span>Ingredientes</span>
               <div className="ingredients">
                  {
                     ingredients.map((ingredient, index) =>(
                        <NewIngredients
                           key={String(index)}
                           value={ingredient}
                           onClick={() => handleRemoveIngredient(ingredient)}
                        />
                     ))
                  }
                  
                  <NewIngredients
                     isNew
                     placeholder="Adicionar"
                     onChange={e => setNewIngredient(e.target.value)}
                     value={newIngredient}
                     onClick={handleAddIngredients}
                  />
               </div>
            </div>

            <div className="price">
               <span>Preço</span>
               <Input 
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
               />
            </div>
            
         </div>

         <div className="description">
            <span>Descrição</span>
            <textarea
               type="text"
               placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
               onChange={e => setDescription(e.target.value)} 
            />  
         </div>

         <div className="save-order">
            <button onClick={handleCreateDish}>
               Adicionar pedido
            </button>
         </div>

         <Footer />
      </Container>
   )
}