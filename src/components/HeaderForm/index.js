import { Grid } from "@mui/material";
import { Titulo, Imagem } from "./styled";


export default function HeaderForm(props){
    return(
        <Grid container>
            <Grid item md={4} xs={8}>
                <Titulo>
                    {props.titulo}
                    <span>{props.destaqueTitulo}</span>
                </Titulo>
            </Grid>
            <Grid item sx={{ textAlign: "right", paddingRight: 3 }} md={8} xs={4}>
                <Imagem width="140" src={props.imagem}/>
            </Grid>
        </Grid>
    );
}