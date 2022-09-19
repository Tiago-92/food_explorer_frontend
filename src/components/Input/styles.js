import styled from "styled-components";

export const Container = styled.div`
   
   border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

   > input {
      width: 21.75rem;
      height: 3rem;

      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.GRAY};
      padding-left: 0.75rem;
   }
`;