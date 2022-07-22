import { Button, Col, DatePicker, Input, Row, Select } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UseArgencyController } from '../../settings/argencys/argency_list/controller'
import { UseDepartmentController } from '../../settings/departments/departments_list/controller'
import { UseTagController } from '../../settings/tags/tags_list/controller'
import { UseDCListController } from '../list-vanbannb/controller'

type Props = {}
const { Option } = Select

export default function DCDocFilter({}: Props) {
  const { handleSubmit, control } = useForm({})
  const controller = UseDCListController()
  const argencyList = UseArgencyController()
  const tagList = UseTagController()
  const departmentList = UseDepartmentController()

  useEffect(() => {
    argencyList.getAllArgency()
    tagList.getAllTag()
    departmentList.getAllDepartment()
  }, [])

  const onSubmit = (data) => controller.getDocByFilter(data)
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
        <Col>
          <label>Ngày ban hành</label>
        </Col>
        <Col className="mt-2 mb-6" span={24}>
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
                  .filter((item) => item.phan_nhom_van_ban === 'DH')
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
        <div className="mt-2">
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
