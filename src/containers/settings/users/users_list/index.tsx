import { Avatar, Button, List, Modal, Row, Spin, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillFolderAdd } from 'react-icons/ai'
import { text } from 'stream/consumers'
import { PlusSmallIcon } from '../../../../components/CustomIcon'
import CreateUser from '../add_user'
import { UseUserController } from './controller'

type User = {
  id: number
  name: string
  email: string
  password: string
  job_title: string
  department: string
}

export default function Usercontainer() {
  const [isLoading, setIsLoading] = useState(true)
  const [isModalCreateUser, setIsModalCreateUser] = useState(false)
  const controller = UseUserController()
  const { listUser, loading } = controller.state
  useEffect(() => {
    async function fetchData() {
      await controller.getAllUser().then(() => setTimeout(() => setIsLoading(false), 2000))
    }
    fetchData()
  }, [])

  const handlerDeletedUser = (id: any) => {
    controller.deleteUser(id)
  }

  const createModalLayout = (
    <Modal
      title="Thêm mới người dùng"
      visible={isModalCreateUser}
      onCancel={() => setIsModalCreateUser(false)}
      footer={false}
    >
      <CreateUser onClose={() => setIsModalCreateUser(false)} />
    </Modal>
  )

  const columns = [
    {
      title: 'STT',
      width: 70,
      editable: false,
      render: (text: any, record: User, index: any) => <p>{index + 1}</p>,
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
      editable: true,
      width: 250,
      required: true,
    },
    {
      title: 'email',
      dataIndex: 'email',
      editable: true,
      required: true,
      width: 250,
    },
    {
      title: 'Chức vụ',
      dataIndex: 'job_title',
      editable: true,
      width: 250,
    },
    {
      title: 'Phòng ban',
      dataIndex: 'department',
      editable: true,
      width: 250,
      render: (value: any) => <span>{value?.title}</span>,
    },
    {
      title: 'Hành động',
      dataIndex: 'Action',
      width: 180,
      render: (_: any, record: User, index: any) => (
        <EditModalLayout record={record} onDeleteItem={handlerDeletedUser} />
      ),
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
            <div className="text-black font-medium text-lg"> Thiết lập người dùng hệ thống</div>
            <div>
              <Button type="primary" className="my-2" onClick={() => setIsModalCreateUser(true)}>
                <AiFillFolderAdd className="mr-2" />
                Thêm mới
              </Button>
              {createModalLayout}
            </div>
          </div>

          <Table size="small" columns={columns} dataSource={listUser} loading={loading} />
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
  const [isModalEditUser, setIsModalEditUser] = useState(false)
  return (
    <>
      <Button onClick={() => setIsModalEditUser(true)} style={{ marginRight: '5px' }}>
        Sửa
      </Button>
      <Modal
        title="Chỉnh sửa người dùng"
        visible={isModalEditUser}
        onCancel={() => setIsModalEditUser(false)}
        footer={false}
      >
        <CreateUser onClose={() => setIsModalEditUser(false)} defaultValues={record} typeEdit={true} />
      </Modal>
      <Button onClick={() => onDeleteItem(record.id)}>Xóa</Button>
    </>
  )
}
