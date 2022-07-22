import Head from 'next/head'
import AppSettingLayout from '../../../components/setting-layout'
import DepartmentDetail from '../../../containers/settings/departments/detail_department'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../components/layout-dms/dashboard'
export default function DepartmentsDetailPage() {
  const router = useRouter()
  const { idDepartment } = router.query
  return (
    <>
      <Head>
        <title> Thông tin phòng ban</title>
      </Head>
      {idDepartment ? <DepartmentDetail id={idDepartment} /> : ''}
    </>
  )
}

DepartmentsDetailPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
