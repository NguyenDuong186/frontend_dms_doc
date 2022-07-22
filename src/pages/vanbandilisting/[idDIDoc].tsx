import Head from 'next/head'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/layout-dms/dashboard'
import DIDetailContainer from '../../containers/vanbandilisting/detail-vanbandi'

export default function DIListingPage() {
  const router = useRouter()
  const { idDIDoc } = router.query
  return (
    <>
      <Head>
        <title>Văn bản đi</title>
      </Head>
      {idDIDoc ? <DIDetailContainer id={idDIDoc} /> : ''}
    </>
  )
}

DIListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
