import { AutoComplete, Button, Col, Input, Row, Select } from 'antd'
import { type } from 'os'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UseDepartmentController } from '../../departments/departments_list/controller'
import { UseUserController } from '../users_list/controller'
type User = {
  id: number
  name: string
  email: string
  password: string
  job_title: string
  departmentId: string
}
type CreateUserProps = {
  defaultValues?: User
  typeEdit?: boolean
  onClose: any
}

export default function CreateUser({ defaultValues, typeEdit = false, onClose }: CreateUserProps) {
  const controller = UseUserController()
  const controller_department = UseDepartmentController()
  const { handleSubmit, control, reset } = useForm({ defaultValues: defaultValues })

  useEffect(() => {
    async function fetchData() {
      controller_department.getAllDepartment()
    }
    fetchData()
  }, [])

  const onSubmit = (data: any) => {
    const department = controller_department.state.listDepartment.find((item) => item.id === data.departmentId)

    if (typeEdit) {
      console.log('depart :', department)
      const updateUser = { ...data, department }
      console.log('user :', updateUser)
      controller.editUser(updateUser, defaultValues.id)
    } else {
      controller.addUser(data)
      reset({})
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[16, 24]}>
        <Col span={8}>
          <span>Tên người dùng:</span>
        </Col>
        <Col span={16}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
          />
        </Col>
        <Col span={8}>
          <span>email đăng nhập:</span>
        </Col>
        <Col span={16}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
          />
        </Col>
        {typeEdit ? (
          ''
        ) : (
          <>
            <Col span={8}>
              <span>mật khẩu đăng nhập:</span>
            </Col>
            <Col span={16}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input.Password {...field} className="w-full h-[31px]" />}
              />
            </Col>
          </>
        )}
        <Col span={8}>
          <span>Chức vụ:</span>
        </Col>
        <Col span={16}>
          <Controller
            name="job_title"
            control={control}
            render={({ field }) => <Input {...field} className="w-full h-[31px]" />}
          />
        </Col>
        <Col span={8}>
          <span>Phòng ban:</span>
        </Col>
        <Col span={16}>
          <Controller
            name="departmentId"
            control={control}
            render={({ field }) => (
              <Select
                showSearch={true}
                allowClear={true}
                filterOption={(input, option) => {
                  if (
                    option &&
                    option.props &&
                    option.props.children &&
                    option.props.children.toString().toLowerCase().indexOf(input.toLowerCase().trim()) >= 0
                  ) {
                    return true
                  }
                  return false
                }}
                {...field}
                className="w-full h-[31px]"
              >
                {controller_department.state.listDepartment.map((item) => {
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

        <Col span={24} className=" text-right">
          <Button htmlType="submit" type="text" onClick={onClose}>
            Lưu
          </Button>
        </Col>
      </Row>
    </form>
  )
}
