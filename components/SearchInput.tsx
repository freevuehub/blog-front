import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled from '@emotion/styled'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import { ITheme } from '../lib'
import { useRouter } from 'next/router'

const SearchWrapStyled = styled.div`
  position: relative;
  width: 200px;
  margin-left: 16px;
  form {
    display: block;
    input {
      display: block;
      height: 32px;
      padding: 7px 23px 7px 7px;
      border: 1px solid #bcbcbc;
      border-radius: 4px;
      font-size: 13px;
      color: #6bb3b8;
      &:focus {
        outline: 1px auto #6bb3b8;
      }
    }
    button {
      display: flex;
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      .icon {
        font-size: 14px;
        ${(props: ITheme) => ({ color: props.theme?.text })}
      }
    }
  }
`

const SearchInput: React.FC = () => {
  const router = useRouter()
  const [text, setText] = useState<string>('')
  const onInutChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault()

    router.push(`/search?q=${text}`)
  }

  return (
    <SearchWrapStyled>
      <form onSubmit={onSearchSubmit}>
        <input type="text" value={text} onChange={onInutChange} />
        <button>
          <Icon className="icon" icon={faSearch} />
        </button>
      </form>
    </SearchWrapStyled>
  )
}

export default SearchInput
