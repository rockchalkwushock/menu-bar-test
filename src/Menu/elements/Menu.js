import styled from 'styled-components'

const StyledMenu = styled.nav`
  background-color: #fff;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.3);
  height: ${({ state }) => (state === 'open' ? '250px' : '60px')};
  transition: height 0.3s ease-in-out 0.05s;
  width: 100%;
`

export default StyledMenu
