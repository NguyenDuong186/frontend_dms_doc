import { FilterOutlined } from '@ant-design/icons'
import { Button, Drawer, Row } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import VanBanDiFilter from '../../containers/vanbandilisting/filter-didoc'
import { AddIcon, FilterIcon } from '../CustomIcon'

type FilterComponentProps = {}

export default function FilterComponent({ children }: React.PropsWithChildren<FilterComponentProps>) {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button type="primary" className="font-medium" onClick={() => setVisible(true)} icon={<FilterOutlined />}>
        Tra cứu
      </Button>
      <Drawer title="Tra cứu văn bản" placement="right" onClose={() => setVisible(false)} visible={visible}>
        {children}
      </Drawer>
    </>
  )
}
