import Head from 'next/head'
import DashboardLayout from '../../../components/layout-dms/dashboard'
import AppSettingLayout from '../../../components/setting-layout'
import Userscontainer from '../../../containers/settings/users/users_list'

export default function UsersListingPage() {
  return (
    <>
      <Head>
        <title> Quản lý văn bản </title>
      </Head>
      <Userscontainer />
    </>
  )
}

UsersListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
