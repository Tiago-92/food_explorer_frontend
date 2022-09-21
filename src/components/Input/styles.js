import styled from "styled-components";

export const Container = styled.div`
   
   border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

   display: flex;
   align-items: center;

   width:100%;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
   
   > input {
      width: 100%;
      height: 3rem;

      font-size: 1rem;
      padding-left: 0.75rem;
   }
`;