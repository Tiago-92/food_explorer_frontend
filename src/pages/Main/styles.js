import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-areas: 
   "header"
   "main"
   "footer";
   
   > header {
      content:"header";
   }

   > footer {
      content: "footer";
      height: 124px;
   }
`;

export const Content = styled.main`
   display: grid; 
   content: "main";
   justify-content: center;

   > .dishs { // mobile version (mobile-first)
      display: flex;
      flex-direction: column;
      align-items: center;

      > button {
         background-color: transparent;
         border: none;
      }  

      > h2 {
         margin-bottom: 0.94rem;
      }

      > .carousel {
         display: flex;
         flex-direction: column;
         gap: 0.94rem;

         > img {
            margin-top: 1.25rem;
            width: 18.75rem;
            height: 32rem;
         }
      }
   }
   
   @media (min-width: 1070px) { // desktop version
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.69rem;

      > .dishs {
         display: flex;
         flex-direction: row;

         position: relative;
         width: 70.12rem;
      
         > .carousel {
            display: flex;
            flex-direction: row;
            opacity: 65%;
            
            overflow-x: auto;
         
         > .button-left {
            top: 0;
            bottom: 0;
            left: 0;
            right: auto;
            padding-left: 1.87rem;

            width: 116px;
            position: absolute;
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            transform: matrix(-1, 0, 0, 1, 0, 0);
            border: none;
         }

         > .button-right {
            display: block;
            top: 0;
            bottom: 0;
            left: auto;
            right: 0;

            width: 116px;
            position: absolute;
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            border: none;               
         }
      }
   }

      .carousel::-webkit-scrollbar {
         display: none;
      }

      .carousel {
         -ms-overflow-style: none;
         scrollbar-width: none;
      }
   }
`;