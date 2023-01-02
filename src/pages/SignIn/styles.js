import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   margin-left: 9.6rem;

   > h1 {
      display: flex;
      gap: 1.19rem;
      align-items: center;

      font-size: 2.6rem;
      font-weight: 700;
      
      > img {
         width: 49px;
         height: 47px;
      }
   }

   @media (max-width: 1105px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;

      > h1 {
         margin-top: 1.2rem;  
      }
   }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;

   width: 29.75rem;
   height: 37.5rem;

   margin-top: 5.62rem;
   margin-right: 6.75rem;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

   > .form {
      width: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      > h2 {
         display: flex;
         justify-content: center;

         margin-top: 4rem;

         font-size: 2rem;
         font-weight: 500;
         line-height: 24px;
      }

      > div {
         display: flex;
         flex-direction: column;
         gap: 0.5rem;
      }
   }

   > .button {         
         background: transparent;       
         border: none;

         margin-top: 2rem;

         a {
            font-size: 0.87rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE};

         }
      }
   
   @media (max-width: 1070px) {
      margin-top: 1rem;
      margin-right: 4.9rem;
      margin-left: 4.9rem;
     

      width: 100%;

      h1 {
         border: 1px solid violet;
      }
   }
`;