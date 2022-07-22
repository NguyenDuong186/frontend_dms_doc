import Head from 'next/head'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/layout-dms/dashboard'
import VanBanDHDetailContainer from '../../containers/vanbandhlisting/detail-vanbandh'

export default function VanBanDHListingPage() {
  const router = useRouter()
  const { idDHDoc } = router.query
  return (
    <>
      <Head>
        <title>Văn bản điều hành</title>
      </Head>
      {idDHDoc ? <VanBanDHDetailContainer id={idDHDoc} /> : ''}
    </>
  )
}

VanBanDHListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
