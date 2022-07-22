import Head from 'next/head'
import Link from 'next/link'
import DashboardLayout from '../../components/layout-dms/dashboard'
// import TaskListingContainer from '../../containers/tasklisting/list-tasklisting'

export default function SettingListingPage() {
  return (
    <>
      <Head>
        <title> Quản lý văn bản </title>
      </Head>
      {/* <TaskListingContainer /> */}
    </>
  )
}

SettingListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
