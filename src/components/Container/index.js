import { Area } from "./styled";

export default function Container(props){
    return(
        <Area>
            {props.children}
        </Area>
    )
}