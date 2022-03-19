import {  Grid } from "@mui/material";
import { Area, Botao } from "./styled";

export default function FooterForm(){
    return(
        <Area>
            <Grid container spacing={6}>
                <Grid item md={6}>

                </Grid>
                <Grid item sx={{ alignSelf: 'center', textAlign: 'end' }} md={6}>
                    <Botao>
                        Próximo
                    </Botao>
                </Grid>
            </Grid>
        </Area>
    )
}