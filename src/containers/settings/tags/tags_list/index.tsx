import { Button, Modal, Row, Spin, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillFolderAdd } from 'react-icons/ai'
import { PlusSmallIcon } from '../../../../components/CustomIcon'
import { UseLoginController } from '../../../login/controller'
import CreateTag from '../add_tag'
import { UseTagController } from './controller'
import { useRouter } from 'next/router'

type Tag = {
  id: number
  title: string
  phan_nhom_van_ban: string
  tien_to_sinh_ma: string
}

export default function Tagcontainer() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const user = UseLoginController().state.currentUser
  const [isModalCreateTag, setIsModalCreateTag] = useState(false)
  const controller = UseTagController()
  const { listTag, loading } = controller.state

  useEffect(() => {
    if (user.role === 'admin') {
      controller.getAllTag().then(() => setTimeout(() => setIsLoading(false), 2000))
    } else router.push('/error/404')
  }, [])

  const handlerDeletedTag = (id: any) => {
    controller.deleteTag(id)
  }

  const createModalLayout = (
    <Modal
      title="Thêm mới loại văn bản"
      visible={isModalCreateTag}
      onCancel={() => setIsModalCreateTag(false)}
      footer={false}
    >
      <CreateTag onClose={() => setIsModalCreateTag(false)} />
    </Modal>
  )

  const columns = [
    {
      title: 'STT',
      width: 100,
      editable: false,
      render: (text: any, record: any, index: number) => <p>{index + 1}</p>,
    },
    {
      title: 'Tên',
      dataIndex: 'title',
      editable: true,
      minWidth: 300,
      width: 700,
      required: true,
    },
    {
      title: 'Loại văn bản',
      dataIndex: 'phan_nhom_van_ban',
      editable: true,
      required: true,
      width: 180,
    },
    {
      title: 'Tiền tố sinh mã',
      dataIndex: 'tien_to_sinh_ma',
      editable: true,
      width: 160,
    },
    {
      title: 'Hành động',
      dataIndex: 'Action',
      width: 180,
      render: (_: any, record: Tag, index: any) => <EditModalLayout record={record} onDeleteItem={handlerDeletedTag} />,
    },
  ]

  return (
    <>
      {isLoading ? (
        <Row style={{ minHeight: 300, width: '100%' }} align="middle" justify="center">
          <Spin size="large" tip="loading..." />
        </Row>
      ) : (
        <div className=" py-5">
          <div className=" p-3 bg-white justify-between">
            <div className="text-black font-medium text-lg"> Thiết lập loại văn bản</div>
            <div>
              <Button type="primary" className="my-2" onClick={() => setIsModalCreateTag(true)}>
                <AiFillFolderAdd className="mr-2" />
                Thêm mới
              </Button>
              {createModalLayout}
            </div>
          </div>
          <Table size="small" columns={columns} dataSource={listTag} loading={loading} />
        </div>
      )}
    </>
  )
}

type RecordEditModalLayout = {
  record: any
  onDeleteItem: any
}

function EditModalLayout({ record, onDeleteItem }: RecordEditModalLayout) {
  const [isModalEditTag, setIsModalEditTag] = useState(false)
  return (
    <>
      <Button onClick={() => setIsModalEditTag(true)} style={{ marginRight: '5px' }}>
        Sửa
      </Button>
      <Modal
        title="Chỉnh sửa loại văn bản"
        visible={isModalEditTag}
        onCancel={() => setIsModalEditTag(false)}
        footer={false}
      >
        <CreateTag onClose={() => setIsModalEditTag(false)} defaultValues={record} typeEdit={true} />
      </Modal>
      <Button onClick={() => onDeleteItem(record.id)}>Xóa</Button>
    </>
  )
}
