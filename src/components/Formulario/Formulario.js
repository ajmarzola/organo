import { useState } from "react";
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrar({ nome, cargo, imagem, time });
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome" obrigatorio={true} valor={nome} aoAlterar={valor => setNome(valor)} />
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" obrigatorio={true} valor={cargo} aoAlterar={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" obrigatorio={true} valor={imagem} aoAlterar={valor => setImagem(valor)} />
                <ListaSuspensa label="Time" itens={props.times} obrigatorio={true} valor={time} aoAlterar={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}