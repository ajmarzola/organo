import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <br />
      <CampoTexto label="Nome" placeholder="Digite o seu Nome" />
      <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
      <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" />
    </div>
  );
}

export default App;
