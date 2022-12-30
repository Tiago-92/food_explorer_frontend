import styled from "styled-components";

export const Container = styled.div`

   p {
      margin-left: 7.69rem;
      
      font-size: 1.25rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
   }

   > footer {
      margin-top: 10.47rem;
      height: 7.75rem;
   }

   @media (max-width: 1070px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 1.5rem;

      > .title {
         display: none;
      }

      > footer {
         display: none;
      }
   }
`;

export const Content = styled.div`
   display: flex;
   gap: 5rem;

   margin-top: 2.12rem;
   margin-left: 7.69rem;

   > .order {
      width: 27.75rem;
      margin-bottom: 2rem;
      height: 30rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > h1 {
         font-size: 2rem;
         font-weight: 500;
         font-family: 'Poppins' sans-serif;
         color: #E1E1E6;

         margin-bottom: 2.10rem;
      }
   }

   @media (max-width: 1070px) {
      display: flex;
      flex-direction: column;
      margin-left: -10px;

      .order {
         width: 26.25rem;
         padding-left: 2rem;

         > h1 {
            display: block;
            font-size: 1.87rem;
            font-weight: 400;

            color: #E1E1E6;

            margin-bottom: 1.5rem;
         }
      }
   }
`;
