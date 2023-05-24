import { useState } from "react";
import "./CampoTexto.css";

export const CampoTexto = (props) => {
    console.log(props);
    const placeholderModificado = `${props.placeholder}...`;
    
    const [valor, setValor] = useState('Valor Padrão'); 

    const aoDigitar = (evento) => {
        setValor(evento.target.value);
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado} required={props.obrigatorio} onChange={aoDigitar} value={valor} />
        </div>
    );
}