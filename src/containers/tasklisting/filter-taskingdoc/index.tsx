import { Button, DatePicker, Row, Input, Select, Col } from 'antd'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Props = {}
const { Option } = Select

export default function TaskingFilter({}: Props) {
  const { handleSubmit, control } = useForm({})
  const onSubmit: SubmitHandler<Props> = (data) => alert(JSON.stringify(data))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col span={24}>
          <label>Từ khóa</label>
          <Controller
            name="tu_khoa"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nhập số kí hiệu, trích yếu"
                maxLength={255}
                className="h-[31px] border-gray-300 mt-2 mb-6"
              />
            )}
          />
        </Col>
        <Col span={24}>
          <label>Nội dung công việc</label>
          <Controller
            name="tu_khoa"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nhập nội dung công việc"
                maxLength={255}
                className="h-[31px] border-gray-300 mt-2 mb-6"
              />
            )}
          />
        </Col>
        <Col span={24}>
          <label>Người giao</label>
          <Controller
            name="nguoi_giao"
            control={control}
            render={({ field }) => (
              <Select {...field} allowClear className="w-full mt-2 mb-6">
                <Option value="name">12345</Option>
                <Option value="2">abc</Option>
                <Option value="3">dsw</Option>
              </Select>
            )}
          />
        </Col>
        <Col>
          <label>Ngày giao</label>
        </Col>
        <Col className="mb-6 mt-2" span={24}>
          <Col style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Controller
              name="DateFrom"
              control={control}
              render={({ field }) => <DatePicker {...field} placeholder="Tử ngày" format={'DD/MM/YYYY'} />}
            />
          </Col>
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              textAlign: 'center',
              marginTop: '5px',
            }}
          >
            -
          </span>
          <Col style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Controller
              name="DateTo"
              control={control}
              render={({ field }) => <DatePicker {...field} placeholder="Đến ngày" format={'DD/MM/YYYY'} />}
            />
          </Col>
        </Col>
        <Col>
          <label>Hạn xử lý</label>
        </Col>
        <Col className="mb-6 mt-2" span={24}>
          <Col style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Controller
              name="DateFrom"
              control={control}
              render={({ field }) => <DatePicker {...field} placeholder="Tử ngày" format={'DD/MM/YYYY'} />}
            />
          </Col>
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              textAlign: 'center',
              marginTop: '5px',
            }}
          >
            -
          </span>
          <Col style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Controller
              name="DateTo"
              control={control}
              render={({ field }) => <DatePicker {...field} placeholder="Đến ngày" format={'DD/MM/YYYY'} />}
            />
          </Col>
        </Col>
        <div className="mt-3">
          <Button htmlType="submit" size="large" type="primary">
            Tìm
          </Button>
          <Button style={{ marginLeft: 16 }} size="large" type="primary">
            Làm mới
          </Button>
        </div>
      </Row>
    </form>
  )
}
