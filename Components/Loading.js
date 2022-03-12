import React from 'react'
import Head from 'next/head'
import { Circle } from 'better-react-spinkit'

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <Head>
        <title>Loading</title>
        <meta name='description' content='Created By Lucas Nakeli' />
        <link rel='icon' href='/whatsapp.png' />
      </Head>
      <div>
        <img
          src='/whatsappLogo.png'
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color='#66b3ff' size={60} />
      </div>
    </center>
  )
}

export default Loading
