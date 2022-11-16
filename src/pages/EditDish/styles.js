import styled from "styled-components";

export const Container = styled.div`

   @media(max-width: 1070px) { // versão mobile
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100vw;

      > h1 {
         font-size: 2rem;

         margin-top: 1rem;
      }

      > button {
         background: none;
         border: none;

         color: #E1E1E6;
         font-size: 1.5rem;

         display: flex;
         align-items: center;
         width: 150px;
         justify-content: center;
         gap: 0.62rem;
      }

      > .flex-row {
         display: flex;
         width: 20rem;
         flex-direction: column;
         justify-content: center;

         margin-top: 1.5rem;

         > div {
            display: flex;
            flex-direction: column;
            gap: 10px;

            > span {
               display: none;
            }

            > button {
               width: 20rem;
            }
         }

         > .input {
            margin-top: 0.94rem;
         }
 
      }

      > .flex-row2 {
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 100%;

         > div {
            span {
               display: none;
            }

            > .ingredients {
               width: 20rem;
               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               justify-content: center;
               margin-right: 20px;
            }
         }

         > .price {
            width: 20rem;
            
         }
      }

      > .description {

         > span {
            display: none;
         }

         > textarea {
            width: 20rem;
            height: 8rem;

            margin-top: 1.5rem;

            background: transparent;

            color: #7C7C8A;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            padding: 0.8rem;
         }
      }

      > .save-order {

         > button {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border: 1px solid #FFFFFF;
            border-radius: 3px;

            margin-top: 0.3rem;

            color: white;
            font-size: 0.87rem;

            width: 20rem;
            height: 30px;


         }
      }
   }

   @media(min-width: 1070px) { // versão web      
      border: 1px solid gray;

      > button {
         background: none;
         border: none;
         
         color: #E1E1E6;
         font-size: 1.5rem;
         font-family: 'Poppins', sans-serif;
         font-weight: 500;

         display: flex;
         align-items: center;
         gap: 11px;

         margin-top: 2rem;
         margin-left: 7.69rem;

      }

      > h1 {
         font-size: 2rem;
         font-family: 'Poppins', sans-serif;
         font-weight: 500;

         margin-top: 1.5rem;
         margin-left: 7.69rem;
      }

      > .flex-row {
         display: flex;
         flex-direction: row;
         gap: 2rem;

         margin-left: 7.69rem;

         > div {
            
            > .button {
               width: 14.31rem;
               height: 3rem;
            }
         }

         > .input {
            width: 53.69rem;
         }
      }

      > .flex-row2 {
         display: flex;
         justify-content: space-between;

         margin-top: 2rem;
         margin-left: 7.69rem;
         margin-right: 7.81rem;
         

         > div {
            > .ingredients {
               display: flex;
               flex-wrap: wrap;
               border: 1px solid #FFFFFF;
               width: 52.31rem;
               height: 3rem;

            }
         }   
      }
   }
`;