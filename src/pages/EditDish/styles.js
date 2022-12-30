import styled from "styled-components";

export const Container = styled.div`

   @media(max-width: 1070px) { // versão mobile
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100vw;

      > header {
         width: 325px;
         display: flex;
         flex-direction: column;
         align-items: center;
   
         > h1 {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 25px;

            margin-top: 1rem;
            margin-bottom: 1rem;

            > img {
               width: 30px;
               height: 30px;
            }
         }

         > .button {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
         }
      }

      > h1 {
         display: flex;
         font-size: 2rem;
         margin-top: 1rem;
      }

      .not-authorized  {
         width: 21.87rem;
         height: 70vh;

         justify-content: center;
         align-items: center;
         display: flex;

         > h1 {
            text-align: center;
            font-size: 22px;
         }
      }

      > button {
         display: none;
      }

      > .flex-row {
         display: flex;
         width: 20rem;
         flex-direction: column;
         justify-content: center;

         margin-top: 1rem;

         > .input {
            width: 100%;
            display: flex;
            flex-direction: column;

            > .category {
               margin-top: 1rem;
               display: flex;
               flex-direction: column;
               align-items: center;
               gap: 0.5rem;

               > p {
                  font-size: 1rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
                  color: #C4C4CC;                  
               }
            
               > select {
                  width: 100%;
                  height: 3rem;

                  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
                  color: #FFFFFF;
                  font-size: 1rem;

                  border: 1px solid white;
                  border-radius: 5px;

               }
            }

            > .title {
               margin-top: 1rem;
               display: flex;
               flex-direction: column;
               gap: 0.5rem;
               align-items: center;

               > p {
                  font-size: 1rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
                  color: #C4C4CC;                  
               }
            }
         }
 
      }

      > .flex-row2 {
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 100%;

         > div {
            p {
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
         margin-top: 1rem;
         display: flex;
         flex-direction: column;
         align-items: center;

         > p {
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: #C4C4CC; 
         }

         > textarea {
            width: 20rem;
            height: 8rem;

            margin-top: 0.5rem;

            background: transparent;

            color: #7C7C8A;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            padding: 0.8rem;
         }
      }

      > .save-order {
         margin-top: 1rem;
         margin-bottom: 1rem;
                  
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

      > footer {
         display: none;
      }
   }

   @media(min-width: 1070px) { // versão web      

      > header {
         display: flex;
         width: 100%;
         justify-content: space-between;
         align-items: center;
       
         padding-left: 7.69rem;
         padding-right: 7.69rem;
        
         height: 6.5rem;

         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

         > h1 {
            display: flex;
            gap: 11px;

            font-size: 1.57rem;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;

            > img {
               width: 1.81rem;
               height: 1.81rem;
            }
         }

         > .button {
            display: flex;
            align-items: center;
            gap: 1rem;

            > .order {
               padding: 0;
               display: flex;
               align-items: center;
               width: 13.37rem;
               height: 3.5rem;
            }
         }
      }

      > .button-arrow-left {
         display: flex;
         align-items: center;
         gap: 0.5rem;
         background: none;
         border: none;

         color: #E1E1E6;
         font-size: 1.5rem;
         font-weight: 500;

         margin-left: 8.25rem;
         margin-top: 2rem;
      }

      > .not-authorized {
         width: 100%;
         height: 73vh;

         > h1 {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;

            font-size: 1.87rem;
         }
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

         margin-top: 2rem;
         margin-left: 7.69rem;

         > .input {
            display: flex;
            flex-direction: row;
            gap: 0.3rem;

            width: 53.69rem;
            height: 3rem;

            > .category {
               display: flex;
               flex-direction: column;
               gap: 0.5rem;
               width: 11.25rem;
               height: 100vh;

               margin-right: 20px;

               > p {
                  font-size: 1rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
                  color: #C4C4CC;
               }

               > select {
                  height: 3rem;

                  border: 1px solid white;
                  border-radius: 5px; 
                  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
                  
                  padding: 0.5rem;
                  
                  color: #FFFFFF;
                  font-size: 1rem;

                  > option {
                     font-size: 1rem;
                  }
               }
            }

            > .title {
               width: 100%;
               display: flex;
               flex-direction: column;
               gap: 0.3rem;

               > p {
                  font-size: 1rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
                  color: #C4C4CC;
               }
            }
         }
      }

      > .flex-row2 {
         display: flex;
         justify-content: space-between;
         margin-top: 2rem;
         margin-left: 7.69rem;
         margin-right: 7.81rem;
         

         > div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            > p {
               font-size: 1rem;
               font-family: 'Roboto', sans-serif;
               font-weight: 400;
               color: #C4C4CC;
            }

            > .default {
               display: flex;
               flex-direction: row;
               gap: 2rem;
               gap: 1rem;

               > div {
                 display: flex;
                 justify-content: center;
                 align-items: center;
                  border: 1px solid #FFFFFF;
                  width: 75px;
                  height: 40px;
               }
            }

            > .ingredients {
               display: flex;
               flex-wrap: wrap;
               border: 1px solid #FFFFFF;
               width: 52.31rem;
               height: 3rem;

            }
         }   
      }

      > .description {
         width: 70rem;
         display: flex;
         flex-direction: column;
         gap: 0.5rem;

         margin-top: 2rem;
         margin-left: 7.69rem;

         > p {
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: #C4C4CC;
         }

         > textarea {
            width: 100%;
            height: 10.75rem;

            margin-top: 0.3rem;

            background: none;
            border: 1px solid #FFFFFF;
            border-radius: 5px;

            font-size: 'Roboto', sans-serif;
            color: #7C7C8A;

            font-size: 1rem;
            font-weight: 400;
            padding: 0.87rem;
         }
      }

      > .save-order {
         width: 70rem;
         display: flex;
         justify-content: end;

         margin-top: 1.5rem;
         margin-left: 7.69rem;

         > button {
            background: #FFFFFF1A;
            border: 1px solid #FFFFFF;
            border-radius: 5px;

            width: 22.31rem;
            height: 3rem;

            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 0.87rem;

            margin-bottom: 7.68rem;
         }
      }

      > footer {
         height: 5.75rem;
         padding-top: 1.7rem;
      }
   }
`;

export const Upload = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   > span {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: #C4C4CC;
   }
   
   label {
      width: 14.31rem;
      height: 3rem;

      border: 1px solid #FFFFFF;
      border-radius: 5px;

      font-family: 'Popins', sans-serif;
      font-size: 0.87rem;
      font-weight: 500;
      color: #FFFFFF;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      cursor: pointer;

      > svg {
         width: 24px;
         height: 24px;
      }
   }

   label:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   }

   > input[type="file"] {
      display: none;
   }

   @media(max-width: 1070px) {
      align-items: center;

      > label {
         width: 100%;
      }
   }    
`;