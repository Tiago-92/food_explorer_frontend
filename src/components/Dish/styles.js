import styled from "styled-components";

export const Container = styled.div`
   > .carousel {
      > .dish {
         display: flex;
         flex-direction: column;
         align-items: center;

         width: 18.75rem;
         height: 32rem;

         background-color: #000000A6;

         > img {
            width: 11rem;
            height: 11rem;
            
            margin-top: 3.5rem;
         }

         > h3 {
            margin-top: 1rem;

            font-size: 1.5rem;
            font-weight: 700;
         }

         > p {
            margin-top: 1.12rem;

            font-size: 0.87rem;
            font-weight: 400;
            line-height: 1.4rem;
            text-align: center;
         }

         > span {
            margin-top: 1rem;
            
            font-size: 2rem;
            font-weight: 400;
            color: #82F3FF;
         }

         > .add-acc {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            margin-top: 1.06rem;

            > button {
               width: 5.75rem;
               height: 3rem;
            }
         }
      }
   }
`;