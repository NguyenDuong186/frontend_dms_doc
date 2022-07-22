import { Button, Col, DatePicker, Input, Row, Select } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import handler from '../../common/api/hello'
import { UseUserController } from '../../containers/settings/users/users_list/controller'
import { UseTaskListController } from '../../containers/tasklisting/list-tasklisting/controller'

type Props = {
  id: any
}
const { Option } = Select

export default function HandleModalComp({ id }: Props) {
  const { handleSubmit, control } = useForm({})
  const controller = UseTaskListController()
  const handlerUser = UseUserController()
  const { listUser } = handlerUser.state
  useEffect(() => {
    handlerUser.getAllUser()
  }, [])
  const onSubmit = (data: any) => {
    const timeXL = new Date(data.han_xu_ly).toJSON()
    const tranformData = { ...data, han_xu_ly: timeXL, van_ban_id: Number(id) }
    console.log(tranformData)
    controller.addTask(tranformData, id)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[48, 16]}>
        <Col span={12}>
          <label className="text-sm font-medium opacity-70 px-3">Người xử lý chính:</label>
          <Controller
            name="nguoi_xu_ly_id"
            control={control}
            render={({ field }) => (
              <Select {...field} allowClear className="w-full mt-2">
                {listUser.map((item: any) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  )
                })}
              </Select>
            )}
          />
        </Col>
        <Col span={12}>
          <label className="text-sm font-medium opacity-70 px-3">Hạn xử lý:</label>
          <Controller
            name="han_xu_ly"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                placeholder="Chọn ngày"
                className="w-full mt-2"
                format={'DD/MM/YYYY'}
                disabledDate={(current) => {
                  const weekStart = moment().startOf('day')
                  return weekStart.isAfter(current)
                }}
              />
            )}
          />
        </Col>
        <Col span={12}>
          <label className="text-sm font-medium opacity-70 px-3">Người liên quan:</label>
          <Controller
            name="nguoi_lien_quan_id"
            control={control}
            render={({ field }) => (
              <Select {...field} allowClear className="w-full mt-2">
                {listUser.map((item: any) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  )
                })}
              </Select>
            )}
          />
        </Col>
        <Col span={24}>
          <label className="text-sm font-medium opacity-70 px-3">Nội dung:</label>
          <Controller name="noi_dung" control={control} render={({ field }) => <Input.TextArea {...field} />} />
        </Col>
        <Col span={24} className="text-right">
          <Button
            htmlType="submit"
            size="large"
            type="text"
            className="ml-[16px] bg-blue-400 text-gray-800 hover:bg-blue-600"
          >
            Chuyển xử lý
          </Button>
        </Col>
      </Row>
    </form>
  )
}
