import Dashboard from '@/components/dashboard';
import React from 'react';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>Urban Nest || DashBoard</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <Dashboard />
    </div>
  )
}

export default index;