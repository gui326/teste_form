import CardForm from "../../components/CardForm";
import Container from "../Container";



export default function FormObrigado(props){
    return(
        <Container>
            <CardForm etapa={props.etapa}>
                <div style={{ margin: '5em 0', textAlign: 'center' }}>
                    <h2>Pedido realizado com sucesso!</h2>

                    <img src="/certo.png" />

                    <p style={{ color: 'grey', marginTop: '4em' }}>Obrigado por comprar com a gente, volte sempre ;D</p>
                </div>
            </CardForm>
        </Container>
    )
}