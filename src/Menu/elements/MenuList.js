import styled from 'styled-components'

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 10px;
  text-align: center;
`

export default StyledMenuList

/**
 * display: flex;
  flex-direction: column;
  height: ${({ state }) => (state === 'open' ? '190px' : '0px')};
  list-style: none;
  margin: 10px;
  visibility: ${({ state }) => (state === 'open' ? 'visible' : 'hidden')};
  text-align: center;
  transition: height 0.3s ease-in-out 0.1s, visibility 0.3s ease-in-out 0.1s;
 */
