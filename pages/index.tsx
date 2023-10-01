import Header from '@/components/header/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <main
    className="bg-[#F6F7F9] mt-8 lg:mt-0"
    >
      <Head>
        <title>Urban Nest</title>
        <meta
          name="description"
          content="The Best Platform for real estate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
    </main>
  )
}
