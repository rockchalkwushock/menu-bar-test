import React from 'react'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

fontawesome.library.add(faBars)

const UnstyledIcon = props => <FontAwesomeIcon {...props} />

const StyledMenuIcon = styled(UnstyledIcon)`
  margin-left: 15px;
  margin-top: 13px;
`

export default StyledMenuIcon
