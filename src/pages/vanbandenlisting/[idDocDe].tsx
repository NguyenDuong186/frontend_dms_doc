import Head from 'next/head'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/layout-dms/dashboard'
import VanBanDenDetailContainer from '../../containers/vanbandenlisting/detail-vanbanden'

export default function VanBanDenDetailPage() {
  const router = useRouter()
  const { idDocDe } = router.query
  return (
    <>
      <Head>
        <title>Chi tiết văn bản đến</title>
      </Head>
      {idDocDe ? <VanBanDenDetailContainer idDocDe={idDocDe} /> : ''}
    </>
  )
}

VanBanDenDetailPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
