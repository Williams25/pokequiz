import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import Widget from '../Widget'
import AlternativesForm from '../AlternativesForm'
import Input from '../Input'
import Button from '../Button'
import BackLinkArrow from '../BackLinkArrow'

import { ErrorCircle } from 'styled-icons/boxicons-solid'
import { Verified } from '@styled-icons/material-sharp'

import Pokebola from '../../assets/audio/Pokebola.mp3'
import Pikachu from '../../assets/audio/Pikachu.mp3'
import AshBicicleta from '../../assets/audio/AshBicicleta.mp3'
import AshPikachu from '../../assets/audio/AshPikachu.mp3'
import EquipeRocket from '../../assets/audio/EquipeRocket.mp3'
import PokemonAleatorio from '../../assets/audio/PokemonAleatorio.mp3'
import Ohno from '../../assets/audio/ohno.mp3'
import Acorde from '../../assets/audio/Acorde.mp3'
import NadaMal from '../../assets/audio/NadaMal.mp3'
import Eevee from '../../assets/audio/Eevee.mp3'
import Carvalho from '../../assets/audio/Carvalho.mp3'

const icons = {
  Correct: 'correct',
  Error: 'error',
  Undef: 'undef'
}

const sonsQuestion = [Pikachu, Pokebola, AshBicicleta, EquipeRocket, Acorde, Eevee, PokemonAleatorio, NadaMal, Carvalho, AshPikachu]

const QuestionWidget = ({ question, questionIndex, totalQuestions, submit, addResult }) => {

  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
  const [isIcon, setIsIcon] = useState(icons.Undef)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined
  const questionId = `${questionIndex}`


  const form = useRef()
  const audioTrack = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    setIsQuestionSubmited(true)

    if (audioTrack.current) audioTrack.current.play()

    if (isCorrect) {
      setIsIcon(icons.Correct)
    } else {
      setIsIcon(icons.Error)
    }

    setTimeout(() => {
      addResult(isCorrect)
      setIsQuestionSubmited(false)
      setIsIcon(icons.Undef)
      setSelectedAlternative(undefined)
      form.current.reset()
      submit()
    }, 5 * 1000)

    console.log(selectedAlternative, isQuestionSubmited)
  }

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>

        <div style={{
          height: '20px',
          width: '100%',
          padding: '10px'
        }}>
          {
            isIcon === icons.Correct &&
            (<motion.div
              animate={{ x: 250 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Verified size="22" color="green" />
            </motion.div>)
          }

          {
            isIcon === icons.Error &&
            (<motion.div
              animate={{ x: 250 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <ErrorCircle size="22" color="red" />
            </motion.div>)
          }
        </div>

        <p>
          {question.description}
        </p>

        <AlternativesForm
          ref={form}
          onSubmit={handleSubmit}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <Input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <audio
            ref={audioTrack}
            src={isCorrect ? sonsQuestion[questionIndex] : Ohno}
            type="audio/mpeg"
            preload="auto"
          />

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget