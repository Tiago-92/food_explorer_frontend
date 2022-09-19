import styled from "styled-components";

export const Container = styled.button`
   width: 21.75rem;
   height: 3rem;
   border: 1px solid transparent;
   border-radius: 5px;

   display: flex;
   justify-content: center;

   margin-top: 2rem;
   
   padding-top: 0.75rem;

   font-size: 0.87rem;
   font-weight: 500;
   color: ${({ theme }) => theme.COLORS.WHITE};

   background-color: ${({ theme }) => theme.COLORS.BCKG_BUTTON};
`;