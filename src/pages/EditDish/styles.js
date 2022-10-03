import styled from "styled-components";

export const Container = styled.div`

   @media(max-width: 1070px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
         font-size: 1rem;
      }

      .flex-row {
         display: flex;
         flex-direction: column;
         margin: 0;
      }
   }

   > h1 {
      margin-top: 1.5rem;
      margin-left: 7.69rem;
   }

   > .button-arrow-left {
      background: none;
      border: none;

      display: flex;
      gap: 0.5rem;
      align-items: center;

      margin-top: 2rem;
      margin-left: 8.25rem;

      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};

      > img {
         width: 12px;
         height: 22px;
      }
   }

   > .flex-row {
      display: flex;
      gap: 1rem;

      margin-left: 7.69rem;

      > div {
         margin-top: 2rem;
         
         > span {
            font-size: 1rem;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
            color: ${({ theme }) => theme.COLORS.GRAY_800}; 
         }

         > button {
            margin-top: 0.5rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border: 1px solid white;
            width: 14.31rem; 
         }
      }
      
      > .input {
         display: flex;
         flex-direction: column;
         gap: 0.5rem;

         width: 100%;
         margin-right: 7.81rem;
      }
   }

   > .description {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      margin-top: 2.75rem;
      margin-left: 7.69rem;

      > textarea {
         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

         width: 70rem;
         height: 10.75rem;

         font-size: 1rem;
         font-weight: 400;
         font-family: 'Roboto', sans-serif;

         padding-top: 0.5rem;
         padding-left: 0.5rem;

         border-radius: 8px;
      }
   }

   > .flex-row2 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;

      margin-top: 3.12rem;
      margin-left: 7.69rem;
      margin-right: 7.69rem;

      > div {
         > .ingredients {
            display: flex;
         
            width: 53.69rem;
            height: 3rem;
            
            margin-top: 0.7rem;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
            padding-bottom: 0.5rem;
         
            border: 1px solid white;
         }
      }

      > .price {
         display: flex;
         flex-direction: column;
         gap: 0.5rem;
      }
   }

   > .save-order {
      display: flex;
      justify-content: end;

      margin-top: 1.25rem;
      margin-right: 7.81rem;

      > button {
         width: 23.44rem;
         height: 3rem;

         background: rgba(255, 255, 255, 0.1);
         border: 1px solid #ffff;
      }
   }

   > footer {
      margin-top: 12.5rem;
   }
`;