import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Experience } from '../components/Experience'
import LandingPage from '../components/LandingPage'
import { Languages } from '../components/Languages'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Resume</title>
        <meta name="description" content="Online portfolio" />
      </Head>
      <LandingPage />
      <Languages />
      <Experience />
    </div>
  )
}

export default Home
