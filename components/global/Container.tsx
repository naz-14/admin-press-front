import React, { ReactElement } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 85%;
  @media (min-width: 768px) {
    width: 100%;
  }
`

interface ContainerProps {
  children: ReactElement
}

function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>
}

export default Container
