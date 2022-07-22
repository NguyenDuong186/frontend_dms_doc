import { Button, Col, Row, Table } from 'antd'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { UseShareDocController } from '../../containers/sharedocument/listusersharedoc/controller'

type Props = {
  id?: any
  setIsThuHoiModal?: any
}
export default function RecalModal({ id, setIsThuHoiModal }: Props) {
  const [selectedRow, setSelectedRow] = useState([])
  const controller = UseShareDocController()
  const { listUserShareDoc } = controller.state
  const dataTable = listUserShareDoc.map((item, index) => ({ ...item.user, key: index }))
  useEffect(() => {
    controller.getListShare(id)
  }, [listUserShareDoc])
  const onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
    setSelectedRow(selectedRows)
  }
  const rowSelection = {
    selectedRow,
    onChange: onSelectChange,
  }
  const recalUserFromList = () => {
    controller.recalUserFromList(id, selectedRow)
    setIsThuHoiModal(false)
  }
  const columns = [
    {
      title: 'Tên nhân viên',
      dataIndex: 'name',
      editable: true,
      width: 450,
    },
  ]
  return (
    <div>
      <Row>
        <Table className="w-full" columns={columns} dataSource={dataTable} rowSelection={rowSelection} />
      </Row>
      <Row className="mt-6">
        <Col span={24} className="text-right">
          <Button onClick={recalUserFromList} size="large" type="primary" className="ml-[16px">
            Thu hồi
          </Button>
        </Col>
      </Row>
    </div>
  )
}
