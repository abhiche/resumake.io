/**
 * @flow
 */

import React, { type Node } from 'react'
import styled from 'styled-components'
import { sizes } from '../../theme'

const Fieldset = styled.fieldset`
  display: block;
  border: none;
  margin: 0 auto;
  padding: 0;
  width: ${sizes.preview}px;
  max-width: 100%;
`

const Heading = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  font-size: inherit;
  font-weight: normal;
  color: #ccc;
`

type Props = {
  heading: string,
  children: Node
}

function Section({ heading, children }: Props) {
  return (
    <Fieldset>
      <Heading>{heading}</Heading>
      {children}
    </Fieldset>
  )
}

export default Section