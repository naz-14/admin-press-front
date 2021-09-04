import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1`
  font-size: 2.5rem;
`

interface TitleProps {
  text: String
}

function Title({ text }: TitleProps) {
  return (
    <>
      <H1>{text}</H1>
    </>
  )
}

export default Title
