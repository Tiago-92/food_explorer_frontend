import styled from "styled-components";

export const Container = styled.div`

   > button {
      background: transparent;
      border: none;

      color: #E1E1E6;
      font-size: 1.5rem;
      font-weight: 500;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin-top: 1.5rem;
      margin-left: 8.19rem;
   }
`;

export const Content = styled.main` // mobile-first
   display: flex;
   flex-direction: column;
   align-items: center;

   > img {
      width: 15rem;
      height: 15rem;
   }

   > .column {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
         margin-top: 1rem;
         font-size: 1.8rem;
      }

      > p {
         text-align: center;
         margin-top: 0.5rem;
         font-size: 1rem;
         line-height: 20px;
      }

      > .ingredients {
         display: flex;
         gap: 1.5rem;
         margin-top: 1rem;

         > div {
            display: flex;
            flex-direction: column;
            gap: 2px;

            > img {
               width: 40px;
               height: 40px;
            }
         }
      }

      > .value {
         display: flex;
         align-items: center;
         margin-top: 1rem;

         color: #82F3FF;
         font-size: 1.5rem;
         font-weight: 400;

         > .add, .acc {
            background: none;
            border: none;
         }

         > button {
            width: 65px;
            height: 45px;
         }
      }
   }   

   @media (min-width: 1070px) { // desktop version
      flex-direction: row;

      > img {
         width: 24.31rem;
         height: 24.31rem;

         margin-top: 4.81rem;
         margin-left: 7.62rem;
      }

      > .column {
         height: 24.31rem;
         margin-top: 4.81rem;
         margin-left: 2.56rem;
         align-items: start;

         > h1 {
            font-size: 2.5rem;
            font-weight: 500;
         }

         > p {
            text-align: left;
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 2.1rem;
         }

         > .ingredients {
            margin-top: 1.62rem;

            > div {
               > img {
                  width: 3.69rem;
                  height: 3.69rem;
               }
            }
         }

         > .value {
            margin-top: 2.94rem;

            > span {
               font-size: 2rem;
            }

            > button {
               width: 5.75rem;
               height: 3.5rem;
            }
         }
      }
   }
`;