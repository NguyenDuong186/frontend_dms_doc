import { UploadOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Divider, Input, message, Row, Select, Upload } from 'antd'
import type { UploadProps } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UseArgencyController } from '../../settings/argencys/argency_list/controller'
import { UseDepartmentController } from '../../settings/departments/departments_list/controller'
import { UseTagController } from '../../settings/tags/tags_list/controller'
import { UseDEDetailController } from '../detail-vanbanden/controller'
import { UseDEListController } from '../list-vanbandenlisting/controller'

type Props = {
  defaultValues?: any
  typeEdit?: boolean
  idDoc?: any
  setModalCreateDocDE?: any
  setEditDetail?: any
}
const { Option } = Select

export default function DECreate({
  idDoc,
  defaultValues,
  typeEdit = false,
  setModalCreateDocDE,
  setEditDetail,
}: Props) {
  const defaultValueFormat = {
    ...defaultValues,
    ngay_ban_hanh: moment(defaultValues?.ngay_ban_hanh),
    ngay_den: moment(defaultValues?.ngay_den),
  }
  const { handleSubmit, control, reset } = useForm({ defaultValues: defaultValueFormat })
  const controller = UseDEListController()
  const detailDE = UseDEDetailController()
  const argencyList = UseArgencyController()
  const tagList = UseTagController()
  const departmentList = UseDepartmentController()
  const [currentNameFile, setCurrentNameFile] = useState<string[]>([])
  const [defaultFileList, setDefaultFileList] = useState(() => {
    if (!defaultValues?.file_name) return []
    return [
      {
        uid: '1',
        name: defaultValueFormat.file_name || 'file',
        response: 'OK',
        url: `http://localhost:5001/api/v1/documents/download/file/` + defaultValueFormat.file_name,
      },
    ]
  })

  useEffect(() => {
    argencyList.getAllArgency()
    tagList.getAllTag()
    departmentList.getAllDepartment()
  }, [])

  const props: UploadProps = {
    action: 'http://localhost:5001/api/v1/documents/upload',
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjU3Mjc1NzM2OTY3LCJyb2xlcyI6WyJBZG1pbiJdLCJleHAiOjE2NTcyNzU3NDA1Njd9.hThTXlD4P6_cGGeAFwrpsz4ldbrFkFdPJMduQcSGRtU',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        const listName: Array<string> = info.fileList.map((item) => item.response?.filePath)
        setCurrentNameFile(listName)
      }
      if (info.file.status === 'done') {
        message.success(`Uploaded file successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },

    defaultFileList: defaultFileList,
  }

  const Handlerpromulgate = () => {
    typeEdit ? setEditDetail(false) : setModalCreateDocDE(false)
  }

  const onSubmit = (data: any) => {
    const dataFormat = {
      ...data,
      phan_nhom_van_ban: 'DE',
      ngay_ban_hanh: new Date(data.ngay_ban_hanh).toJSON(),
      ngay_den: new Date(data.ngay_den).toJSON(),
      file_name: currentNameFile[0],
    }
    if (typeEdit) {
      detailDE.editData(idDoc, dataFormat)
    } else {
      controller.addDoc(dataFormat)
      reset({})
    }
  }
  const labelStyle = 'text-sm font-medium opacity-70 px-3'
  return (
    <div>
      {/* <h2 className="text-2xl  font-medium opacity-50 mb-3">Tạo mới văn bản đến</h2> */}
      {/* <div className="bg-white rounded-md shadow-md py-8 p-20"> */}

      <h1 className="text-2xl font-semibold mb-3">Thuộc tính văn bản đến</h1>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[24, 32]}>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Vào sổ đơn vị:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="don_vi_vao_so_id"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  allowClear
                  className="w-full"
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
                >
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
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Ngày ban hành:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="ngay_ban_hanh"
              control={control}
              render={({ field }) => <DatePicker className="w-full" {...field} format={'DD/MM/YYYY'} />}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Nơi gửi:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="co_quan_ban_hanh_id"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  allowClear
                  className="w-full"
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
                >
                  {argencyList.state.listArgency.map((item) => {
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
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Loại văn bản:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="tagId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  allowClear
                  className="w-full"
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
                >
                  {tagList.state.listTag
                    .filter((item) => item.phan_nhom_van_ban === 'DE')
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
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Số ký hiệu:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="so_ky_hieu"
              control={control}
              render={({ field }) => <Input {...field} className="h-[31px]" type="text" maxLength={255} />}
            />
          </Col>
          <Col className="inline-grid mt-1" span={4}>
            <label className={labelStyle}>Số trang: </label>
          </Col>
          <Col span={8}>
            <Controller
              name="so_trang"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="h-[31px] w-[80px]"
                  type="number"
                  min={1}
                  step={1}
                  onKeyDown={(e) => {
                    if (e.key === '.' || e.key === ',' || e.key === 'e' || e.key === 'E') e.preventDefault()
                  }}
                />
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Trích yếu:</label>
          </Col>
          <Col span={20}>
            <Controller
              name="trich_yeu"
              control={control}
              render={({ field }) => <Input {...field} className="h-[31px]" type="text" />}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Độ khẩn:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="do_khan"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full">
                  <Option key="1" value="khan">
                    Khẩn
                  </Option>
                  <Option key="2" value="thuong">
                    Thường
                  </Option>
                  <Option key="3" value="hoa_toc">
                    Hỏa tốc
                  </Option>
                </Select>
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Độ mật:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="do_mat"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full">
                  <Option key="1" value="mat">
                    Mật
                  </Option>
                  <Option key="2" value="thuong">
                    Thường
                  </Option>
                  <Option key="3" value="tuyet_mat">
                    Tuyệt mật
                  </Option>
                </Select>
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Ngày đến:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="ngay_den"
              control={control}
              render={({ field }) => <DatePicker {...field} className="w-full" format={'DD/MM/YYYY'} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 32]}>
          <Col className="mt-10" span={4}>
            <label className={labelStyle}>Ghi chú:</label>
          </Col>
          <Col className="mt-8" span={20}>
            <Controller
              name="ghi_chu"
              control={control}
              render={({ field }) => <Input.TextArea {...field} allowClear bordered />}
            />
          </Col>
          <Col span={4}>
            <label className={labelStyle}>Tệp văn bản:</label>
          </Col>
          <Col span={20}>
            <Upload accept=".pdf" maxCount={1} {...props}>
              <Button disabled={currentNameFile.length >= 1} icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Col>
        </Row>
        <div className=" justify-end flex">
          <Button
            htmlType="submit"
            style={{ marginRight: 16, textAlign: 'right', marginTop: 12 }}
            size={'large'}
            type={'primary'}
          >
            {typeEdit ? 'Lưu' : 'Ban Hành'}
          </Button>
        </div>
      </form>
    </div>
  )
}
