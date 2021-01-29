import Quiz from '../../src/screens/Quiz'
import styled, { ThemeProvider } from 'styled-components'

const QuizDaGaleraPage = ({ dbExterno }) => {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <Quiz
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
        githubURL={dbExterno.githubURL}
        />
    </ThemeProvider>
  )
}

export const getServerSideProps = async (context) => {
  const uri = `https://${context.params.id}.vercel.app/api/db`

  const dbExterno = await fetch(uri)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });

  console.log('sad ', context.query)
  return {
    props: {
      dbExterno
    }
  }
}

export default QuizDaGaleraPage