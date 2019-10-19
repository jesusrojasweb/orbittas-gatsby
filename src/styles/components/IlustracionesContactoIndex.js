import styled from 'styled-components'
import {floatingLeft,tossing, aparecer,pulse} from '../animations'

export const FloatLeft = styled.path`
  ${floatingLeft()}
`
export const Tossing = styled.path`
  ${tossing()}
`
export const Aparecer = styled.path`
  ${aparecer()}
`
export const PulsePlanea = styled.path`
  ${pulse()}
`

export const PulseHombre = styled.path`
  ${pulse('2s', 'esase-in-out', 'center bottom')}
`
