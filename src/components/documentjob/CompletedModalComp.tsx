import { Button, Col, Input, Row } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UseTaskListController } from '../../containers/tasklisting/list-tasklisting/controller'

type Props = {
  id: any
}

export default function CompletedModalComp({ id }: Props) {
  const { handleSubmit, control } = useForm({})
  const controller = UseTaskListController()
  const onSubmit = (data: any) => {
    controller.updateCompleted(id, data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={16}>
        <Col span={24}>
          <label className="text-sm font-medium opacity-70 px-3">Ý kiến:</label>
          <Controller
            name="y_kien"
            control={control}
            render={({ field }) => <Input.TextArea {...field} className="mt-2" />}
          />
        </Col>
        <Col span={24} className="text-right">
          <Button
            htmlType="submit"
            type="text"
            size="large"
            className="bg-blue-500 text-gray-800 hover:bg-blue-700 mt-8"
          >
            Đóng xử lý
          </Button>
        </Col>
      </Row>
    </form>
  )
}
