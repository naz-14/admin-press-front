import React from 'react'
import styled from '@emotion/styled'

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  align-items: center;

  label {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
  }
`
const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;

  span {
    color: red;
  }
`

interface InputProps {
  label: string
  name: string
  defaultValue: string
  required: Boolean
  register: any
  errors: any
}

function Input({
  label,
  name,
  register,
  required,
  defaultValue,
  errors,
}: InputProps) {
  return (
    <InputWrapper>
      <label>{label}</label>
      <input defaultValue={defaultValue} {...register(name, { required })} />
      <ErrorWrapper>
        {errors[name] && <span>This field is required</span>}
      </ErrorWrapper>
    </InputWrapper>
  )
}

export default Input
