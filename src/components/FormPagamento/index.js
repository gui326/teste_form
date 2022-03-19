import { Grid } from "@mui/material";
import CardForm from "../../components/CardForm";
import Container from "../Container";
import HeaderForm from "../HeaderForm";

import { Card } from "./styled";


export default function FormPagamento(props){
    return(
        <Container>
            <CardForm etapa={props.etapa} setEtapa={props.setEtapa}>
                <HeaderForm titulo={"Hora do "} destaqueTitulo={"Pagamento"} imagem="/money.png"/>

                <p style={{ marginTop: '2em' }}>Qual forma deseja pagar?</p>

                <Grid mb={5} container spacing={1}>
                    <Grid item md={3}>
                        <Card 
                        ativo={props.pagamento == 1 && true}
                        onClick={() => props.setPagamento(1)}
                        >
                            <img width="35" src="/cartao.png" />
                            <h6>Cartão de Crédito</h6>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card 
                        ativo={props.pagamento == 2 && true}
                        onClick={() => props.setPagamento(2)}
                        >
                            <img width="35" src="/cartao.png" />
                            <h6>Cartão de Débito</h6>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card ativo={false}>
                            <img width="35" src="/boleto.png" />
                            <h6>Boleto <small style={{ color: '#e25656' }}>(Desabilitado)</small></h6>
                        </Card>
                    </Grid>
                </Grid>
            
            </CardForm>
        </Container>
    )
}