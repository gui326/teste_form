import { useState } from "react";
import { Grid, Dialog, DialogTitle, Button } from "@mui/material";
import CardForm from "../../components/CardForm";
import Container from "../Container";
import HeaderForm from "../HeaderForm";

import { Input } from "./styled";


export default function FormCartao(props){
    const [dialog, setDialog] = useState(false);

    const validar = valor => {
        let cont = 0;

        for(let i in props.cartao){
            props.cartao[i] && cont++;
        }

        if(cont == 6){
            props.setEtapa(valor);
        }  else {
            setDialog(true);
        }
    } 

    function mCPF(cpf){
        
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        console.log(cpf);
        props.setCartao({...props.cartao, cpf: cpf});
        console.log(props.cartao);
    }

    return(
        <>
            <Container>
                <CardForm etapa={props.etapa} setEtapa={validar}>
                    <HeaderForm titulo={"Qual os dados do "} destaqueTitulo={"seu Cartão"} imagem="/cartaocredito.png"/>

                    <p style={{ marginTop: '2em' }}>Digite os dados do cartão</p>

                    <Grid container spacing={4}>
                        <Grid item md={8} xs={12}>
                            <Input fullWidth variant="outlined" defaultValue={props.cartao.numero} 
                            onInput={e => props.setCartao({...props.cartao, numero: e.target.value})}
                            label="Número Cartão"/>
                        </Grid>
                    </Grid>

                    <Grid mt={1} container spacing={1}>
                        <Grid item md={2} xs={4}>
                            <Input fullWidth variant="outlined" defaultValue={props.cartao.mes} 
                            onInput={e => props.setCartao({...props.cartao, mes: e.target.value})}
                            inputProps={{ maxLength: 2 }}
                            label="Mês"/>
                        </Grid>
                        <Grid item md={3} xs={4}>
                            <Input fullWidth variant="outlined" defaultValue={props.cartao.ano}
                            onInput={e => props.setCartao({...props.cartao, ano: e.target.value})}
                            inputProps={{ maxLength: 4 }}
                            label="Ano"/>
                        </Grid>
                        <Grid item md={3} xs={4}>
                            <Input fullWidth variant="outlined" defaultValue={props.cartao.cvc}
                            onInput={e => props.setCartao({...props.cartao, cvc: e.target.value})}
                            inputProps={{ maxLength: 5 }}
                            label="CVC"/>
                        </Grid>
                    </Grid>

                    <Grid mt={1} mb={4} container spacing={1}>
                        <Grid item md={5} xs={12}>
                            <Input fullWidth variant="outlined" defaultValue={props.cartao.nome}
                            onInput={e => props.setCartao({...props.cartao, nome: e.target.value})}
                            label="Nome"/>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Input fullWidth variant="outlined" value={props.cartao.cpf}
                            onInput={e => mCPF(e.target.value)}
                            inputProps={{ maxLength: 14 }}
                            label="CPF"/>
                        </Grid>
                    </Grid>
                
                </CardForm>
            </Container>

            <Dialog onClose={() => setDialog(false)} open={dialog}>
                <DialogTitle style={{ textAlign: 'center' }}>Inválido</DialogTitle>
                <div style={{ textAlign: 'center', padding: '0 1.5em' }}>
                    <p style={{ marginTop: 0 }}>Os dados do cartão estão incompletos</p>

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