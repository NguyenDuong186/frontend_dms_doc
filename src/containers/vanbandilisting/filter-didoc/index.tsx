import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UseArgencyController } from '../../settings/argencys/argency_list/controller'
import { UseDepartmentController } from '../../settings/departments/departments_list/controller'
import { UseTagController } from '../../settings/tags/tags_list/controller'
import { UseDIListController } from '../list-vanbandilisting/controller'

type Props = {}
const { Option } = Select

export default function VanBanDiFilter({}: Props) {
  const { handleSubmit, control } = useForm({})
  const controller = UseDIListController()
  const argencyList = UseArgencyController()
  const tagList = UseTagController()
  const departmentList = UseDepartmentController()

  useEffect(() => {
    argencyList.getAllArgency()
    tagList.getAllTag()
    departmentList.getAllDepartment()
  }, [])

  const onSubmit = (data: any) => controller.getDocByFilter(data)
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
                className="h-[31px] w-full border-gray-300 mt-2 mb-6"
              />
            )}
          />
        </Col>
        <Col>
          <label>Ngày ban hành</label>
        </Col>
        <Col className="mt-2 my-6" span={24}>
          <Col style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Controller
              name="date_from"
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
              name="date_to"
              control={control}
              render={({ field }) => <DatePicker {...field} placeholder="Đến ngày" format={'DD/MM/YYYY'} />}
            />
          </Col>
        </Col>
        <Col span={24}>
          <label>Loại văn bản</label>
          <Controller
            name="tagId"
            control={control}
            render={({ field }) => (
              <Select {...field} allowClear className="w-full mt-2 mb-6">
                {tagList.state.listTag
                  .filter((item) => item.phan_nhom_van_ban === 'DI')
                  .map((item) => {
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        {item.title}
                      </Select.Option>
                    )
                  })}
              </Select>
            )}
          />
        </Col>
        <Col span={24}>
          <label>Bộ phận soạn thảo</label>
          <Controller
            name="don_vi_soan_thao_id"
            control={control}
            render={({ field }) => (
              <Select {...field} allowClear className="w-full mt-2 mb-6">
                {departmentList.state.listDepartment.map((item) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.title}
                    </Select.Option>
                  )
                })}
              </Select>
            )}
          />
        </Col>
        <Col span={24}>
          <label>Đơn vị ban hành</label>
          <Controller
            name="don_vi_vao_so_id"
            control={control}
            render={({ field }) => (
              <Select {...field} allowClear className="w-full mt-2 mb-6">
                {departmentList.state.listDepartment.map((item) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.title}
                    </Select.Option>
                  )
                })}
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
