import { Button, Modal, Row, Spin, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillFolderAdd } from 'react-icons/ai'
import { PlusSmallIcon } from '../../../../components/CustomIcon'
import { UseLoginController } from '../../../login/controller'
import CreateArgency from '../add_argency'
import { UseArgencyController } from './controller'
import { useRouter } from 'next/router'
type Argency = {
  id: number
  title: string
}

export default function Argencycontainer() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isModalCreateArgency, setIsModalCreateArgency] = useState(false)
  const controller = UseArgencyController()
  const loginController = UseLoginController()
  const { listArgency, loading } = controller.state
  const user = loginController.state.currentUser
  useEffect(() => {
    if (user.role === 'Admin') {
      controller.getAllArgency().then(() => setTimeout(() => setIsLoading(false), 2000))
    } else router.push('/error/404')
  }, [])

  const handlerDeletedArgency = (id: any) => {
    controller.deleteArgency(id)
  }

  const createModalLayout = (
    <Modal
      title="Thêm mới cơ quan bên ngoài"
      visible={isModalCreateArgency}
      onCancel={() => setIsModalCreateArgency(false)}
      footer={false}
    >
      <CreateArgency
        onClose={() => {
          setIsModalCreateArgency(false)
        }}
      />
    </Modal>
  )

  const columns = [
    {
      title: 'STT',
      width: 180,
      editable: false,
      render: (text: any, record: any, index: any) => <p>{index + 1}</p>,
    },
    {
      title: 'Tên',
      dataIndex: 'title',
      editable: true,
      width: 800,
      required: true,
    },
    {
      title: 'Hành động',
      dataIndex: 'Action',
      width: 180,
      render: (_: any, record: Argency, index: any) => {
        return <EditModalLayout record={record} onDeleteItem={handlerDeletedArgency} />
      },
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
            <div className="text-black font-medium text-lg"> Thiết lập cơ quan bên ngoài</div>
            <div>
              <Button
                type="primary"
                className=" my-2"
                onClick={() => {
                  setIsModalCreateArgency(true)
                }}
              >
                <AiFillFolderAdd className="mr-2" />
                Thêm mới
              </Button>
              {createModalLayout}
            </div>
          </div>
          <Table size="small" columns={columns} dataSource={listArgency} loading={loading} />
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
  const [isModalEditArgency, setIsModalEditArgency] = useState(false)
  return (
    <>
      <Button onClick={() => setIsModalEditArgency(true)} style={{ marginRight: '5px' }}>
        Sửa
      </Button>
      <Modal
        title="Chỉnh sửa cơ quan bên ngoài"
        visible={isModalEditArgency}
        onCancel={() => setIsModalEditArgency(false)}
        footer={false}
      >
        <CreateArgency onClose={() => setIsModalEditArgency(false)} defaultValues={record} typeEdit={true} />
      </Modal>
      <Button onClick={() => onDeleteItem(record.id)}>Xóa</Button>
    </>
  )
}
