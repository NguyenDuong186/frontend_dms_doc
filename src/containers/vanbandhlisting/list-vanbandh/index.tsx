import { MoreOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, message, Modal, Row, Space, Table } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { formatDateTime } from '../../../common/helpers/formatDateTime'
import { AddIcon, DocumentSigned, TrashIcon } from '../../../components/CustomIcon'
import FilterDoc from '../../../components/filter/FilterDoc'
import { UseLoginController } from '../../login/controller'
import DHDocFilter from '../../vanbandhlisting/filter-dhdoc'
import DHCreate from '../render-vanbandh/DHCreate'
import { UseDHListController } from './controller'

type Props = {}

export default function VanBanDHListingContainer({}: Props) {
  const [selectedRow, setSelectedRow] = useState([])
  const [modalCreateDocDH, setModalCreateDocDH] = useState(false)
  const controller = UseDHListController()
  const loginController = UseLoginController()
  const role = loginController.state.currentUser?.role
  const { listDocDH, loading } = controller.state
  const dataTable = listDocDH.map((item) => ({ ...item, key: item.id }))

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
      sorter: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'Số ký hiệu',
      width: 190,
      dataIndex: 'so_ky_hieu',
      sorter: true,
      render: (text: string, record: any) => (
        <Link href={`/vanbandhlisting/${record.id}`}>
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
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Đơn vị ban hành',
      width: 200,
      dataIndex: 'don_vi_vao_so',
      sorter: true,
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Ngày hiệu lực',
      width: 150,
      dataIndex: 'ngay_hieu_luc',
      sorter: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'Tình trạng hiệu lực',
      width: 160,
      dataIndex: 'tinh_trang_hieu_luc',
      sorter: true,
      render: (value: any) => (
        <span>{value === 'hieu_luc' ? 'Hiệu lực' : value === 'het_hieu_luc' ? 'Hết hiệu lực' : ''}</span>
      ),
    },
    {
      title: 'Độ mật',
      width: 120,
      dataIndex: 'do_mat',
      sorter: true,
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
      title: 'Người ký',
      width: 180,
      dataIndex: 'nguoi_ky',
      sorter: true,
    },
    {
      title: 'Ngày ký',
      width: 120,
      dataIndex: 'ngay_ky',
      sorter: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'Ngày hết hiệu lực',
      width: 160,
      dataIndex: 'ngay_het_hieu_luc',
      sorter: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'Ghi chú',
      width: 250,
      dataIndex: 'ghi_chu',
      sorter: true,
    },
  ]

  return (
    <>
      <div className="flex items-center mb-2 justify-between">
        <div>
          <div className="text-black font-medium text-lg mb-3">Quản lý văn bản điều hành </div>
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
                title="Tạo mới văn bản điều hành"
                width={1000}
                footer={false}
                visible={modalCreateDocDH}
                onCancel={() => setModalCreateDocDH(false)}
              >
                <DHCreate />
              </Modal>
            </>
          )}

          {!hasSelected ? (
            <FilterDoc>
              <DHDocFilter />
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
          loading={loading}
          scroll={{ x: 1500, y: 600 }}
          columns={columns}
          dataSource={dataTable}
          rowSelection={rowSelection}
        />
      </div>
    </>
  )
}
