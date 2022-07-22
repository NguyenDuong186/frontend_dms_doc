import Link from 'next/link'
import { Table } from 'antd'
import { useEffect } from 'react'
import { UseExpiredListController } from './controller'
import ExpireDocFilter from '../filter-expiredoc'
import FilterDoc from '../../../components/filter/FilterDoc'

export default function TaskListingContainer() {
  const controller = UseExpiredListController()
  const { data, loading } = controller.state
  useEffect(() => {
    controller.getAllData()
  }, [])
  const columns = [
    {
      title: 'Ngày ban hành',
      width: 150,
      dataIndex: 'ngay_ban_hanh',
      sorter: true,
    },
    {
      title: 'Số ký hiệu',
      width: 190,
      dataIndex: 'so_ky_hieu',
      sorter: true,
      render: (text: string) => (
        <Link href={`/expiredlisting/${11}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: 'Trích yếu',
      width: 350,
      dataIndex: 'trich_yeu',
      sorter: true,
    },
    {
      title: 'Loại văn bản',
      width: 150,
      dataIndex: 'loai_van_ban',
      sorter: true,
    },
    {
      title: 'Đơn vị ban hành',
      width: 200,
      dataIndex: 'don_vi_vao_so',
      sorter: true,
    },
    {
      title: 'Bộ phận soạn thảo',
      sortable: true,
      width: 180,
      dataIndex: 'don_vi_soan_thao',
    },
    {
      title: 'Ngày hiệu lực',
      width: 150,
      dataIndex: 'ngay_hieu_luc',
      sorter: true,
    },
    {
      title: 'Tình trạng hiệu lực',
      width: 160,
      dataIndex: 'tinh_trang_hieu_luc',
      sorter: true,
    },
    {
      title: 'Độ mật',
      width: 120,
      dataIndex: 'do_mat',
      sorter: true,
    },

    {
      title: 'Người ký',
      width: 180,
      dataIndex: 'nguoi_ky',
      sorter: true,
    },
  ]
  return (
    <>
      <div className="flex items-center mb-2 justify-between">
        <div className="text-black font-medium text-lg mb-3">Quản lý văn bản đến hết hiệu lực </div>
        <FilterDoc>
          <ExpireDocFilter />
        </FilterDoc>
      </div>

      <div className="mx-auto">
        <Table loading={loading} scroll={{ x: 1500, y: 600 }} columns={columns} dataSource={data} />
      </div>
    </>
  )
}
