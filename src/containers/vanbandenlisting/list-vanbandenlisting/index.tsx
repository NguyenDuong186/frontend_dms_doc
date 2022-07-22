import Link from 'next/link'
import { Table, Space, Button, Drawer, Row, Modal, Dropdown, Menu, message } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { UseDEListController } from './controller'
import VanBanDenFilter from '../filter-dedoc'
import FilterDoc from '../../../components/filter/FilterDoc'
import { formatDateTime } from '../../../common/helpers/formatDateTime'
import DECreate from '../render-vanbande/DECreate'
import { PlusCircleOutlined } from '@ant-design/icons'
import moment from 'moment'
import XLSX from 'xlsx'
import { UseLoginController } from '../../login/controller'

export default function VanBanDenListingContainer() {
  const [selectedRow, setSelectedRow] = useState([])
  const [modalCreateDocDE, setModalCreateDocDE] = useState(false)
  const controller = UseDEListController()
  const loginController = UseLoginController()
  const role = loginController.state.currentUser?.role
  const { listDocDE, loading } = controller.state
  const dataTable = listDocDE.map((item) => ({ ...item, key: item.id, is_deleted: true }))
  useEffect(() => {
    controller.getAllData()
    loginController.getIsAuth()
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
      width: 150,
      dataIndex: 'so_ky_hieu',
      sorter: true,
      render: (text: string, record: any) => (
        <Link href={`/vanbandenlisting/${record.id}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: 'Trích yếu',
      width: 350,
      dataIndex: 'trich_yeu',
      sorter: true,
      render: (text: string, record: any) => (
        <Link href={`/vanbandenlisting/${record.id}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: 'Vào sổ đơn vị',
      width: 200,
      dataIndex: 'don_vi_vao_so',
      sorter: true,
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Nơi gửi',
      width: 250,
      dataIndex: 'co_quan_ban_hanh',
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
      title: 'Trích yếu',
      width: 350,
      dataIndex: 'trich_yeu',
      sorter: true,
    },
    {
      title: 'Ngày đến',
      width: 120,
      dataIndex: 'ngay_den',
      sorter: true,
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
      title: 'Độ mật',
      width: 120,
      dataIndex: 'do_mat',
      sorter: true,
      render: (value: any) => (
        <span>
          {value === 'mat' ? 'Mật' : value === 'thuong' ? 'Thường' : value === 'tuyet_mat' ? 'Tuyệt mật' : ''}
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

  const exportExcel = () => {
    try {
      let header: string[] = []
      header = [
        'Vào sổ đơn vị',
        'Nơi gửi',
        'Số ký hiệu',
        'Ngày ban hành',
        'Loại văn bản',
        'Trích yếu',
        'Ngày đến',
        'Độ khẩn',
        'Độ mật',
        'Số trang',
        'Ghi chú',
      ]
      const finalData = []
      finalData.push(header)
      dataTable.forEach((c) => {
        const displayData = []
        displayData.push(c.don_vi_vao_so ? c.don_vi_vao_so : '')
        displayData.push(c.co_quan_ban_hanh ? c.co_quan_ban_hanh : '')
        displayData.push(c.so_ky_hieu ? c.so_ky_hieu : '')
        displayData.push(c.ngay_ban_hanh ? formatDateTime(c?.ngay_ban_hanh) : '')
        displayData.push(c.loai_van_ban ? c.loai_van_ban : '')
        displayData.push(c.trich_yeu ? c.trich_yeu : '')
        displayData.push(c.nagy_den ? formatDateTime(c?.ngay_den) : '')
        displayData.push(c.do_khan ? c.do_khan : '')
        displayData.push(c.do_mat ? c.do_mat : '')
        displayData.push(c.so_trang ? c.so_trang : '')
        displayData.push(
          c.ghi_chu
            ? c.ghi_chu
                .replace(/<[^>]+>/g, '')
                .replace(/&#160;/g, ' ')
                .replace(/&#58;/g, ':')
            : ''
        )
        finalData.push(displayData)
      })
      const ws = XLSX.utils?.aoa_to_sheet(finalData)
      const wb = XLSX.utils?.book_new()
      console.log('ws:', ws)
      console.log('wb:', wb)
      XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
      XLSX.writeFile(wb, `QuanLyVanBan_${moment(new Date()).format('DD/MM/YYYY')}.xlsx`)
      message.success('Xuất excel thành công !')
    } catch (error) {
      console.log(error)
      message.error('Xuất excel lỗi !')
    }
  }

  return (
    <>
      <div className="flex items-center mb-2 justify-between">
        <div>
          <div className="text-black font-medium text-lg mb-3">Quản lý văn bản đến</div>
        </div>
        <Space>
          {role === 'User' ? undefined : (
            <>
              <Button
                className="font-medium"
                icon={<PlusCircleOutlined />}
                type="primary"
                onClick={() => setModalCreateDocDE(true)}
              >
                Tạo mới
              </Button>
              <Modal
                title="Tạo mới văn bản đến"
                width={1000}
                footer={false}
                visible={modalCreateDocDE}
                onCancel={() => setModalCreateDocDE(false)}
              >
                <DECreate setModalCreateDocDE={setModalCreateDocDE} />
              </Modal>
            </>
          )}
          {!hasSelected ? (
            <FilterDoc>
              <VanBanDenFilter />
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
