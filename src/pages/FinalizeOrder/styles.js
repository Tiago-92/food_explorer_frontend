import styled from "styled-components";

export const Container = styled.div`
   > .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-left: 85px;

      width: 100%;

      > div {
         > .invisable-box {
            width: 30rem;
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
   }

   > .payment {
      > div {
         width: 100%;
      }
   }
}

   > footer {
      margin-top: 10.5rem;
   }

   @media(min-width: 1070px) {
      > .box {
         width: 100%;
         display: flex;
         flex-direction: row;
         gap: 4.69rem;
         
         margin-left: 0;
         
         margin-top: 2.12rem;

         
         > div {
            display: flex;
            flex-direction: column;

            > h1 {
               width: 200px;
            }

            > .invisable-box {
               width: 25.19rem;

               margin-top: 2rem;
            }
         }
      }
   }
`;