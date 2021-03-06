import Widget from '../Widget'
import Loading from '../Loading'

const LoadingWidget = ({ loading }) => {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>

      <Widget.Content>
        {
          loading ? (
            // <img
            //   alt="Descrição"
            //   style={{
            //     width: '100%',
            //     height: 'auto',
            //     objectFit: 'cover',
            //     border: 'none',
            //     borderRadius: '4px'
            //   }}
            //   src={loading}
            // />
            <Loading />
          ) :
            <Loading />
        }

      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget