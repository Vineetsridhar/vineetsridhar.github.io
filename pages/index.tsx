import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/LandingPage'

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Resume</title>
            </Head>
            <LandingPage />
        </div>
    )
}

export default Home
