import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   display: flex;
   align-items: center;

        > button {
            position: absolute;
            display: flex;
            margin-left: ${({ isNew }) => isNew ? "50px" : "80px"};
            border: none;
            background: none;

            > svg {
                width: 22px;
                height: 24px;
            }
        }

        .button-delete {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        .button-add {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > input {
            position: absolute;
            display: flex;
            align-items: center;
            
            height: 35px;
            width: 7.37rem;

            padding-left: 16px;
            
            background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
            color: ${({ theme }) => theme.COLORS.WHITE};

            border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE}` : "none"};
            
            font-size: 16px;

            border-radius: 10px;

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
`;