import "./CampoTexto.css";

export const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado} required={props.obrigatorio} onChange={aoDigitar} value={props.valor} />
        </div>
    );
}