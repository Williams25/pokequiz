import { useRouter } from 'next/router'
import { useState } from 'react'

import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import FormQuiz from '../src/components/FormQuiz'
import db from '../db.json'

const Home = () => {

  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    router.push(`/quiz?name=${name}`)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            
            <FormQuiz
              onSubmit={handleSubmit}
              method="get">
              <FormQuiz.Input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={e => setName(e.target.value)} />
              <FormQuiz.Button
                type="submit"
                disabled={name.length === 0}
                disalbledButton={name.length === 0}
              >
                Jogar
              </FormQuiz.Button>
            </FormQuiz>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p></p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.githubURL} />
    </QuizBackground>
  )
}

export default Home