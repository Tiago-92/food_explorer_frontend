import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   
   height: 6.5rem;

   > img {
      width: 1.37rem;
      height: 1.37rem;
   }

   background-color: ${({ theme }) => theme.COLORS.BCKG_HEADER_FOOTER};

   > h1 {
      display: flex;
      align-items: center;
      gap: 0.69rem;

      font-size: 1.56rem;
      font-weight: 700;


      > img {
         width: 1.81rem;
         height: 1.81rem;
      }
   }
   
   > p {
      font-weight: 400;
   }

   > button {
      width: 13.5rem;
   }

   > .input {
      width: 25.62rem;
   }

   @media (max-width: 1065px) {
      display: flex;
      justify-content: center;
      flex-direction: column;

      width: 100%;
      height: 170px;

      background: none;

      > h1, p, img {
         display: none;
      }
      
      > .input {
         width: 20rem;
      }

      > button {
         width: 20rem;
         margin-top: 1rem;
      }
   }

   @media (min-width: 1065px) {
      padding-left: 123px;
      padding-right: 123px;
   }
`;