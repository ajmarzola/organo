import Colaborador from '../Colaborador';
import './Time.css';

export const Time = (props) => {
    const styleSection = { backgroundColor: props.corSecundaria };
    const styleH3 = { borderColor: props.corPrimaria };

    return (
        (props.colaboradores.length > 0) ? (
            <section className='time' style={styleSection}>
                <h3 style={styleH3}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}            
                </div>
            </section>
            ) : ''
    );
}