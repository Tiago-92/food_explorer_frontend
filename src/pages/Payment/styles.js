import styled from "styled-components";

export const Container = styled.div`
   > div {
      > .invisable-box {
      width: 100vw;
      height: 28rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;

      > .dish {
         display: flex;
         flex-wrap: wrap;

         padding-left: 0.5rem;

         > img {
            width: 4.5rem;
            height: 4.5rem;
         }

         > div {
            margin-left: 0.5rem;
            > p {
               display: flex;
               align-items: center;
               gap: 0.5rem;

               font-size: 1.20rem;
               font-family: 'Poppins', sans-serif;
               font-weight: 500;

               > span {
                  font-size: 0.75rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
                  color: #C4C4CC;
               }
            }

            > button {
               background: none;
               border: none;
               color: #AB4D55;
            }
         }
      }
   }

   > .flex-container {
      margin-left: 160px;
      margin-top: -50px;

      > .payment {
         width: 33.12rem;
         height: 28.87rem;
         border: 1px solid gray;

         margin-top: 2rem;

         > .pix-our-credit {
            display: flex;

            > .buttonPix, 
               .buttonCredit {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 14px;

                  width: 16.56rem;
                  height: 5.06rem;

                  border: 1px solid gray;

                  color: #FFFF;
                  font-size: 1rem;
                  font-weight: 400;
               }

               > .buttonPix {
                  background: none;
               }

               > .buttonCredit {
                  background: rgba(255, 255, 255, 0.05);
               }
            }
               
            > .date-card {
               display: flex;
               flex-direction: column;
               align-items: center;

               
               > .number {
                  display: flex;
                  flex-direction: column;
                  margin-top: 3.69rem;

                  > span {
                     font-size: 1rem;
                     font-weight: 400;
                     font-family: 'Roboto', sans-serif;
                     color: #C4C4CC;
                  }

                  > input {
                     width: 21.75rem;
                     height: 3rem;
                     border: 1px solid #FFFFFF;
                     margin-top: 0.3rem;
                     padding-left: 1rem;
                  }
               }

               > .security {
                  margin-top: 2.5rem;
                  display: flex;
                  gap: 17px;

                  > div {
                     display: flex;
                     flex-direction: column;

                     > span {
                        font-size: 1rem;
                        font-weight: 400;
                        font-family: 'Roboto', sans-serif;
                        color: #C4C4CC;
                     }

                     > input {
                        width: 10.37rem;
                        height: 3rem;
                        border: 1px solid #FFFFFF;
                        margin-top: 0.3rem;
                        padding-left: 1rem;                        
                     }
                  }
               }

               > button {
                  width: 21.75rem;
                  height: 3.5rem;
                  
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 1rem;

                  background-color: #92000E;
                  border: 1px solid #92000E;
                  border-radius: 5px;

                  font-family: 'Poppins' sans-serif;
                  font-size: 0.87rem;
                  font-weight: 400;
                  color: #FFFFFF;

                  margin-top: 3.12rem;

               }

            }
         }         
      }
   }
   
   > footer {
      margin-top: 10.5rem;
   }

   @media(min-width: 1070px) {

      > h1 {
         width: 200px;
         margin-top: 2.12rem;
         margin-left: 7.69rem;
      }
      
      > div {
         display: flex;
         flex-direction: row;

         > .invisable-box {
            width: 25.19rem;

            margin-top: 2rem;
            margin-left: 7.69rem;
         }
      }
   }

   @media(max-width: 1070px) {    
      display: flex;
      flex-direction: column;   

      > div {

         > .invisable-box {
            width: 100vw;
            margin: 0
         }
                  
         > .flex-container {
            margin: 0;

            > .payment {
               width: 100vw;

               > .pix-our-credit {
                 > .buttonPix, .buttonCredit {
                  width: 100%;
                 }
               }
            }
         }
      }
   }
`;