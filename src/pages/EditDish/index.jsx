import { Container } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg"

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NewIngredients } from "../../components/NewIngredients";
import { Footer } from "../../components/Footer";

export function EditDish() {
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
               <Button title="Selecionar imagem" />
            </div>
            
            <div className="input">
               <span>Nome</span>
               <Input placeholder="Ex: Salada Ceasar"/>
            </div>
         </div>

         <div className="flex-row2">
            <div>
               <span>Ingredientes</span>
               <div className="ingredients">
                  <NewIngredients
                     placeholder="pão naan" 
                  />
               </div>
            </div>

            <div className="price">
               <span>Preço</span>
               <Input placeholder="R$ 00,00"/>
            </div>
            
         </div>

         <div className="description">
            <span>Descrição</span>
            <textarea
               placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
            />  
         </div>

         <div className="save-order">
           <Button title="Adicionar Pedido" /> 
         </div>

         <Footer />  
      </Container>
   )
}