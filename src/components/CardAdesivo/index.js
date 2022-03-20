import { Area, Card, AreaValor, ButtonQuantidade, Quantidade } from "./styled";  

export default function CardAdesivo(props){
    const adesivos = {
        react: {
            img: "/react_adesivo.png"
        },
        vue: {
            img: "/vue_adesivo.png"
        },
        angular: {
            img: "/angular_adesivo.jpg"
        }
    }

    return(
        <Area>
            <Card>
                <img src={adesivos[props.type].img} />
            </Card>

            <AreaValor>
                <ButtonQuantidade
                onClick={() => {props.valor > 0 && props.setValor(props.valor - 1)}}
                >
                    -
                </ButtonQuantidade>
                <Quantidade value={props.valor} disabled/>
                <ButtonQuantidade
                onClick={() => {props.valor < 100 && props.setValor(props.valor + 1) }}
                >
                    +
                </ButtonQuantidade>
            </AreaValor>
        </Area>
    )
}