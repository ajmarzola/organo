import './Time.css';

export const Time = (props) => {
    const styleSection = { backgroundColor: props.corSecundaria };
    const styleH3 = { borderColor: props.corPrimaria };

    return (
        <section className='time' style={styleSection}>
            <h3 style={styleH3}>{props.nome}</h3>
        </section>
    );
}