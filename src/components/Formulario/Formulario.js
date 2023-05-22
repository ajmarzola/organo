import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX & Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Form Submetido");
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome" obrigatorio={true} />
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" obrigatorio={true} />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" obrigatorio={true} />
                <ListaSuspensa label="Time" itens={times} obrigatorio={true} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}