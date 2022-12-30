import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 1.2rem;
    
    .description {
        display: flex;
        flex-direction: row;
        align-items: center;

        > img {
            width: 4.5rem;
            height: 4.5rem;
        }

        > p {
            color: #E1E1E6;
            font-size: 1.25rem;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;

            margin-left: 0.81rem;
        }

        > .price {
            > span {
                margin-left: 0.62rem;

                font-size: 0.75rem;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
            }
        }
    }

    .button {
        margin-left: 5.31rem;
        margin-top: -0.2rem;

        > button {
            border: none;
            background: none;

            color: #AB4D55;
            font-size: 0.75rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
        }
        
        > button:hover {
            color: #750310;
        }
    }

    @media (min-width: 1070px) {
        > .description {

        }
        > .button {
            margin-top: -1.3rem;
        } 
    }
`;