import Login from '@/components/auth/Login';
import React from 'react';
import Head from 'next/head';

const index = () => {
  return (
    <main>
      <Head>
        <title>Urban Nest || Login</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Login />
    </main>
  )
}

export default index;