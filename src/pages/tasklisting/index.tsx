import Head from 'next/head'
import Link from 'next/link'
import DashboardLayout from '../../components/layout-dms/dashboard'
import TaskListingContainer from '../../containers/tasklisting/list-tasklisting'

export default function TaskListingPage() {
  return (
    <>
      <Head>
        <title> Văn bản đến cần xử lý </title>
      </Head>
      <TaskListingContainer />
    </>
  )
}

TaskListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
