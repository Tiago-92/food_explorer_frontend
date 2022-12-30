import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   gap: 2rem;
   
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
   
   > button {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: normal;

      background: none;
      border: none;
      color: #E1E1E6;
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

      margin-top: 1rem;

      > h1, p, img {
         display: none;
      }

      > button {
         margin-bottom: 1rem;
      }
      
      > .input {
         width: 20rem;
      }

      > .button {
         width: 20rem;
         margin-top: 1rem;
      }
   }

   @media (min-width: 1065px) {
      padding-left: 123px;
      padding-right: 123px;

      > .button {
         width: 13.5rem;
         height: 3.5rem;
         
         > a {
            display: flex;
            gap: 11px;

            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: 'Poppins', sans-serif;
            font-size: 0.86rem;
            font-weight: 500;
            text-decoration: none;

            > svg {
               margin-left: 3px;
               width: 26px;
               height: 22px;
            }
         }
      }
   }
`;