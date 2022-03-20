import styled from "styled-components";

export const Titulo = styled.h1` 
    font-size: 26px;
    margin-top: 1.3em;
    z-index: 2;
    position: relative;

    span{
        font-size: 28px;
        color: #2fdf84;
    }
`;

export const Imagem = styled.img` 
    position: relative;
    z-index: 1;
    right: 1.5em;
    top: 0;

    @media (max-width: 468px){
        padding-top: 10px;
    }
`;