import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import QuizContainer from '../../components/QuizContainer'
import LoadingWidget from '../../components/LoadingWidget'
import GitHubCorner from '../../components/GitHubCorner'
import QuestionWidget, { correctAnswers } from '../../components/QuestionWidget'
import ResultWidget from '../../components/ResultWidget'

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`
const screen = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

const Quiz = ({ externalQuestions, externalBg, githubURL }) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [screenStates, setScreenStates] = useState(screen.LOADING)
  const [results, setResults] = React.useState([])
  const questionIndex = currentQuestion
  const question = externalQuestions[questionIndex]
  const totalQuestions = externalQuestions.length

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
    if (nextQuestion < totalQuestions) {
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
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        {/* <QuizLogo /> */}

        {/* loading={db.loading */}

        {screenStates === screen.LOADING && <LoadingWidget />}

        {
          screenStates === screen.QUIZ &&
          <>
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
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
          />
        }
      </QuizContainer>
      <GitHubCorner projectUrl={githubURL} />
    </QuizBackground>
  )
}

export default Quiz