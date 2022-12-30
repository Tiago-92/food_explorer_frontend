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

   > header {
      width: 100%;
      height: 200px;
      border: 1px solid gray;

      display: flex;
      align-items: center;
      justify-content: center;

      > input {
         width: 300px;
         height: 48px;
         color: white;
      }
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

         > .content {
            h2 {
               font-size: 2.5rem;
               font-family: 'Poppins', sans-serif;
               font-weight: 500;
               
            }

            p {
               font-size: 1rem;
               font-family: 'Poppins', sans-serif;
               font-weight: 400;
            }
         }
      }
   }
   
   > footer {
      content: "footer";
      height: 7.75rem;

      margin-top: 6.13rem;
   }

   @media(max-width: 1070px) {
      > footer {
         display: none;
         }
      }
`;

export const Content = styled.div`
   // mobile version (mobile-first)
   display: grid; 
   content: "main";

   > .button {
      width: 100%;
      display: flex;
      justify-content: center;

      margin-top: 1.5rem;

      > button {
         width: 150px;
         height: 40px;

         background: none;
         border: 1px solid #FFFF;

         a {
            text-decoration: none;
            color: #FFFF;
            font-size: 1.2rem;
         }
      }

      > button:hover {
         background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }

   }

   > h1 {
      display: flex;
      justify-content: center;

      margin-top: 1rem;
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

         > .item {
            display: flex;
            flex-direction: column;
            gap: 1.69rem;
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

      > .button {
         margin-top: 2.5rem;
      }
   
      h1 {
         display: flex;
         justify-content: start;
         width: 100%;

         margin-top: 0;

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
            width: 70.12rem;
            overflow-x: auto;

            > .item {
               display: flex;
               flex-direction: row;
               gap: 1.69rem;
            }
         
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