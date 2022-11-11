import styled from "styled-components";

export const Container = styled.main`
   display: grid;
   grid-template-areas: 
   "header"
   "main"
   "footer"

   > header {
      content:"header";
   }

   > .flavors {
      display: flex;
      flex-direction: row;
      height: 25.37rem;
      margin-top: 1.94rem;
      
      @media(max-width: 1070px) {
         display: none;
      }

      > img {
         margin-left: 4.37rem;
         position: absolute;
         z-index:1;
      }

      > .box-green {
         display: flex;
         justify-content: end;
         align-items: center;
         padding-right: 2.87rem;

         width: 70rem;
         height: 17.19rem;
         position: relative;
         margin-top: 8.25rem;
         margin-left: 7.75rem;
         background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
         border-radius: 8px;
      }
   }
   > footer {
      content: "footer";
      height: 124px;
   }
`;

export const Content = styled.div`
   // mobile version (mobile-first)
   display: grid; 
   content: "main";

   > h1 {
      display: flex;
      justify-content: center;

      margin-top: 3rem;
      margin-bottom: 2.44rem;

      font-size: 2rem;
      font-weight: 500;
   }
   
   > .dishs {
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

         > button {
            display: none;
         }
      }
   }
      
   // desktop version
   @media (min-width: 1200px) { 
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.69rem;
      flex-wrap: wrap;

      h1 {
         display: flex;
         justify-content: start;
         width: 100%;

         margin-left: 7.69rem;
      }

      > .dishs {
         display: flex;
         flex-direction: column;
         position: relative;
         width: 70.12rem;

         > .carousel {
            display: flex;
            flex-direction: row;
            opacity: 65%;
            width: 70.12rem;

            overflow-x: auto;
         
         > .button-left {
            top: 0;
            bottom: 0;
            left: 0;
            right: auto;
            padding-left: 1.87rem;
            display: block;

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