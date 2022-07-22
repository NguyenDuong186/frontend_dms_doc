import { Button, Col, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { UseUserController } from '../../containers/settings/users/users_list/controller'
// import { UseUserController } from '../../../users/users_list/controller'
// import { UseDetailDepartmentController } from '../controller'

type Props = {
  setIsModalAddUser?: any
  id?: any
}

export default function ShareModal({ setIsModalAddUser, id }: Props) {
  const [selectedRow, setSelectedRow] = useState([])
  const controller = UseUserController()
  // const detailDepartment = UseDetailDepartmentController()
  const { listUser } = controller.state
  const dataTable = listUser.map((item) => ({ ...item, key: item.id }))
  useEffect(() => {
    controller.getUserNotShared(id)
  }, [listUser])
  const onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
    setSelectedRow(selectedRows)
  }
  const rowSelection = {
    selectedRow,
    onChange: onSelectChange,
  }

  const addUser = () => {
    controller.shareDocUser(id, selectedRow)
    // setIsModalAddUser(false)
  }
  const columns = [{ title: 'Tên nhân viên', dataIndex: 'name', editable: true, width: 450 }]
  return (
    <div>
      <Table columns={columns} rowSelection={rowSelection} dataSource={dataTable} />
      <Col span={24} className=" mt-4 text-right">
        <Button onClick={addUser} type="primary">
          Thêm
        </Button>
      </Col>
    </div>
  )
}
