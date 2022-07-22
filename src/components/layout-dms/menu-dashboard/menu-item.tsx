import Link from 'next/link'
import { MenuProps } from 'antd'
import { ReactNode, useEffect } from 'react'
import Router from 'next/router'
import { HiOutlineLogout, HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { IoDocumentsOutline, IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineTags } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { GrDocumentTransfer } from 'react-icons/gr'

export const menuPages: MenuProps['items'] = [
  {
    label: 'Quản lý văn bản đến',
    key: 'item-0',
    icon: <GrDocumentTransfer />,
    children: [
      {
        label: setLabel('Văn bản đến', '/vanbandenlisting'),
        key: 'item-0a',
        icon: <IoDocumentsOutline />,
      },
      {
        label: setLabel('Văn bản đến cần xử lý', '/tasklisting'),
        key: 'item-0b',
        icon: <IoDocumentsOutline />,
      },
    ],
  },
  {
    label: setLabel('Văn bản đi', '/vanbandilisting'),
    key: 'item-1',
    icon: <IoDocumentsOutline />,
  },
  {
    label: setLabel('Văn bản điều hành', '/vanbandhlisting'),
    key: 'item-2',
    icon: <IoDocumentsOutline />,
  },
  {
    label: setLabel('Văn bản nội bộ', '/vanbannblisting'),
    key: 'item-3',
    icon: <HiOutlineDocumentDuplicate />,
  },
  {
    label: setLabel('Thiết lập', '/settings/argencylist'),
    key: 'item-4',
    icon: <IoSettingsOutline />,
    children: [
      {
        label: setLabel('Cơ quan bên ngoài', '/settings/argencylist'),
        key: 'item-4a',
        icon: <IoDocumentsOutline />,
      },
      {
        label: setLabel('Đơn vị ban hành', '/settings/departmentslist'),
        key: 'item-4b',
        icon: <IoDocumentsOutline />,
      },
      {
        label: setLabel('Loại văn bản', '/settings/tagslist'),
        key: 'item-4c',
        icon: <AiOutlineTags />,
      },
      {
        label: setLabel('Người dùng hệ thống', '/settings/userslist'),
        key: 'item-4d',
        icon: <BiUserCircle />,
      },
    ],
  },
]
export const menuUser: MenuProps['items'] = [
  {
    label: 'Quản lý văn bản đến',
    key: 'item-0',
    icon: <GrDocumentTransfer />,
    children: [
      {
        label: setLabel('Văn bản đến', '/vanbandenlisting'),
        key: 'item-0a',
        icon: <IoDocumentsOutline />,
      },
      {
        label: setLabel('Văn bản đến cần xử lý', '/tasklisting'),
        key: 'item-0b',
        icon: <IoDocumentsOutline />,
      },
    ],
  },
  {
    label: setLabel('Văn bản đi', '/vanbandilisting'),
    key: 'item-1',
    icon: <IoDocumentsOutline />,
  },
  {
    label: setLabel('Văn bản điều hành', '/vanbandhlisting'),
    key: 'item-2',
    icon: <IoDocumentsOutline />,
  },
  {
    label: setLabel('Văn bản nội bộ', '/vanbannblisting'),
    key: 'item-3',
    icon: <HiOutlineDocumentDuplicate />,
  },
]

export const menuLanguage: MenuProps['items'] = [
  {
    label: 'Vietnam',
    key: 'vn',
    icon: <span>🇻🇳</span>,
  },
  {
    label: 'English',
    key: 'en',
    icon: <span>🇺🇸</span>,
  },
]
function deleteToken() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('currentUser')
  Router.replace('/login')
}
export const menuAccount: MenuProps['items'] = [
  {
    label: setLabel('Đăng xuất', '/login'),
    key: 'logout',
    icon: <HiOutlineLogout />,
    onClick: () => deleteToken(),
  },
]

function setLabel(label: string, url: string): ReactNode {
  return (
    <Link href={url}>
      <a>{label}</a>
    </Link>
  )
}
