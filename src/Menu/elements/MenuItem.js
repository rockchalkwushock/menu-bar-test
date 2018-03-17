import styled from 'styled-components'

const StyledMenuItem = styled.li`
  visibility: ${({ state }) => (state === 'open' ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease-in-out 0.05s;
`

export default StyledMenuItem
