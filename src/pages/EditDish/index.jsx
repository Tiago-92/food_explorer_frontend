import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Upload } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg"
import { FiUpload } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewIngredients } from "../../components/NewIngredients";
import { Footer } from "../../components/Footer";


export function EditDish() {
   const [title, setTitle] = useState("");
   const [ingredients, setIngredients] = useState([]);
   const [newIngredient, setNewIngredient] = useState("");
   const [price, setPrice] = useState("");
   const [description, setDescription] = useState("");
   const [img, setImg] = useState(null);

   const navigate = useNavigate();

   function handleAddIngredients() {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
   }

   function handleRemoveIngredient(deleted) {
      setIngredients(prevState => prevState.filter(ingredient => ingredients !== deleted));
  }
  
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

      const formData = new FormData();
        formData.append("img", img);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);

        ingredients.map(ingredient => (
         formData.append("ingredients", ingredient)
     ))

        api.post("/dishs", formData)
        alert("Prato cadastrado com sucesso");
        navigate("/")
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
            <Upload>
                  <span>Imagem do Prato</span>
                  <label id="file" htmlFor="img"><FiUpload/>Escolha um arquivo</label>
                  <input className="file"
                     id="img"
                     type="file"
                     onChange={e => setImg(e.target.files[0])}
                  />
            </Upload>
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
                  type="number" 
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
            <button 
               onClick={handleCreateDish}>
               Adicionar pedido
            </button>
         </div>

         <Footer />
      </Container>
   )
}