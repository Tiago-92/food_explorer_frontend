import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    h1, span, header, footer, input {
        font-family: 'Roboto', sans-serif;
    }

    h2, h3, p, button {
        font-family: 'Poppins', sans-serif;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;