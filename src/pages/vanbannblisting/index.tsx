import Head from 'next/head'
import DashboardLayout from '../../components/layout-dms/dashboard'
import VanBanDiListingContainer from '../../containers/vanbandilisting/list-vanbandilisting'
import VanBanNBListingContainer from '../../containers/vanbannblisting/list-vanbannb'

export default function DIListingPage() {
  return (
    <>
      <Head>
        <title>Văn bản nội bộ</title>
      </Head>
      <VanBanNBListingContainer />
    </>
  )
}

DIListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
