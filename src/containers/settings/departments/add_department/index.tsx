import { Button, Col, Input, Row, Select } from 'antd'
import { type } from 'os'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UseUserController } from '../../users/users_list/controller'
import { UseDepartmentController } from '../departments_list/controller'

type Department = {
  id: number
  title: string
  department_code: string
  parent_department: string
  level_department: string
  van_thu_id: number
}
type CreateDepartmentProps = {
  defaultValues?: Department
  typeEdit?: boolean
  onClose: any
}

export default function CreateDepartment({ defaultValues, typeEdit = false, onClose }: CreateDepartmentProps) {
  const controller = UseDepartmentController()
  const controller_user = UseUserController()
  useEffect(() => {
    controller_user.getAllUser()
  }, [])

  const { handleSubmit, control, reset } = useForm({ defaultValues: defaultValues })
  console.log(defaultValues)
  const onSubmit = (data: Department) => {
    const van_thu = controller_user.state.listUser.find((item) => item.id === data.van_thu_id)
    if (typeEdit) {
      controller.editDepartment(defaultValues.id, { ...data, van_thu })
    } else {
      controller.addDepartment(data)
      reset({})
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[16, 24]}>
        <Col span={10}>
          <span>Đơn vị:</span>
        </Col>
        <Col span={14}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
          />
        </Col>
        <Col span={10}>
          <span>Mã phòng ban:</span>
        </Col>
        <Col span={14}>
          <Controller
            name="department_code"
            control={control}
            render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
          />
        </Col>
        {typeEdit ? (
          <>
            <Col span={10}>
              <span>Văn Thư:</span>
            </Col>
            <Col span={14}>
              <Controller
                name="van_thu_id"
                control={control}
                render={({ field }) => (
                  <Select {...field} className="w-full ">
                    {controller_user.state.listUser
                      .filter((item) => item.departmentId === defaultValues.id)
                      .map((item: any) => {
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
          </>
        ) : (
          ''
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
