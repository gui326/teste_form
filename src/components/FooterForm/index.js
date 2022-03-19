import {  Grid } from "@mui/material";
import { Area, Botao, ArrowBack } from "./styled";

export default function FooterForm(props){
    return(
        <Area>
            <Grid container spacing={6}>
                <Grid alignSelf="center" item md={6}>
                    {props.etapa > 1 &&
                        <ArrowBack 
                        onClick={() => props.setEtapa(props.etapa - 1)}
                        width="40" src="/arrowBack.svg" />
                    }
                </Grid>
                <Grid item sx={{ alignSelf: 'center', textAlign: 'end' }} md={6}>
                    <Botao
                    onClick={() => props.setEtapa(props.etapa + 1)}
                    >
                        Próximo
                    </Botao>
                </Grid>
            </Grid>
        </Area>
    )
}