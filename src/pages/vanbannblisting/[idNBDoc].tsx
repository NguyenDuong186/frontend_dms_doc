import Head from 'next/head'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/layout-dms/dashboard'
import NBDetailContainer from '../../containers/vanbannblisting/detail-vanbannb'

export default function DIListingPage() {
  const router = useRouter()
  const { idNBDoc } = router.query
  return (
    <>
      <Head>
        <title>Văn bản nội bộ</title>
      </Head>
      {idNBDoc ? <NBDetailContainer id={idNBDoc} /> : ''}
    </>
  )
}

DIListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
