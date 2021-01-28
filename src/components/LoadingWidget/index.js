import Widget from '../Widget'

const LoadingWidget = ({ loading }) => {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
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
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget