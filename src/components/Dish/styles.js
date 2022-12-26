import styled from "styled-components";

export const Container = styled.div`
   background-color: #000000A6;
   border: none;

   > .carousel {
      > .dish {
         display: flex;
         flex-direction: column;
         align-items: center;

         width: 18.75rem;
         height: 32rem;

         > button {
            background: none;
            border: none;
            
            > img {
               width: 11rem;
               height: 11rem;
            }
         }

         > div {
            width: 100%;
            display: flex;
            justify-content: end;
            padding-right: 1rem;

               > .favorite {
                  background: none;
                  border: none;

                  margin-top: 1.31rem;

                  > img {
                     width: 1.62rem;
                     height: 1.37rem;
                  }
               }
            }
         
         > h3 {
            margin-top: 1rem;

            font-size: 1.5rem;
            font-weight: 700;
            color: #E1E1E6;
         }

         > p {
            margin-top: 1.12rem;

            font-size: 0.87rem;
            font-weight: 400;
            line-height: 1.4rem;
            text-align: center;
            color: #C4C4CC;

            height: 2.75rem;
         }

         > span {
            margin-top: 1rem;
            
            font-size: 2rem;
            font-weight: 400;
            color: #82F3FF;
         }

         > .add-acc {
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            > button {
               background: none;
               border: none;
            }
            
            > span {
               color: #E1E1E6;
               font-size: 1.75rem;
               
            }

            margin-top: 1.06rem;

            > div {
               display: flex;
               align-items: center;
               width: 5.75rem;
               height: 1.5rem;

               > a {
                  text-decoration: none;
               }

               > button {
                  width: 120px;
                  height: 40px;

                  background-color: red;
                  color: white;
               }
            }
         }
      }
   }
`;