import { Hero } from '../components/Hero'
import { Teste } from '../components/Teste'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Marido de Aluguel</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Teste />
          <Hero />
        </div>
      </div>
    </>
  )
}
