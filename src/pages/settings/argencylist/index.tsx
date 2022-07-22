import Head from 'next/head'
import DashboardLayout from '../../../components/layout-dms/dashboard'
import Argencycontainer from '../../../containers/settings/argencys/argency_list'

export default function ArgencyListingPage() {
  return (
    <>
      <Head>
        <title> Quản lý văn bản </title>
      </Head>
      <Argencycontainer />
    </>
  )
}

ArgencyListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
