import Icon from '@ant-design/icons'
import { Avatar, Breadcrumb, Button, Card, List, Modal, Popconfirm, Row, Spin, Table } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillFolderAdd } from 'react-icons/ai'
import { UseLoginController } from '../../../login/controller'
import CreateDepartment from '../add_department'
import { UseDepartmentController } from './controller'
import { useRouter } from 'next/router'

type Department = {
  id: number
  title: string
  department_code: string
  van_thu: any
}
export default function Departmentscontainer() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [isModalCreateDepartment, setIsModalCreateDepartment] = useState(false)
  const controller = UseDepartmentController()
  const user = UseLoginController().state.currentUser
  const { listDepartment, loading } = controller.state
  useEffect(() => {
    if (user.role === 'Admin') {
      controller.getAllDepartment().then(() => setTimeout(() => setIsLoading(false), 2000))
    } else router.push('/error/404')
  }, [])
  const handlerDeletedDepartment = (id: any) => {
    controller.deleteDepartment(id)
  }
  const createModalDepartment = (
    <Modal
      title="Thêm mới đơn vị ban hành"
      visible={isModalCreateDepartment}
      onCancel={() => setIsModalCreateDepartment(false)}
      footer={false}
    >
      <CreateDepartment onClose={() => setIsModalCreateDepartment(false)} />
    </Modal>
  )
  const columns = [
    {
      title: 'STT',
      width: 100,
      editable: false,
      render: (text: any, record: Department, index: any) => <p>{index + 1}</p>,
    },
    {
      title: 'Đơn vị',
      dataIndex: 'title',
      editable: true,
      width: 600,
      render: (text: any, record: any, index: any) => (
        <Link href={`/settings/departmentslist/${record.id}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: 'Văn thư',
      dataIndex: 'van_thu',
      editable: true,
      width: 200,
      render: (data: any) => (
        <>
          {data ? (
            <Avatar style={{ backgroundColor: '#bde0fe', verticalAlign: 'middle' }} size="large" gap={4}>
              {data.name?.[0].toUpperCase()}
              {data.name?.[data.name.length - 1]}
            </Avatar>
          ) : (
            ''
          )}
        </>
      ),
    },
    {
      title: 'Hành động',
      dataIndex: 'Action',
      width: 150,
      render: (data: any, record: Department, index: any) => (
        <EditModalDepartment record={record} onDeleteItem={handlerDeletedDepartment} />
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
        <div>
          <div className="py-2">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <span>Thiết lập</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Đơn vị ban hành</Breadcrumb.Item>
            </Breadcrumb>
            <div className=" p-3 bg-white justify-between">
              <div className="text-black font-medium text-lg"> Thiết lập đơn vị ban hành</div>
              <div>
                <Button type="primary" className="my-2" onClick={() => setIsModalCreateDepartment(true)}>
                  <AiFillFolderAdd className="mr-2" />
                  Thêm mới
                </Button>
                {createModalDepartment}
              </div>
            </div>
            <Table size="small" columns={columns} dataSource={listDepartment} loading={loading} />
          </div>
        </div>
      )}
    </>
  )
}

type RecordEditModalLayout = {
  record: any
  onDeleteItem: any
}

function EditModalDepartment({ record, onDeleteItem }: RecordEditModalLayout) {
  const [isModalEditDepartment, setIsModalEditDepartment] = useState(false)
  return (
    <>
      <Button onClick={() => setIsModalEditDepartment(true)} style={{ marginRight: '5px' }}>
        Sửa
      </Button>
      <Modal
        title="Chỉnh sửa đơn vị ban hành"
        visible={isModalEditDepartment}
        onCancel={() => setIsModalEditDepartment(false)}
        footer={false}
      >
        <CreateDepartment defaultValues={record} typeEdit={true} onClose={() => setIsModalEditDepartment(false)} />
      </Modal>
      <Button onClick={() => onDeleteItem(record.id)}>Xóa</Button>
    </>
  )
}
