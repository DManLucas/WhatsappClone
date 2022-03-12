import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
        <meta name='description' content='Created By Lucas Nakeli' />
        <link rel='icon' href='/whatsapp.png' />
      </Head>

      <LoginContainer>
        <Logo src='/whatsappLogo.png' />
        <Button onClick={signIn} variant='outlined'>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.5);
`

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`
