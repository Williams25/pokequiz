import { useRouter } from 'next/router'
import { useState } from 'react'

import { motion } from 'framer-motion'

import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import FormQuiz from '../src/components/FormQuiz'
import Link from '../src/components/Link'
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
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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

        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show">
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {
                db.external.map(ext => {
                  const [project, user] = ext
                    .replace(/\https:/g, '')
                    .replace(/\//g, '')
                    .replace(/\.vercel.app/g, '')
                    .split('.')

                  const uri = ext
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace(/\.vercel.app/g, '')
                  return (
                    <li key={ext}>
                      <Widget.Topic
                        as={Link}
                        href={`quiz/${uri}`}>
                        {
                          `${user}/${project}`
                        }
                      </Widget.Topic>
                    </li>
                  )
                })
              }
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl={db.githubURL} />
    </QuizBackground>
  )
}

export default Home