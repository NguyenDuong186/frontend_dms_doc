import { Table } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { formatDateTime } from '../../common/helpers/formatDateTime'
import { UseTaskListController } from '../../containers/tasklisting/list-tasklisting/controller'

type Props = {
  id: any
}

export default function DocumentTask({ id }: Props) {
  const columns = [
    {
      title: 'Người chuyển',
      width: 200,
      dataIndex: 'nguoi_giao',
      render: (value: any) => <span>{value?.name}</span>,
    },
    {
      title: 'Người xử lý',
      width: 200,
      dataIndex: 'nguoi_xu_ly',
      render: (value: any) => <span>{value?.name}</span>,
    },
    {
      title: 'Người liên quan',
      width: 200,
      dataIndex: 'nguoi_lien_quan',
      render: (value: any) => <span>{value?.name}</span>,
    },
    {
      title: 'Nội dung',
      minWidth: 280,
      ellipsis: true,
      dataIndex: 'noi_dung',
    },
    {
      title: 'Trạng thái',
      width: 130,
      dataIndex: 'status',
      render: (record: any, index: any) => {
        return (
          <span>
            {record?.han_xu_ly && record?.han_xu_ly.isBefore(moment()) && record?.status === 'Đang xử lý'
              ? 'Quá hạn'
              : index.status}
          </span>
        )
      },
    },

    {
      title: 'Hạn xử lý',
      width: 200,
      dataIndex: 'han_xu_ly',
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY HH:mm')}</span>,
    },
    {
      title: 'Thời gian chuyển',
      width: 200,
      dataIndex: 'ngay_giao',
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY HH:mm')}</span>,
    },
    {
      title: 'Ý kiến',
      width: 200,
      ellipsis: true,
      dataIndex: 'y_kien',
    },
  ]
  const controller = UseTaskListController()
  const { data, loading } = controller.state
  useEffect(() => {
    controller.getTaskById(id)
  }, [])
  return (
    <div className="mx-auto">
      <Table scroll={{ x: 1500, y: 600 }} columns={columns} dataSource={data} loading={loading} />
    </div>
  )
}
