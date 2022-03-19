import { Grid, TextareaAutosize } from "@mui/material";
import CardForm from "../../components/CardForm";
import CardAdesivo from "../CardAdesivo";
import Container from "../Container";
import HeaderForm from "../HeaderForm";

export default function FormPacote(props){
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

    return(
        <Container>
            <CardForm>
                <HeaderForm />

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
    )
}