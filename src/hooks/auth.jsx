import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
   const [data, setData] = useState({});

   async function SignIn({ email, password }) {
      // tenta fazer a autentitacação, se der errado vai mostrar uma mensagem de erro.
      try {

         const response = await api.post("/sessions", { email, password});
         const { user, token } = response.data

         // guardar user e token  no localStorage do navegador 
         localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
         localStorage.setItem("@foodexplorer:token", token);

         // inserir o token de autenticação em todas as requisições
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
         setData({ user, token })

      } catch (error){
         if(error.response) {
            alert(error.response.data.message)
        } else{
            alert("Não foi possível entrar.")
        }
      }

   }

   async function updateImageDish({ dishFile }) {

      try {

         if (dishFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("dishimage", dishFile);

            const response = await api.patch("/dishimage", fileUploadForm);
            dish.img = response.data.img;
         
         }
      } catch {
         if (error.response) {
            alert(error.response.data.message)
        } else {
            alert("Não foi possível atualizar a imagem do prato.")
        }
      }
   }


   // função para sair da aplicação
   function SignOut() {
      localStorage.removeItem("@foodexplorer:user");
      localStorage.removeItem("@foodexplorer:token");

      setData({});
   }
   
   useEffect(() => { // carrega user e token armazenados no localStorage quando a página for renderizada 
      const user = localStorage.getItem("@foodexplorer:user");
      const token = localStorage.getItem("@foodexplorer:token");

      if(user && token) {
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
         
         setData({
            token,
            user: JSON.parse(user)
         })
      }
   }, [])

   return(
      <AuthContext.Provider value={{ 
          SignIn,
          SignOut,
          updateImageDish,
          user: data.user 
          }}
      >
          {children}
      </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }


