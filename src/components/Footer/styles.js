import styled from "styled-components";

export const Container = styled.footer`
   background-color: ${({ theme }) => theme.COLORS.BCKG_HEADER_FOOTER};
   
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   
   > .food-explorer {
      display: flex;
      gap: 0.5rem;

      font-size: 1.56rem;
      font-family: "Roboto" sans-serif;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
      opacity: 30%;

      > img {
         width: 1.81rem;
         height: 1.81rem;
      } 
   }

   > .copyright {
      display: flex;
      gap: 0.5rem;
   }

   @media (max-width: 1065px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

      > .food-explorer {
         display: flex;
         gap: 0.69rem;
      }

      > .copyright {
         display: flex;
         gap: 0.3rem;
         align-items: center;

         font-size: 0.90rem;
         color: #FFFAF1;

         margin-top: 1rem;
      }
   }

   @media (min-width: 1065px) {
      padding-top: 2.94rem;
      padding-left: 123px;
      padding-right: 123px;
   }
`;