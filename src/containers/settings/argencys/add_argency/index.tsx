import { Button, Col, Input, Row } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UseArgencyController } from '../argency_list/controller'
type Argency = {
  id: any
  title: string
}

type CreateArgencyProps = {
  defaultValues?: Argency
  typeEdit?: boolean
  onClose?: any
}

export default function CreateArgency({ defaultValues, typeEdit = false, onClose }: CreateArgencyProps) {
  const controller = UseArgencyController()
  const { handleSubmit, control, reset } = useForm({ defaultValues: defaultValues })
  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues])
  const onSubmit = (data: Argency) => {
    typeEdit ? controller.editArgency(data.id, data) : controller.addArgency(data)
    reset({})
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[88, 24]}>
          <Col span={8}>
            <span>Tên:</span>
          </Col>
          <Col span={16}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
            />
          </Col>
          <Col span={24} className=" text-right">
            <Button htmlType="submit" type="text" onClick={onClose}>
              Lưu
            </Button>
          </Col>
        </Row>
      </form>
    </>
  )
}
