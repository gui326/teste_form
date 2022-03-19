import styled from "styled-components";

export const Card = styled.div` 
    background: ${props => props.ativo ? "#2fdf84" : "white"};
    border: 1px solid lightgrey;
    padding: 1.2em;
    border-radius: 12px;
    box-shadow: 2px 2px 2px 1px lightgrey;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all .3s ease-out;
    cursor: pointer;

    h6{
        margin: 0;
        font-size: 14px;
        color: ${props => props.ativo ? "#282828" : "grey"};
    }

    :active{
        outline: 1px solid lightgrey;
    }
`;