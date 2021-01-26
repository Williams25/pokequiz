import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import db from '../db.json'

const QuizPage = props => {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleName = _ => {
    let { name } = router.query
    setName(name)
  }

  useEffect(() => {
    handleName()
  }, [])

  return (
    <div>
      {name}
    </div>
  )
}

export default QuizPage 