import styled from "styled-components";

export const Container = styled.div`
   
   border: 1px solid ${({ theme, isTransparent }) => isTransparent ? theme.COLORS.WHITE : "none"};

   display: flex;
   align-items: center;
   width: 100%;

   background-color: ${({ theme, isTransparent }) => isTransparent ? "transparent" : theme.COLORS.BACKGROUND_700};

   > svg {
      color: #C4C4CC;
      margin-left: 1rem;
   }

   border-radius: 5px;

   > input {
      width: 100%;
      height: 3rem;
      border: none;

      background-color: transparent;

      font-size: 1rem;

      margin-left: 1rem;

      color: #7C7C8A;
   }
`;