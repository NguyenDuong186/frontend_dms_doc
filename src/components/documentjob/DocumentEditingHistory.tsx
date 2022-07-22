import { Table } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { formatDateTime } from '../../common/helpers/formatDateTime'
import { UseHistoryEditController } from '../../containers/historyeditdoc/controller'

type Props = {
  id?: any
}

export default function DocumentEditingHistory({ id }: Props) {
  const controller = UseHistoryEditController()
  const { listEditHistory, loading } = controller.state
  useEffect(() => {
    controller.getListHistory(id)
  }, [listEditHistory])
  const columns = [
    {
      title: 'Lần',
      width: 80,
      render: (text: any, record: any, index: any) => <span>lần {index + 1}</span>,
    },
    {
      title: 'Thời gian chỉnh sửa',
      width: 150,
      dataIndex: 'createdAt',
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY HH:mm')}</span>,
    },
    {
      title: 'Nội dung chỉnh sửa',
      width: 200,
      dataIndex: 'update_detail',
    },
    {
      title: 'Người thực hiện',
      width: 150,
      dataIndex: 'editor',
      render: (value: any) => <span>{value?.name}</span>,
    },
  ]
  return (
    <div className="mx-auto">
      <Table scroll={{ y: 600 }} columns={columns} dataSource={listEditHistory} loading={loading} />
    </div>
  )
}
