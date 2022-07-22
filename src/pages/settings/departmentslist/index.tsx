import Head from 'next/head'
import DashboardLayout from '../../../components/layout-dms/dashboard'
import Departmentscontainer from '../../../containers/settings/departments/departments_list'

export default function DepartmentsListingPage() {
  return (
    <>
      <Head>
        <title> Quản lý văn bản </title>
      </Head>
      <Departmentscontainer />
    </>
  )
}

DepartmentsListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
