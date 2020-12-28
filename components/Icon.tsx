import React from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

interface IProps {
  icon: any
  className?: string
}

const Icon: React.FC<IProps> = (props) => <FontAwesomeIcon icon={props.icon} className={props.className} />

export default Icon
