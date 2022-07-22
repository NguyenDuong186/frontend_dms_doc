import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Props = {}
const { Option } = Select

export default function ExpireDocFilter({}: Props) {
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
          <label>Đơn vị ban hành</label>
          <Controller
            name="don_vi_vao_so"
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
        <Col span={24}>
          <label>Bộ phận soạn thảo</label>
          <Controller
            name="don_vi_soan_thao"
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
          <label>Ngày ban hành</label>
        </Col>
        <Col className="mt-2 mb-6" span={24}>
          <Col style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Controller
              name="DateFrom"
              control={control}
              render={({ field }) => <DatePicker {...field} placeholder="Từ ngày" format={'DD/MM/YYYY'} />}
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
        <Col span={24}>
          <label>Loại văn bản</label>
          <Controller
            name="loai_van_ban"
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
        <Col span={24}>
          <label>Tình trạng hiệu lực</label>
          <Controller
            name="tinh_trang_hieu_luc"
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
        <Col span={24}>
          <label>Người ký</label>
          <Controller
            name="nguoi_ky"
            control={control}
            render={({ field }) => <Input {...field} className="h-[31px] mt-2 mb-6  border-gray-300" type="text" />}
          />
        </Col>
        <div className="mt-2">
          <Button htmlType="submit" size="large">
            Tìm
          </Button>
          <Button style={{ marginLeft: 16 }} size="large">
            Làm mới
          </Button>
        </div>
      </Row>
    </form>
  )
}
