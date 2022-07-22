import Head from 'next/head'
import DashboardLayout from '../../../components/layout-dms/dashboard'
import AppSettingLayout from '../../../components/setting-layout'
import Tagscontainer from '../../../containers/settings/tags/tags_list'

export default function TagsListingPage() {
  return (
    <>
      <Head>
        <title> Quản lý văn bản </title>
      </Head>
      <Tagscontainer />
    </>
  )
}

TagsListingPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
