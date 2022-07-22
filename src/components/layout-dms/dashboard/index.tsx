import { Button, Layout, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { UseLoginController } from '../../../containers/login/controller'
import DashboardHeader from '../header-dashboard'
import MenuDashboardLayout from '../menu-dashboard'
type DashBoardLayout = {}

export default function DashboardLayout({ children }: React.PropsWithChildren<DashBoardLayout>): JSX.Element {
  const [collapsed, setCollapsed] = useState(false)
  const loginController = UseLoginController()
  const { isAuthentication, loading } = loginController.state
  useEffect(() => {
    loginController.getIsAuth()
  }, [])
  return (
    <>
      {!loading && isAuthentication ? (
        <Layout style={{ minHeight: '100vh' }}>
          <DashboardHeader />
          <Layout>
            <MenuDashboardLayout collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout
              className={`mt-16 ${collapsed ? 'ml-[80px]' : 'ml-[200px]'}`}
              style={{
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1',
                transitionDuration: '300ms',
              }}
            >
              <Layout.Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>{children}</Layout.Content>
              <Layout.Footer style={{ textAlign: 'center' }}>MyDMS @2022 Created DuongNguyen</Layout.Footer>
            </Layout>
          </Layout>
          <Button
            style={{
              overflow: 'auto',
              position: 'fixed',
              left: 10,
              bottom: 10,
              zIndex: 101,
              borderRadius: '0.375rem',
              backgroundColor: '#fff',
            }}
            type="link"
            size="large"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          </Button>
        </Layout>
      ) : (
        <Row style={{ minHeight: 400, width: '100%' }} align="middle" justify="center">
          <Spin size="large" tip="loading..." />
        </Row>
      )}
    </>
  )
}
