import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../../components/layout-dms/dashboard'
import VanBanDHListingContainer from '../../containers/vanbandhlisting/list-vanbandh'

type Props = {}

export default function VanBanDHListingPage({}: Props) {
  return (
    <>
      <Head>
        <title>Văn bản điều hànhh</title>
      </Head>
      <VanBanDHListingContainer />
    </>
  )
}
VanBanDHListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
