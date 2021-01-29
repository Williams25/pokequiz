import styled from 'styled-components'

import React from 'react'
import PropTypes from 'prop-types'
import db from '../../../db.json'

function Logo({ className, ...props }) {
  return (
    <div {...props}>
      <img className={className} width="100%" height="120" src={db.logo} alt="logo" />
    </div>
  )
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`

export default QuizLogo