import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 113px;
    height: 56px;
   
    margin-left: 16px;
    
    border-radius: 10px;
    
        > button {
            margin-left: 90px;
            margin-bottom: 10px; 
            position: absolute;
            display: flex;
            
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

            margin-bottom: 0.5rem;
            
            height: 35px;
            width: 7.37rem;

            padding-left: 10px;
            
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