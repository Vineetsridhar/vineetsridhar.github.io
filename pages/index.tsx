import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/LandingPage'

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Resume</title>
                <meta name="description" content="Online portfolio"/>
            </Head>
            <LandingPage />
        </div>
    )
}

export default Home
