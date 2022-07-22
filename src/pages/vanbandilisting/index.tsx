import Head from 'next/head'
import DashboardLayout from '../../components/layout-dms/dashboard'
import VanBanDiListingContainer from '../../containers/vanbandilisting/list-vanbandilisting'

export default function DIListingPage() {
  return (
    <>
      <Head>
        <title>Văn bản đi</title>
      </Head>
      <VanBanDiListingContainer />
    </>
  )
}

DIListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
