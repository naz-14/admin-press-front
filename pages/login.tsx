import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Title from '../components/global/Title'
import Input from '../components/global/Input'

const LoginWrapper = styled.div`
  background-color: coral;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormWrapper = styled.div`
  background-color: #9c9c9c;
  padding: 3rem;
  max-width: 80%;
`

interface LoginData {
  userName: string
  password: string
}

const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data)

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>()
  return (
    <LoginWrapper>
      <FormWrapper>
        <Title text={'Login'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={'User Name'}
            name={'userName'}
            defaultValue={''}
            required={true}
            register={register}
            errors={errors}
          />
          <Input
            label={'Password'}
            name={'password'}
            defaultValue={''}
            required={true}
            register={register}
            errors={errors}
          />
          <input type="submit" />
        </form>
      </FormWrapper>
    </LoginWrapper>
  )
}

export default Login
