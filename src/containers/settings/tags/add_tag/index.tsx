import { Button, Col, Input, Row, Select } from 'antd'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UseTagController } from '../tags_list/controller'
type Tag = {
  id: number
  title: string
  phan_nhom_van_ban: string
  tien_to_sinh_ma: string
}
type CreateTagProps = {
  defaultValues?: Tag
  typeEdit?: boolean
  onClose?: any
}

export default function CreateTag({ defaultValues, typeEdit = false, onClose }: CreateTagProps) {
  const [isPhanNhomVanBan, setIsPhanNhomVanBan] = useState('')
  const controller = UseTagController()
  const { handleSubmit, control, reset } = useForm({ defaultValues: defaultValues })
  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues])
  const onSubmit = (data: any) => {
    typeEdit ? controller.editTag(data.id, data) : controller.addTags(data)
    reset({})
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[16, 24]}>
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
        <Col span={8}>
          <span>Loại văn bản:</span>
        </Col>
        <Col span={16}>
          <Controller
            name="phan_nhom_van_ban"
            control={control}
            render={({ field }) => (
              <Select {...field} className="w-full" onSelect={(value: string) => setIsPhanNhomVanBan(value)}>
                <Select.Option key="1" value="DE">
                  Văn bản đến
                </Select.Option>
                <Select.Option key="2" value="DI">
                  Văn bản đi
                </Select.Option>
                <Select.Option key="3" value="DH">
                  Văn bản điều hành
                </Select.Option>
              </Select>
            )}
          />
        </Col>
        {isPhanNhomVanBan && (isPhanNhomVanBan === 'DI' || isPhanNhomVanBan === 'DH') && (
          <>
            <Col span={8}>
              <span>Tiền tố sinh mã:</span>
            </Col>
            <Col span={16}>
              <Controller
                name="tien_to_sinh_ma"
                control={control}
                render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
              />
            </Col>
          </>
        )}

        <Col span={24} className=" text-right">
          <Button htmlType="submit" type="text" onClick={onClose}>
            Lưu
          </Button>
        </Col>
      </Row>
    </form>
  )
}
