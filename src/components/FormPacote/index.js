import { useState } from "react";
import { Button, Dialog, DialogTitle, Grid, TextareaAutosize } from "@mui/material";
import CardForm from "../../components/CardForm";
import CardAdesivo from "../CardAdesivo";
import Container from "../Container";
import HeaderForm from "../HeaderForm";

export default function FormPacote(props){
    const [dialog, setDialog] = useState(false);

    const changeValueReact = valor => {
        props.setAdesivo({
            ...props.adesivo,
            react: valor,
        })
    }

    const changeValueVue = valor => {
        props.setAdesivo({
            ...props.adesivo,
            vue: valor,
        })
    }

    const changeValueAngular = valor => {
        props.setAdesivo({
            ...props.adesivo,
            angular: valor,
        })
    }

    const validar = valor => {
        if(!props.adesivo.react && !props.adesivo.vue && !props.adesivo.angular){
            setDialog(true);
        } else {
            props.setEtapa(valor);    
        }
    }

    return(
        <>
            <Container>
                <CardForm etapa={props.etapa} setEtapa={validar}>
                    <HeaderForm titulo={"Formulário para compra de "} destaqueTitulo={"Pacote de Adesivos"} imagem="/caixa.png"/>

                    <p style={{ marginTop: '2em' }}>Quais adesivos e quantos?</p>

                    <Grid container spacing={4}>
                        <Grid item md={4}>
                            <CardAdesivo type="react" valor={props.adesivo.react} setValor={changeValueReact}/>
                        </Grid>
                        <Grid item md={4}>
                            <CardAdesivo type="vue" valor={props.adesivo.vue} setValor={changeValueVue} />
                        </Grid>
                        <Grid item md={4}>
                            <CardAdesivo type="angular" valor={props.adesivo.angular} setValor={changeValueAngular} />
                        </Grid>
                    </Grid>

                    <p style={{ marginTop: '3em' }}>Descrição? <small style={{ color: 'grey' }}>(opcional)</small></p>

                    <TextareaAutosize
                    value={props.descricao}
                    onInput={e => props.setDescricao(e.target.value)}
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{ marginBottom: '2em', fontSize: '16px', borderColor: "lightgrey", borderRadius: '12px', padding: '2%', width: "96%", height: 130 }}
                    />
                
                </CardForm>
            </Container>

            <Dialog onClose={() => setDialog(false)} open={dialog}>
                <DialogTitle style={{ textAlign: 'center' }}>Inválido</DialogTitle>
                <div style={{ textAlign: 'center', padding: '0 1.5em' }}>
                    <p style={{ marginTop: 0 }}>Selecione pelo menos 1 adesivo</p>

                    <Button
                    sx={{ width: '50%', marginBottom: 2, marginTop: 1, background: '#2fdf84', color: 'black', fontWeight: 500 }}
                    onClick={() => setDialog(false)}
                    >
                        Ok
                    </Button>
                </div>
            </Dialog>
        </>
    )
}