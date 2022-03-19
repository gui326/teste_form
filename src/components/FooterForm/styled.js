import { Button } from "@mui/material";
import styled from "styled-components";

export const Area = styled.div` 
    height: 5em;
    padding: 0 4%;
    background: #2FDF84;
    box-sizing: border-box;
    display: flex;
    border-radius: 0 0 12px 12px;
`;

export const Botao = styled(Button)` 
    background-color: white!important;
    border-radius: 50px!important;
    color: black!important;
    font-weight: 700!important;
    width: 50%;
`;

export const ArrowBack = styled.img` 
    transition: all .3s ease-out;
    border-radius: 50px;
    cursor: pointer;

    :hover{
        background: #c6c6c670;
    }

    :active{
        outline: 1px solid lightgrey;
        background: #c6c6c670;
    }
`;