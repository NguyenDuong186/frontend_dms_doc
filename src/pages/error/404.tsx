import { Button, Result } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import DashboardLayout from '../../components/layout-dms/dashboard'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => router.push('/')}>
            Back Home
          </Button>
        }
      />
    </>
  )
}

Page.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
