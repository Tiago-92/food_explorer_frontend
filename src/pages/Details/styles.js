import styled from "styled-components";

export const Container = styled.div`

   > button {
      background: transparent;
      border: none;

      color: #E1E1E6;
      font-size: 1.5rem;
      font-weight: 500;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin-top: 1.5rem;
      margin-left: 8.19rem;
   }

   > footer {
      margin-top: 9.72rem;
      height: 4.81rem;

      padding-top: 1.7rem;
      padding-left: 7.69rem;
   }

   @media(max-width: 1070px) {
      > footer {
         display: none;
      }
   }
`;

export const Content = styled.main` // mobile-first
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 2rem;
   
   > img {
      width: 15rem;
      height: 15rem;
   }

   > .column {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
         margin-top: 1rem;
         font-size: 1.8rem;
         font-weight: 500;
         font-family: 'Poppins', sans-serif;
      }

      > p {
         text-align: center;
         margin-top: 0.5rem;
         font-size: 1rem;
         font-weight: 400;
         line-height: 20px;
         font-family: 'Poppins', sans-serif;
      }

      > .ingredients {
         
         > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;

            > span {
               font-size: 1.12rem;
            }
         }

         display: flex;
         gap: 1.5rem;
         margin-top: 1rem;

         img {
            width: 40px;
            height: 40px;
         }
      }

      > .edit {
         margin-top: 2rem;
         display: flex;
         align-items: center;
         gap: 1rem;

         > .button-white {
            background: none;
            border: 1px solid #FFFFFF;

            color: #FFFFFF;

            width: 9.37rem;
            height: 2.81rem;
         }

         > .button-red {
            background: none;
            border: 1px solid #92000E;

            color: #92000E;

            width: 9.37rem;
            height: 2.81rem;
         }

         > .button-white:hover, .button-red:hover {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
         }
      }

      > .value {
         display: flex;
         align-items: center;
         margin-top: 2rem;
         gap: 1.5rem;
         justify-content: center;

         color: #82F3FF;
         font-size: 1.5rem;
         font-weight: 400;

         margin-bottom: 2.5rem;

         > .buttons {
            display: flex;
            align-items: center;
            gap: 17px;
         

            > .add, .acc {
               background: none;
               border: none;
            }

            > .button-order {
               width: 5rem;
               height: 3rem;
            }
         }
      }
   }

   @media (min-width: 1070px) { // desktop version
      flex-direction: row;

      > img {
         width: 24.31rem;
         height: 24.31rem;

         margin-top: 4.81rem;
         margin-left: 7.62rem;
      }

      > .column {
         height: 24.31rem;
         margin-top: 4.81rem;
         margin-left: 2.56rem;
         align-items: start;

         > h1 {
            font-size: 2.5rem;
            font-weight: 500;
         }

         > p {
            text-align: left;
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 2.1rem;
         }

         > .ingredients {
            margin-top: 1.62rem;

            > div {
               > img {
                  width: 3.69rem;
                  height: 3.69rem;
               }
            }
         }

         > .edit {
            display: flex;
            gap: 2rem;

            margin-top: 2rem;
            > .button-white {
               border: none;
               background: none;
               border: 1px solid gray;

               color: #FFFFFF;
               font-size: 1.5rem;

               height: 2.5rem;
               width: 7.5rem;
            }

            > .button-red {
               border: 1px solid red;
               background: none;

               color: #92000E;
               font-size: 1.5rem;

               width: 10.62rem;
               height: 2.5rem;
            }

         }

         > .value {
            display: flex;
            width: 350px;
            justify-content: space-between;
            margin-top: 2.94rem;

            > .price {
               > span {
                  font-size: rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
               }
            }

            > .buttons {
               display: flex;
               align-items: center;

               > .button-order {
                  width: 5.75rem;
               }
            }

         }
      }
   }
`;