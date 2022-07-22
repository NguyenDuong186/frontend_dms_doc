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
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
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
