import { MoreOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, message, Modal, Row, Space, Table } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { formatDateTime } from '../../../common/helpers/formatDateTime'
import FilterDoc from '../../../components/filter/FilterDoc'
import { UseLoginController } from '../../login/controller'
import DCDocFilter from '../filter-vanbannb'
import DCCreate from '../render-vanbannb/DCCreate'
import { UseDCListController } from './controller'

type Props = {}

export default function VanBanNBListingContainer({}: Props) {
  const [selectedRow, setSelectedRow] = useState([])
  const [modalCreateDocDH, setModalCreateDocDH] = useState(false)
  const controller = UseDCListController()
  const loginController = UseLoginController()
  const role = loginController.state.currentUser?.role
  const { listDocDC, loading } = controller.state
  const dataTable = listDocDC.map((item) => ({ ...item, key: item.id }))

  useEffect(() => {
    controller.getAllData()
  }, [])
  const onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
    setSelectedRow(selectedRows)
  }
  const rowSelection = {
    selectedRow,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRow.length > 0

  const deleteItems = () => {
    Modal.confirm({
      okText: 'Đồng ý',
      cancelText: 'Hủy',
      title: 'Xác nhận xóa ?',
      onOk: async () => {
        try {
          controller.deleteDoc(selectedRow)
          message.success('Xóa thành công')
        } catch (error) {
          message.error('Xóa thất bại')
        }
      },
      onCancel() {},
    })
  }

  const columns = [
    {
      title: 'Ngày ban hành',
      width: 150,
      dataIndex: 'ngay_ban_hanh',
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'Số ký hiệu',
      width: 190,
      dataIndex: 'so_ky_hieu',

      render: (text: string, record: any) => (
        <Link href={`/vanbannblisting/${record.id}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: 'Trích yếu',
      width: 350,
      dataIndex: 'trich_yeu',
    },
    {
      title: 'Loại văn bản',
      width: 150,
      dataIndex: 'loai_van_ban',

      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Đơn vị ban hành',
      width: 200,
      dataIndex: 'don_vi_vao_so',

      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Độ mật',
      width: 120,
      dataIndex: 'do_mat',

      render: (value: any) => (
        <span>
          {value === 'mat' ? 'Mật' : value === 'thuong' ? 'Thường' : value === 'Tuyet_mat' ? 'Tuyệt mật' : ''}
        </span>
      ),
    },
    {
      title: 'Bộ phận soạn thảo',
      sortable: true,
      width: 180,
      dataIndex: 'don_vi_soan_thao',
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Đơn vị nội bộ',
      sortable: true,
      width: 180,
      dataIndex: 'don_vi_noi_bo',
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Ghi chú',
      width: 250,
      dataIndex: 'ghi_chu',
    },
  ]

  return (
    <>
      <div className="flex items-center mb-2 justify-between">
        <div>
          <div className="text-black font-medium text-lg mb-3">Quản lý văn bản nội bộ </div>
        </div>
        <Space>
          {role === 'User' ? undefined : (
            <>
              <Button
                className="font-medium"
                icon={<PlusCircleOutlined />}
                type="primary"
                onClick={() => setModalCreateDocDH(true)}
              >
                Tạo mới
              </Button>
              <Modal
                title="Tạo mới văn bản nội bộ"
                width={1000}
                footer={false}
                visible={modalCreateDocDH}
                onCancel={() => setModalCreateDocDH(false)}
              >
                <DCCreate />
              </Modal>
            </>
          )}

          {!hasSelected ? (
            <FilterDoc>
              <DCDocFilter />
            </FilterDoc>
          ) : role === 'User' ? undefined : (
            <Button onClick={deleteItems} type="primary">
              Xóa
            </Button>
          )}
        </Space>
      </div>
      <div className="mx-auto">
        <Table
          className="mt-3"
          size="small"
          scroll={{ x: 1500, y: 600 }}
          columns={columns}
          rowSelection={rowSelection}
          dataSource={dataTable}
          loading={loading}
        />
      </div>
    </>
  )
}
