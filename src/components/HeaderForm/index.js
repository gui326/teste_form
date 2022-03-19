import { Grid } from "@mui/material";
import { Titulo, Imagem } from "./styled";


export default function HeaderForm(){
    return(
        <Grid container>
            <Grid item md={4}>
                <Titulo>
                    Formulário para compra de <span>Pacote de Adesivos</span>
                </Titulo>
            </Grid>
            <Grid item sx={{ textAlign: "right", paddingRight: 3 }} md={8}>
                <Imagem width="140" src="/caixa.png"/>
            </Grid>
        </Grid>
    );
}