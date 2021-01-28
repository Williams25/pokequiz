import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import LoadingWidget from '../src/components/LoadingWidget'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import QuestionWidget, { correctAnswers } from '../src/components/QuestionWidget'
import ResultWidget from '../src/components/ResultWidget'
import db from '../db.json'

const screen = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage = props => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [screenStates, setScreenStates] = useState(screen.LOADING)
  const [results, setResults] = React.useState([])
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]
  const totalQuestions = db.questions.length

  const handleName = _ => {
    let { name } = router.query
    setName(name)
  }

  const addResult = result => {
    setResults([
      ...results,
      result,
    ]);
  }

  const handleSubmit = _ => {
    const nextQuestion = questionIndex + 1
    if (nextQuestion < db.questions.length) {
      setCurrentQuestion(questionIndex + 1)
    } else {
      setScreenStates(screen.RESULT)
      console.log('result ', screenStates)
    }
  }

  const handleLoadingQuestions = _ => {
    setTimeout(() => {
      setScreenStates(screen.QUIZ)
      console.log('quiz ', screenStates)
    }, 1 * 2000)
  }


  useEffect(() => {
    handleName()
    handleLoadingQuestions()
  }, [])

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenStates === screen.LOADING && <LoadingWidget loading={db.loading} />}

        {
          screenStates === screen.QUIZ &&
          <>
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={db.questions.length}
              submit={handleSubmit}
              addResult={addResult}
            />
          </>
        }

        {
          screenStates === screen.RESULT &&
          <ResultWidget
            name={name}
            result={results}
            total={totalQuestions}
            loading={db.result}
          />
        }
      </QuizContainer>
      <GitHubCorner projectUrl={db.githubURL} />
    </QuizBackground>
  )
}

export default QuizPage 