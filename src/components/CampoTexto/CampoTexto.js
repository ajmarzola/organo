import "./CampoTexto.css";

export const CampoTexto = (props) => {
    //console.log(props);
    const placeholderModificado = `${props.placeholder}...`;

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado} required={props.obrigatorio}></input>
        </div>
    );
}