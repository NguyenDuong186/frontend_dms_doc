import Head from 'next/head'
import Link from 'next/link'
import DashboardLayout from '../../components/layout-dms/dashboard'
import VanBanDenListingContainer from '../../containers/vanbandenlisting/list-vanbandenlisting'

export default function VanBanDenListingPage() {
  return (
    <>
      <Head>
        <title> Văn bản đến</title>
      </Head>
      <VanBanDenListingContainer />
    </>
  )
}

VanBanDenListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
