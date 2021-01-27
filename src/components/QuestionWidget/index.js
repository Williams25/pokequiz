import { useState } from 'react'

import Widget from '../Widget'
import FormQuiz from '../FormQuiz'
import Input from '../Input'
import Button from '../Button'

let answer = 0

const QuestionWidget = ({ question, questionIndex, totalQuestions, submit }) => {

  const [index, setIndex] = useState(-1)

  const handleSubmit = e => {
    e.preventDefault()
    submit()
    if (question.resposta === question.alternatives[index]) {
      answer = answer + 1
    }
    console.log('submit ', question.alternatives[index], question.resposta, index)
  }

  const questionId = `question__${questionIndex}`;
  return (
    <Widget>

      <Widget.Header>
        <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <FormQuiz
          onSubmit={handleSubmit}
        >
          {
            question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`
              return (
                <Widget.Topic
                  key={alternativeIndex}
                  as="label"
                  htmlFor={alternativeId}
                  onClick={() => setIndex(alternativeIndex)}
                >
                  <Input
                    id={alternativeId}
                    name={questionId}
                    type="radio"
                  />
                  {alternative}
                </Widget.Topic>
              );
            })
          }

          <Button type="submit">
            Confirmar
          </Button>
        </FormQuiz>
      </Widget.Content>
    </Widget>
  );
}

export const correctAnswers = () => {
  return answer
}

export default QuestionWidget