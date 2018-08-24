import styled from 'styled-components'
import { ds } from '../designsystem'

export default styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${ds.get('layout.maxWidth')};
  margin: 0 auto;
`
