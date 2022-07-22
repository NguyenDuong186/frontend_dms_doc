import { Button, Col, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { UseUserController } from '../../../users/users_list/controller'
import { UseDetailDepartmentController } from '../controller'

type Props = {
  setIsModalAddUser: any
  idDepartment: any
}

export default function ModalAddUser({ setIsModalAddUser, idDepartment }: Props) {
  const [selectedRow, setSelectedRow] = useState([])
  const controller = UseUserController()
  const detailDepartment = UseDetailDepartmentController()
  const { listUser } = controller.state

  const dataTable = listUser.map((item) => ({ ...item, key: item.id }))
  useEffect(() => {
    controller.getUserNotDepartId()
  }, [listUser])
  const onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
    setSelectedRow(selectedRows)
  }
  const rowSelection = {
    selectedRow,
    onChange: onSelectChange,
  }

  const addUser = () => {
    setIsModalAddUser(false)
    console.log(selectedRow)
    detailDepartment.addUserToDepartment(idDepartment, selectedRow)
  }
  const columns = [{ title: 'Tên nhân viên', dataIndex: 'name', editable: true, width: 450 }]
  return (
    <div>
      <Table columns={columns} dataSource={dataTable} rowSelection={rowSelection} />
      <Col span={24} className=" mt-4 text-right">
        <Button type="text" onClick={addUser}>
          Thêm
        </Button>
      </Col>
    </div>
  )
}
