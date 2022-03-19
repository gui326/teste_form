import { useState } from "react";
import FormPacote from "../../components/FormPacote";

export default function Adesivo(){
    const [adesivo, setAdesivo] = useState({
        react: 0,
        vue: 0,
        angular: 0
    });
    const [descricao, setDescricao] = useState("");

    return(
        <main>
            <FormPacote adesivo={adesivo} setAdesivo={setAdesivo} descricao={descricao} setDescricao={setDescricao}/>
        </main>
    )
}