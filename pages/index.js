import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    if (number < 31) {
      setNumber(number + 1);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='number'>
        <h1 className='numberTxt' onClick={() => { incrementNumber() }}>{number}</h1>
      </div>
    </>
  )
}
