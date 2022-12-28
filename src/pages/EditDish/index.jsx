import { useState, useEffect } from "react";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Upload } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { FiUpload } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewIngredients } from "../../components/NewIngredients";

import { Footer } from "../../components/Footer";

export function EditDish() {
   const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [image, setImage] = useState(null);
   const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();
    const params = useParams();


   function comeBack() {
      navigate(-1);
   }

   function handleEditDish() {
      api.put(`/dishs/${params.id}`, { title, description, price, category, ingredients });

      const formData = new FormData();
      formData.append("img", image);

      api.patch(`/dishs/dishimage/${params.id}`, formData)

      alert("Item alterado com sucesso!")
      navigate(-1)
   }

   function handleAddIngredients() {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
   }

   function handleRemoveIngredient(deleted) {
      setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

   useEffect(() => {
    async function fetchDish() {
       const response = await api.get(`/dishs/${params.id}`);
       
       const { title, description, category, price, ingredients, image} = response.data;
       setTitle(title);
       setDescription(description);
       setCategory(category);
       setPrice(price);
       setImage(img);
       setIngredients(ingredients.map(ingredient => ingredient.name));
    }

    fetchDish();
    }, [])

   return(
      <Container>
         
         <Header />

         {

         <>
            <button 
            className="button-arrow-left"
            onClick={comeBack}
         >
            <img src={arrowLeft} />
            voltar
         </button>

         <h1>Editar Prato</h1>

         <div className="flex-row">
            <Upload>
                  <span>Imagem do Prato</span>
                  <label 
                     id="file" 
                     htmlFor="img">
                     <FiUpload/>
                     Escolha um arquivo
                  </label>
                  <input className="file"
                     id="img"
                     type="file"
                     onChange={e => setImage(e.target.files[0])}
                  />
            </Upload>

            <div className="input">
               <div className="category"
               >
                  <p>Categoria</p>
                  <select
                     className="category"
                     value={category}
                     onChange={e => setCategory(e.target.value)}
                  >
                     <option>
                        Selecione
                     </option>
                     <option value="main">
                        Prato Principal
                     </option>
                     <option value="dessert">
                        Sobremesa
                     </option>
                     <option value="drink">
                        Bebida
                     </option>
                  </select>
               </div>
            
               <div className="title">
                  <p>Nome</p>
                  <Input
                     type="text" 
                     value={title}
                     placeholder="Ex: Salada Ceasar"
                     onChange={e => setTitle(e.target.value)}
                  />
                  </div>
               </div>
            </div>

         <div className="flex-row2">
            <div>
               <p>Ingredientes</p>

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
                     val ue={newIngredient}
                     onClick={handleAddIngredients}
                  />

               </div>
            </div>

            <div className="price">
               <p>Preço</p>
               <Input
                  type="number" 
                  value={price}
                  onChange={e => setPrice(e.target.value)}              
               />
            </div>
            
         </div>

         <div className="description">
            <p>Descrição</p>
            <textarea
               type="text"
               value={description}
               onChange={e => setDescription(e.target.value)}
            />
         </div>

         <div className="save-order">
            <button
               onClick={handleEditDish}
            >
               Salvar alterações
            </button>
         </div>
         </>
        }        

         <Footer />
         
      </Container>
   )
}
