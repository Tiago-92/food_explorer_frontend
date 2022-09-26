import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

   > table {
     width: 70.75rem;
     margin-top: 2.12rem;
     margin-left: 7.69rem;
     
   }

   > table, td, th {
      border-collapse: collapse;
      border: 2px solid #192227;
   }

   > table thead th {
      font-family: 'Roboto', sans-serif;
      font-size: 0.86rem;
      font-weight: 700;
      text-align: start;
      color: #E1E1E6;

      height: 4rem;
      padding-left: 1.5rem;

   }

   > table tbody td {
      height: 3.37rem;

      font-size: 14px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: #C4C4CC;
      padding-left: 1.5rem;

      li::marker{color:red}
   }

   > footer {
      margin-top: 21.81rem;
      align-items: center;
   }

   @media(max-width: 1070px) {
      > table tbody tr td {
        display: block;    
      }

      > table {
         width: 100vw;
         margin: 0;
      }
      
      > table thead {
         display: none;
      }

      > table, td, th {
         border: 1px solid #192227;
      }

      > table tbody td {
         height: 2.5rem;
      }

      > table tbody li {
         color: red;
      }

      > table tbody td {
         padding-top: 0.6rem;
         padding-left: 0;
         text-align: center;
         margin-left: 3px;
         margin-right: 3px;
      }

      > footer {
         margin: 0
      }
   }

   > h1 {
      margin-top: 2.12rem;
      margin-left: 7.69rem;
   }
`;