import FooterForm from "../FooterForm";
import { CardArea, Area, FooterArea } from "./styled";

export default function CardForm(props){
    return(
        <Area>
            <CardArea>
                {props.children}
            </CardArea>
            
            <FooterArea>
                <FooterForm etapa={props.etapa} setEtapa={props.setEtapa}/>
            </FooterArea>
        </Area>
    )
}