import './Colaborador.css';

export const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
    var divStyle = { backgroundColor: corDeFundo };

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={divStyle}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div >
    );
}