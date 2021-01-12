import styled from '@emotion/styled'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

interface IProps {
  icon: any
  className?: string
}

const IconStyled = styled(FontAwesomeIcon)`
  display: block;
  width: 100%;
`

const Icon: React.FC<IProps> = (props) => <IconStyled icon={props.icon} className={props.className} />

export default Icon
