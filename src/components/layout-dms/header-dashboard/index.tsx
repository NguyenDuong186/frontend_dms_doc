import { Layout, Row, Space, Image, Dropdown, Avatar, MenuProps, Menu } from 'antd'
import React, { useEffect } from 'react'
import { IoLanguage } from 'react-icons/io5'
import { UseLoginController } from '../../../containers/login/controller'
import { menuAccount, menuLanguage } from '../menu-dashboard/menu-item'

type HeaderDashboardProps = {}
const menu = (items: MenuProps['items']) => <Menu className="px-2" items={items} />
export default function DashboardHeader({ children }: React.PropsWithChildren<HeaderDashboardProps>) {
  const loginController = UseLoginController()
  useEffect(() => {
    loginController.getIsAuth()
  }, [])
  const urlAvt = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
  const urlLogo = 'https://cdn-icons-png.flaticon.com/512/6819/6819062.png'
  return (
    <Layout.Header
      className="header"
      style={{
        width: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Row justify="space-between" align="middle" className="text-white">
        <Space className="logo" align="center">
          <Image preview={false} width={30} src={urlLogo} alt="logo" />
          <span className="text-lg font-bold">DMS Doc</span>
        </Space>
        <Space align="center" className="h-full" size="large">
          {/* Change Notify */}
          {/* <Dropdown overlay={NotifyComponent} placement="bottomRight">
              <Badge count={countNotify} className="block" dot>
                <FiBell className="block w-5 h-5 text-white" />
              </Badge>
            </Dropdown> */}
          {/* Change Setting Account */}
          <Dropdown overlay={menu(menuAccount)} placement="bottomLeft">
            <Space size={10} className="cursor-pointer">
              <Avatar size={25} src={urlAvt} />
              <span>{loginController.state.currentUser?.name}</span>
            </Space>
          </Dropdown>
          {/* Change Language */}
          <Dropdown overlay={menu(menuLanguage)} placement="bottomRight" className="cursor-pointer">
            <IoLanguage className="block w-5 h-5" />
          </Dropdown>
        </Space>
      </Row>
    </Layout.Header>
  )
}
