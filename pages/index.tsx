import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../src/components/login/Login';
import { createServer,Model } from 'miragejs';
import trash1 from '../public/images/beige-16875_1920.jpg';
import trash2 from '../public/images/lcd.jpg';
import avatar1 from '../public/images/269796429_907875379913390_4775710928716066908_n.jpg';
import avatar2 from '../public/images/eu e crianças.jpg';

const Home: NextPage = () => {

  return (
   <>
   <Head>
    <title>
      mauriciadas
    </title>
  </Head>
    <Login/>
   </>
  )
}

export default Home

