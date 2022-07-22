import Head from 'next/head'
import React from 'react'
import VanBanDenListingContainer from '../containers/vanbandenlisting/list-vanbandenlisting'
import DashboardLayout from '../components/layout-dms/dashboard'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home App</title>
      </Head>
      <VanBanDenListingContainer />
    </>
  )
}

Page.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
