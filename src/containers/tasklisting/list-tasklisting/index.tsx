import Link from 'next/link'
import { Table, Tag, Space } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { UseTaskListController } from './controller'
import FilterDoc from '../../../components/filter/FilterDoc'
import TaskingFilter from '../filter-taskingdoc'
import { formatDateTime } from '../../../common/helpers/formatDateTime'
import moment from 'moment'

export default function TaskListingContainer() {
  const columns = [
    {
      title: 'Người chuyển',
      sortable: true,
      width: 200,
      dataIndex: 'nguoi_giao',
      render: (value: any) => <span>{value?.name}</span>,
    },
    {
      title: 'Số ký hiệu',
      width: 150,
      dataIndex: 'so_ky_hieu',
      render: (value: any, record: any) => (
        <Link href={`/vanbandenlisting/${record.van_ban?.id}`}>
          <a>{record?.van_ban?.so_ky_hieu}</a>
          {/* <a>{value?.van_ban?.so_ky_hieu}</a> */}
        </Link>
      ),
    },
    {
      title: 'Nội dung công việc',
      sortable: true,
      width: 200,
      dataIndex: 'noi_dung',
    },
    {
      title: 'Người xử lý',
      sortable: true,
      width: 200,
      dataIndex: 'nguoi_xu_ly',
      render: (value: any) => <span>{value?.name}</span>,
    },
    {
      title: 'Người liên quan',
      sortable: true,
      width: 200,
      dataIndex: 'nguoi_lien_quan',
      render: (value: any) => <span>{value?.name}</span>,
    },
    {
      title: 'Ngày giao',
      width: 140,
      dataIndex: 'ngay_giao',
      sortable: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY HH:mm')}</span>,
    },
    {
      title: 'Hạn xử lý',
      width: 140,
      dataIndex: 'han_xu_ly',
      sortable: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY HH:mm')}</span>,
    },
  ]
  const controller = UseTaskListController()
  const { data, loading } = controller.state
  console.log(data)
  useEffect(() => {
    controller.getAllData()
  }, [])

  return (
    <>
      <div className="flex items-center mb-2 justify-between">
        <div className="text-black font-medium text-lg mb-3">Quản lý văn bản đến cần xử lý </div>
        <FilterDoc>
          <TaskingFilter />
        </FilterDoc>
      </div>

      <div className="mx-auto">
        <Table loading={loading} scroll={{ y: 600 }} columns={columns} dataSource={data} />
      </div>
    </>
  )
}
