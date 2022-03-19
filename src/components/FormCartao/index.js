import { Grid, TextField } from "@mui/material";
import CardForm from "../../components/CardForm";
import Container from "../Container";
import HeaderForm from "../HeaderForm";

import { Input } from "./styled";


export default function FormCartao(props){
    return(
        <Container>
            <CardForm etapa={props.etapa} setEtapa={props.setEtapa}>
                <HeaderForm titulo={"Qual os dados do "} destaqueTitulo={"seu Cartão"} imagem="/cartaocredito.png"/>

                <p style={{ marginTop: '2em' }}>Digite os dados do cartão</p>

                <Grid container spacing={4}>
                    <Grid item md={8}>
                        <Input fullWidth variant="outlined" label="Número Cartão"/>
                    </Grid>
                </Grid>

                <Grid mt={1} container spacing={1}>
                    <Grid item md={2}>
                        <Input fullWidth variant="outlined" label="Mês" type="number"/>
                    </Grid>
                    <Grid item md={3}>
                        <Input fullWidth variant="outlined" label="Ano" type="number"/>
                    </Grid>
                    <Grid item md={3}>
                        <Input fullWidth variant="outlined" label="CVC" type="number"/>
                    </Grid>
                </Grid>

                <Grid mt={1} mb={4} container spacing={1}>
                    <Grid item md={5}>
                        <Input fullWidth variant="outlined" label="Nome"/>
                    </Grid>
                    <Grid item md={3}>
                        <Input fullWidth variant="outlined" label="CPF"/>
                    </Grid>
                </Grid>
            
            </CardForm>
        </Container>
    )
}