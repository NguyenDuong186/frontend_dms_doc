import { Button, Checkbox, Col, DatePicker, Divider, Form, Input, message, Row, Select, Space, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import moment from 'moment'
import type { UploadProps } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { UseDIListController } from '../list-vanbandilisting/controller'
import { UseDIDetailController } from '../detail-vanbandi/controller'
import { UseArgencyController } from '../../settings/argencys/argency_list/controller'
import { UseTagController } from '../../settings/tags/tags_list/controller'
import { UseDepartmentController } from '../../settings/departments/departments_list/controller'

type Props = {
  defaultValues?: any
  typeEdit?: boolean
  idDoc?: any
}
const { Option } = Select

export default function DICreate({ defaultValues, typeEdit = false, idDoc }: Props) {
  const [kyHieu, setKyHieu] = useState('')

  const defaultValueFormat = {
    ...defaultValues,
    ngay_ban_hanh: moment(defaultValues?.ngay_ban_hanh),
    ngay_ky: moment(defaultValues?.ngay_ky),
  }
  const { handleSubmit, setValue, control, reset } = useForm({ defaultValues: defaultValueFormat })

  const controller = UseDIListController()
  const detailDI = UseDIDetailController()
  const argencyList = UseArgencyController()
  const tagList = UseTagController()
  const departmentList = UseDepartmentController()

  const onChangeLoaiVanBan = () => {
    const d = moment(Date.now()).toDate()
    setKyHieu(`/${d.getFullYear()}/${'DATABASE'}/SG`)
    setValue('so_hieu', `${Math.floor(Math.random() * 100)}`, { shouldValidate: true })
  }

  useEffect(() => {
    argencyList.getAllArgency()
    tagList.getAllTag()
    departmentList.getAllDepartment()
  }, [])

  const [currentNameFile, setCurrentNameFile] = useState<string[]>([])
  const [defaultFileList, setDefaultFileList] = useState(() => {
    if (!defaultValues?.url_doc) return []
    return [
      {
        uid: '1',
        name: defaultValueFormat.file_name || 'file',
        response: 'OK',
        url: defaultValueFormat.url_doc,
      },
    ]
  })

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

  const onSubmit = (data: any) => {
    const soKyHieu = data.so_hieu + `${data.so_hieu_phu ? '/' + data.so_hieu_phu : ''}` + kyHieu
    const dataFormat = {
      ...data,
      phan_nhom_van_ban: 'DI',
      ngay_ban_hanh: new Date(data.ngay_ban_hanh).toJSON(),
      ngay_ky: new Date(data.ngay_ky).toJSON(),
      so_ky_hieu: soKyHieu,
      file_name: currentNameFile[0],
    }
    console.log('document: ', dataFormat)
    if (typeEdit) {
      detailDI.editDoc(idDoc, dataFormat)
    } else {
      controller.addDoc(dataFormat)
      reset({})
    }
  }
  const labelStyle = 'text-sm font-medium opacity-70 px-3'
  return (
    <div>
      {/* <h2 className="text-2xl  font-medium opacity-50 mb-3">Tạo mới văn bản đi</h2>
      <div className="bg-white rounded-md shadow-md py-8 p-20"> */}
      <h1 className="text-2xl font-semibold mb-3">Thuộc tính văn bản đi</h1>
      <Divider className="mb-5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[8, 32]}>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Đơn vị ban hành:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="don_vi_vao_so_id"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full mt-2">
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
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Ngày ban hành:</label>
          </Col>
          <Col className="mt-2" span={8}>
            <Controller
              name="ngay_ban_hanh"
              control={control}
              render={({ field }) => (
                <DatePicker placeholder="Chọn ngày" className="w-full" {...field} format={'DD/MM/YYYY'} />
              )}
            />
          </Col>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Bộ phận soạn thảo:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="don_vi_soan_thao_id"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full mt-2">
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
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Loại văn bản:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="tagId"
              control={control}
              render={({ field }) => (
                <Select onSelect={onChangeLoaiVanBan} {...field} allowClear className="w-full mt-2">
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
          <Col className="mt-3 inline-grid" span={4}>
            <label className={labelStyle}>Số ký hiệu:</label>
          </Col>
          <Col span={20}>
            <Space align="baseline">
              <Controller
                name="so_hieu"
                control={control}
                render={({ field }) => <Input {...field} className="h-[31px] mt-2 w-[80px]" maxLength={255} />}
              />
              <span style={{ margin: '0 5px' }}>/</span>
              <Controller
                name="so_hieu_phu"
                control={control}
                render={({ field }) => <Input {...field} className="h-[31px] mt-2 w-[80px]" maxLength={3} />}
              />
              <span>{kyHieu}</span>
            </Space>
          </Col>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Trích yếu:</label>
          </Col>
          <Col span={20}>
            <Controller
              name="trich_yeu"
              control={control}
              render={({ field }) => <Input {...field} className="h-[31px] mt-2" />}
            />
          </Col>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Người ký:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="nguoi_ky"
              control={control}
              render={({ field }) => <Input {...field} className="h-[31px] mt-2 border-gray-300" type="text" />}
            />
          </Col>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Ngày ký:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="ngay_ky"
              control={control}
              render={({ field }) => (
                <DatePicker {...field} placeholder="Chọn ngày" format={'DD/MM/YYYY'} className="w-full mt-2 " />
              )}
            />
          </Col>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Độ khẩn</label>
          </Col>
          <Col span={8}>
            <Controller
              name="do_khan"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full mt-2">
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
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Độ mật</label>
          </Col>
          <Col span={8}>
            <Controller
              name="do_mat"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full mt-2">
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
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Cơ quan nhận:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="noi_nhan_id"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full mt-2">
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
          <Col className="mt-3 inline-grid " span={4}>
            <label className={labelStyle}>Số trang: </label>
          </Col>
          <Col span={8}>
            <Controller
              name="so_trang"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="h-[31px] w-[80px] mt-2"
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
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Ghi chú:</label>
          </Col>
          <Col span={20}>
            <div className="mt-1"></div>
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
            className="text-black"
            style={{ marginRight: 16, textAlign: 'right', marginTop: 12 }}
            size={'large'}
            type={'primary'}
          >
            Ban hành
          </Button>
        </div>
      </form>
    </div>
  )
}
