import Widget from '../Widget'
import BackLinkArrow from '../BackLinkArrow'

import { useRef, useEffect } from 'react'
import Pokemon from '../../assets/audio/Pokemon.mp3'
import { ErrorCircle } from 'styled-icons/boxicons-solid'
import { Verified } from '@styled-icons/material-sharp'
import { motion } from 'framer-motion'

const ResultWidget = ({ name, result, total, loading }) => {
  const audioTrack = useRef()

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  useEffect(() => {
    if (audioTrack.current) audioTrack.current.play()
  }, [])

  return (
    <Widget>
      <audio
        ref={audioTrack}
        src={Pokemon}
        type="audio/mpeg"
        preload="auto"
      />
      <Widget.Header>
        <BackLinkArrow href="/" />
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
            <Widget.Topic
              as={motion.div}
              key={`result__${index}`}
              initial="hidden"
              animate="visible"
              variants={list}
            >

              {index + 1}
              {'-'}
              {
                result === true
                  ?
                  (
                    <motion.div variants={item}>
                      Acertou {' '} <Verified size="20" color="green" />
                    </motion.div>
                  )
                  : (
                    <motion.div variants={item}>
                      Errou {' '} <ErrorCircle size="20" color="red" />
                    </motion.div>
                  )
              }
            </Widget.Topic>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget