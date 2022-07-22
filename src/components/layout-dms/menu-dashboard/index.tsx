import { Menu, MenuProps, Layout, Button } from 'antd'
import React, { useEffect } from 'react'
import { UseLoginController } from '../../../containers/login/controller'
import { menuPages, menuUser } from './menu-item'

type MenuDashboardLayoutProps = {
  collapsed?: boolean
  setCollapsed?: any
}

export default function MenuDashboardLayout(props: MenuDashboardLayoutProps) {
  const { collapsed, setCollapsed } = props
  const loginController = UseLoginController()
  const role = loginController.state.currentUser?.role
  useEffect(() => {
    loginController.getIsAuth()
  }, [])
  return (
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={200}
      theme="light"
      className="site-layout-background"
      // collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div style={{ flex: '1 1 0%', overflow: 'hidden auto' }}>
        <Menu
          // selectedKeys={[current]}
          mode="inline"
          defaultSelectedKeys={['home']}
          style={{ height: '100%', marginTop: 70 }}
          items={role === 'Admin' ? menuPages : menuUser}
        />
      </div>
    </Layout.Sider>
  )
}
