import styled from "styled-components";

export const Container = styled.div`
   > h1 {
      display: flex;
      justify-content: center;
   }

   > .payment {
      width: 21.87rem;
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
            background: rgba(255, 255, 255, 0.05);
         }

         > .button-transparent {
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

            background: transparent;
         }

         > .buttonCredit {
            background: rgba(255, 255, 255, 0.05);
         }
      }

      > .pix {
         display: flex;
         flex-direction: column;
         align-items: center;

         padding-top: 3.56rem;
      }

      > .await, 
         .accept, 
         .delivered {
            
         display: flex;
         flex-direction: column;
        
         align-items: center;
         padding-top: 4.44rem;
         
         > img {
            width: 6.5rem;
            height: 6.5rem;
         }

         > span {
            margin-top: 3.06rem;

            font-size: 1.5rem;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
            color: ${({ theme }) => theme.COLORS.GRAY_800};
         }
      }

      > .card {
         display: flex;
         flex-direction: column;

         margin-top: 3.69rem;
      
         

         > .number {
            display: flex;
            flex-direction: column;

            > span {
               font-size: 1rem;
               font-weight: 400;
               font-family: 'Roboto', sans-serif;
               color: ${({ theme }) => theme.COLORS.GRAY_800};
            }

            input {
               width: 21.75rem;
               height: 2.81rem;
               border: 1px solid #FFFFFF;
               border-radius: 5px;

               margin-top: 0.5rem;

               padding: 0.87rem;

               color: ${({ theme }) => theme.COLORS.GRAY_800};
            }
         }

         > .security {
            display: flex;
            flex-direction: row;
            gap: 1.06rem;

            margin-top: 2.31rem;

            > div {
               display: flex;
               flex-direction: column;

               > span {
                  font-size: 1rem;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: ${({ theme }) => theme.COLORS.GRAY_800};
               }

               > input {
                  width: 10.37rem;
                  height: 2.81rem;
                  border: 1px solid #FFFFFF;
                  border-radius: 5px;

                  margin-top: 0.5rem;

                  padding: 0.87rem;

                  color: ${({ theme }) => theme.COLORS.GRAY_800};
               }
            }
         }

         > .button {
            width: 21.75rem;
            height: 3.5rem;

            margin-top: 2.31rem;
         }
      }
   }

   @media(min-width: 1070px) {
      > h1 {
         justify-content: start;
      }

      > .payment {
         width: 33.12rem;
         height: 28.87rem;
         border: 1px solid gray;

         margin-top: 2rem;

         
         > .card {
            display: flex;
            flex-direction: column;

            margin-top: 3.69rem;
            margin-left: 5.69rem;
         }
         
      } 
   }
`;
  