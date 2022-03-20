import styled from "styled-components";

export const Area = styled.div` 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Card = styled.div` 
    overflow: hidden;
    border-radius: 12px;
    margin: 0 3em;

    img{
        width: 100%;
        height: 8em;
        transition: all .3s ease-out;
    }

    img:hover{
        transform: scale(1.2);
    }
`;

export const AreaValor = styled.div` 
    display: flex;
    justify-content: space-between;
`;

export const Quantidade = styled.input` 
    height: 30px;
    width: 50%;
    border: 1px solid lightgrey;
    border-radius: 50px;
    text-align: center;
    font-size: 16px;
`;

export const ButtonQuantidade = styled.div` 
    width: 25%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 12px;
    cursor: pointer;
    transition: all .1s ease;

    :active{
        background: lightgrey;
    }

    :hover{
        outline: 1px solid lightgrey;
    }
`;