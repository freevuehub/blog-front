import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import { ITheme } from '~/types'
import { breakPoint } from '~/lib'

const SearchWrapStyled = styled.div`
  position: relative;
  width: 200px;
  margin-left: 16px;
  form {
    display: block;
    input {
      width: 100%;
      display: block;
      height: 32px;
      padding: 7px 23px 7px 7px;
      border: 1px solid #bcbcbc;
      border-radius: 4px;
      font-size: 13px;
      ${(props: ITheme) => ({
        color: props.theme?.primary,
        backgroundColor: props.theme?.background.app,
      })}
      &:focus {
        ${(props: ITheme) => ({ outline: `1px auto ${props.theme?.primary}` })}
      }
    }
    button {
      display: flex;
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      width: 14px;
      .icon {
        font-size: 14px;
        ${(props: ITheme) => ({ color: props.theme?.text })}
      }
    }
  }

  @media (max-width: ${breakPoint.tabletAir}) {
    margin-left: auto;
  }
  @media (max-width: ${breakPoint.mobile}) {
    display: none;
  }
`

const SearchInput: React.FC<{ className?: string }> = (props) => {
  const router = useRouter()
  const [text, setText] = useState<string>('')
  const onSearchWrapClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const onSearchSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await router.push(`/search?q=${text}`)
  }

  return (
    <SearchWrapStyled className={props.className} onClick={onSearchWrapClick}>
      <form onSubmit={onSearchSubmit}>
        <input type="text" value={text} onChange={onInputChange} />
        <button>
          <Icon className="icon" icon={faSearch} />
        </button>
      </form>
    </SearchWrapStyled>
  )
}

export default SearchInput
