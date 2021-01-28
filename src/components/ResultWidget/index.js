import Widget from '../Widget'

const ResultWidget = ({ name, result, total, loading }) => {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>

      <Widget.Content>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            border: 'none',
            borderRadius: '4px'
          }}
          src={loading}
        />
        <p>Parabéns {' '} {name} você acertou {result.filter((x) => x).length} de {total} questões sobre o PokeQuiz</p>
        <ul>
          {result.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? 'Acertou'
                : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget