import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../Components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp</title>
        <meta name='description' content='Created By Lucas Nakeli' />
        <link rel='icon' href='/whatsapp.png' />
      </Head>

      <Sidebar />
    </div>
  )
}
