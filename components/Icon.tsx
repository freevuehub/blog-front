import React from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

interface IProps {
  icon: any
}

const Icon: React.FC<IProps> = (props) => <FontAwesomeIcon icon={props.icon} />

export default Icon
