import styled from "styled-components";

export const Container = styled.div`
   
   border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

   display: flex;
   align-items: center;
   padding-left: 16px;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   border-radius: 5px;

   > input {
      width: 100%;
      height: 3rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border: none;

      font-size: 1rem;
      padding-left: 0.75rem;
   }
`;