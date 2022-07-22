import { Button, Modal, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { PlusSmallIcon } from '../../../../components/CustomIcon'
import { UseUserController } from '../../users/users_list/controller'
import { UseDetailDepartmentController } from './controller'
import { Empty } from 'antd'
import ModalAddUser from './modal_adduser'
type Props = {
  id: string | string[]
}

export default function DepartmentDetail({ id }: Props) {
  const [isModalAddUser, setIsModalAddUser] = useState(false)
  const controller = UseDetailDepartmentController()

  useEffect(() => {
    controller.getAllUserFromDepartment(id)
  }, [id])
  const createModalAddUser = (
    <Modal title="Thêm mới nhân viên" visible={isModalAddUser} onCancel={() => setIsModalAddUser(false)} footer={false}>
      <ModalAddUser idDepartment={id} setIsModalAddUser={setIsModalAddUser} />
    </Modal>
  )
  const handlerRemoveUser = (idUser: any) => {
    controller.removeUser(idUser)
  }
  const columns = [
    {
      title: 'STT',
      width: 70,
      editable: false,
      render: (text: any, record: any, index: any) => <p>{index + 1}</p>,
    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'name',
      editable: true,
      width: 450,
    },
    {
      title: 'Chức vụ',
      dataIndex: 'job_title',
      editable: true,
      width: 450,
    },
    {
      title: 'Hành động',
      dataIndex: 'Action',
      width: 150,
      render: (value: any, record: any, index: any) => {
        return <Button onClick={() => handlerRemoveUser(record.id)}>Xóa</Button>
      },
    },
  ]
  return (
    <>
      {controller.state.error ? (
        <Row className="w-full" justify="space-between">
          <Empty />
        </Row>
      ) : (
        <div>
          <h2 className="mx-10 my-6 font-medium text-xl">Thông tin phòng ban: {controller.state.detail.title}</h2>
          <div className="mx-10">
            <Button
              type="text"
              className="flex text-blue-500 mb-2"
              icon={<PlusSmallIcon className="w-4 h-4 fill-blue-500" />}
              onClick={() => setIsModalAddUser(true)}
            >
              Thêm mới
            </Button>
            {createModalAddUser}
            <Table dataSource={controller.state.detail?.employee} columns={columns} />
          </div>
        </div>
      )}
    </>
  )
}
