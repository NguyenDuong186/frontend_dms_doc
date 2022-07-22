import Link from 'next/link'
import { Table, Button, Row, Modal, Space, message } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { UseDIListController } from './controller'
import { AddIcon, TrashIcon } from '../../../components/CustomIcon'
import VanBanDiFilter from '../filter-didoc'
import FilterDoc from '../../../components/filter/FilterDoc'
import { formatDateTime } from '../../../common/helpers/formatDateTime'
import DICreate from '../render-vanbandidoc/DICreate'
import { PlusCircleOutlined } from '@ant-design/icons'
import { UseLoginController } from '../../login/controller'
import moment from 'moment'

export default function VanBanDiListingContainer() {
  const [selectedRow, setSelectedRow] = useState([])
  const [modalCreateDocDI, setModalCreateDocDI] = useState(false)
  const controller = UseDIListController()
  const loginController = UseLoginController()
  const role = loginController.state.currentUser?.role
  const { listDocDI, loading } = controller.state
  const dataTable = listDocDI.map((item) => ({ ...item, key: item.id }))
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
        <Link href={`/vanbandilisting/${record.id}`}>
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
      title: 'Bộ phận soạn thảo',
      sortable: true,
      width: 180,
      dataIndex: 'don_vi_soan_thao',
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Cơ quan nhận',
      width: 200,
      dataIndex: 'noi_nhan',
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
      title: 'Loại văn bản',
      width: 150,
      dataIndex: 'loai_van_ban',
      sorter: true,
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Ngày ký',
      width: 120,
      dataIndex: 'ngay_ky',
      sortable: true,
      render: (text: string) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'Độ khẩn',
      width: 120,
      dataIndex: 'do_khan',
      sorter: true,
      render: (value: any) => (
        <span>{value === 'khan' ? 'Khẩn' : value === 'thuong' ? 'Thường' : value === 'hoa_toc' ? 'Hỏa tốc' : ''}</span>
      ),
    },
    {
      title: 'Độ mật',
      width: 120,
      dataIndex: 'do_mat',
      sortable: true,
      render: (value: any) => (
        <span>
          {value === 'mat' ? 'Mật' : value === 'thuong' ? 'Thường' : value === 'Tuyet_mat' ? 'Tuyệt mật' : ''}
        </span>
      ),
    },
    {
      title: 'Số trang',
      width: 80,
      dataIndex: 'so_trang',
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
      <div className="flex items-center mb-3 justify-between">
        <div>
          <div className="text-black font-medium text-lg mb-3">Quản lý văn bản đi </div>
        </div>
        <Space>
          {role === 'User' ? undefined : (
            <>
              <Button
                className="font-medium"
                icon={<PlusCircleOutlined />}
                type="primary"
                onClick={() => setModalCreateDocDI(true)}
              >
                Tạo mới
              </Button>
              <Modal
                title="Tạo mới văn bản đi"
                width={1000}
                footer={false}
                visible={modalCreateDocDI}
                onCancel={() => setModalCreateDocDI(false)}
              >
                <DICreate />
              </Modal>
            </>
          )}

          {!hasSelected ? (
            <FilterDoc>
              <VanBanDiFilter />
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
