import { Grid } from "@mui/material";
import CardForm from "../../components/CardForm";
import Container from "../Container";
import HeaderForm from "../HeaderForm";

import { Item } from "./styled";


export default function FormConclusao(props){
    const pagamentoTexto = () => {
        switch(props.pagamento){
            case 1:
                return "Cartão de Crédito";
            case 2:
                return "Cartão de Débito";
        }
    }

    return(
        <Container>
            <CardForm etapa={props.etapa} setEtapa={props.setEtapa}>
                <HeaderForm titulo={"Confirmar "} destaqueTitulo={"o Pedido"} imagem="/cesta.png"/>

                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <h4 style={{ marginTop: 2, marginBottom: 5 }}>Itens</h4>
                        <div style={{ paddingLeft: '1em' }}>
                            {props.adesivo.react > 0 &&
                                <Item>{props.adesivo.react} - Adesivo React</Item>
                            }
                            {props.adesivo.vue > 0 &&
                                <Item>{props.adesivo.vue} - Adesivo Vue</Item>
                            }
                            {props.adesivo.angular > 0 &&
                                <Item>{props.adesivo.angular} - Adesivo Angular</Item>
                            }
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <h4 style={{ marginTop: 2, marginBottom: 5 }}>Descrição</h4>
                        <div style={{ paddingLeft: '1em' }}>
                            <Item>{props.descricao || "Sem nenhuma descrição "}</Item>
                        </div>
                    </Grid>
                </Grid>

                <Grid mt={2} mb={4} container spacing={2}>
                    <Grid item md={12}>
                        <h4 style={{ marginTop: 2, marginBottom: 5 }}>Pagamento</h4>
                        <div style={{ paddingLeft: '1em' }}>
                            <Item>{pagamentoTexto()}</Item>
                        </div>
                    </Grid>
                </Grid>
            
            </CardForm>
        </Container>
    )
}