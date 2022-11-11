import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
   width: 100%;
   height: 3rem;
   border-radius: 5px;

   display: flex;
   justify-content: center;
      
   padding-top: 0.75rem;

   font-family: 'Poppins', sans-serif;
   font-weight: 500;
   font-size: 0.87rem;
   font-weight: 500;
   color: ${({ theme }) => theme.COLORS.WHITE};
   text-decoration: none;

   background-color: ${({ theme }) => theme.COLORS.BCKG_BUTTON};
`;