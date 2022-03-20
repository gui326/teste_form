import { useState } from "react";
import FormPagamento from "../../components/FormPagamento";
import FormPacote from "../../components/FormPacote";
import FormCartao from "../../components/FormCartao";
import FormConclusao from "../../components/FormConclusao";
import FormObrigado from "../../components/FormObrigado";

export default function Adesivo(){
    const [etapa, setEtapa] = useState(1);
    const [adesivo, setAdesivo] = useState({
        react: 0,
        vue: 0,
        angular: 0
    });
    const [descricao, setDescricao] = useState("");
    const [pagamento, setPagamento] = useState(1); //Pagamento 1: Crédito, 2: Débito e 3: Boleto

    return(
        <main>
            {etapa == 1 &&
                <FormPacote etapa={etapa} setEtapa={setEtapa} adesivo={adesivo} setAdesivo={setAdesivo} descricao={descricao} setDescricao={setDescricao}/>
            }

            {etapa == 2 &&
                <FormPagamento etapa={etapa} setEtapa={setEtapa} pagamento={pagamento} setPagamento={setPagamento}/>
            }

            {etapa == 3 &&
                <FormCartao etapa={etapa} setEtapa={setEtapa}/>
            }

            {etapa == 4 &&
                <FormConclusao etapa={etapa} setEtapa={setEtapa} pagamento={pagamento} adesivo={adesivo} descricao={descricao} />
            }

            {etapa == 5 &&
                <FormObrigado etapa={etapa} />
            }
        </main>
    )
}