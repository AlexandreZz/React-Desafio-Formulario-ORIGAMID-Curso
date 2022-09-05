import React from "react";
import pergunta from "./components/Perguntas";
import Input from "./components/Input";

const App = () => {
  const [radio, setRadio] = React.useState(null);
  const [resposta, setReposta] = React.useState(null);
  const [opcao, setOpcao] = React.useState([]);
  const [next, setNext] = React.useState(0);
  const [correta, setCorreta] = React.useState(0);
  const tamanhoMaximo = pergunta.length;

  React.useEffect(
    () => {
      if (next < tamanhoMaximo) {
        setOpcao(pergunta[next].options);
        setReposta(pergunta[next].resposta);
      } else {
        setOpcao([]);
        setReposta(null);
      }
    },
    [next]
  );

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleClick = () => {
    if (resposta === radio) setCorreta(correta + 1);
    if (radio !== null) setNext(next + 1);
    setRadio(null);
  };

  const handleChange = ({ target }) => {
    setRadio(target.value);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>
        {next < tamanhoMaximo ? pergunta[next].pergunta : "Total de acertos"}
      </h2>
      {next < tamanhoMaximo
        ? opcao.map(opcoes =>
            <React.Fragment key={opcoes}>
              <Input
                type="radio"
                label={opcoes}
                id={opcoes}
                value={opcoes}
                onChange={handleChange}
                checked={radio === opcoes}
              />
            </React.Fragment>
          )
        : <p>
            Você acertou: {correta} de {tamanhoMaximo}
          </p>}
      {next < tamanhoMaximo
        ? <button onClick={handleClick}>Próxima</button>
        : ""}
    </form>
  );
};

export default App;
