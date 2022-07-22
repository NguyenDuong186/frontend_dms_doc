import { Button, Checkbox, Col, DatePicker, Divider, Form, Input, message, Row, Select, Space, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import type { UploadProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { UploadFile } from 'antd/lib/upload/interface'
import moment from 'moment'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UseDHListController } from '../list-vanbandh/controller'
import { UseArgencyController } from '../../settings/argencys/argency_list/controller'
import { UseTagController } from '../../settings/tags/tags_list/controller'
import { UseDepartmentController } from '../../settings/departments/departments_list/controller'
import { UseDHDetailController } from '../detail-vanbandh/controller'

type Props = {
  defaultValues?: any
  typeEdit?: boolean
  idDoc?: any
}
const { Option } = Select

export default function DHCreate({ defaultValues, typeEdit = false, idDoc }: Props) {
  const [kyHieu, setKyHieu] = useState('')
  const defaultValueFormat = {
    ...defaultValues,
    ngay_ban_hanh: moment(defaultValues?.ngay_ban_hanh),
    ngay_hieu_luc: moment(defaultValues?.ngay_hieu_luc),
    ngay_het_hieu_luc: moment(defaultValues?.ngay_het_hieu_luc),
    ngay_ky: moment(defaultValues?.ngay_ky),
  }

  const controller = UseDHListController()
  const detailDH = UseDHDetailController()
  const { handleSubmit, setValue, control, reset } = useForm({ defaultValues: defaultValueFormat })
  const argencyList = UseArgencyController()
  const tagList = UseTagController()
  const departmentList = UseDepartmentController()

  const onChangeLoaiVanBan = () => {
    const d = moment(Date.now()).toDate()
    setKyHieu(`/${d.getFullYear()}/${'CVĐ'}/SG`)
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
      phan_nhom_van_ban: 'DH',
      so_ky_hieu: soKyHieu,
      ngay_ban_hanh: new Date(data.ngay_ban_hanh).toJSON(),
      ngay_hieu_luc: new Date(data.ngay_hieu_luc).toJSON(),
      ngay_het_hieu_luc: new Date(data.ngay_het_hieu_luc).toJSON(),
      ngay_ky: new Date(data.ngay_ky).toJSON(),
      file_name: currentNameFile[0],
    }
    console.log(dataFormat)
    if (typeEdit) {
      detailDH.editDoc(idDoc, dataFormat)
    } else {
      controller.addData(dataFormat)
      reset({})
    }
  }
  const labelStyle = 'text-sm font-medium opacity-70 px-3'
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Thuộc tính văn bản điều hành</h1>
      <Divider className="mb-5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[8, 32]}>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>
              <a className="bg-red">*</a>Đơn vị ban hành:
            </label>
          </Col>
          <Col span={8}>
            <Controller
              name="don_vi_vao_so_id"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full">
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
              render={({ field }) => (
                <DatePicker className="w-full" {...field} format={'DD/MM/YYYY'} placeholder="Chọn ngày" />
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Bộ phận soạn thảo:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="don_vi_soan_thao_id"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full">
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
            <label className={labelStyle}>Loại văn bản:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="tagId"
              control={control}
              render={({ field }) => (
                <Select onSelect={onChangeLoaiVanBan} {...field} allowClear className="w-full">
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
          <Col className="inline-grid mt-1" span={4}>
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
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Trích yếu:</label>
          </Col>
          <Col span={20}>
            <Controller
              name="trich_yeu"
              control={control}
              render={({ field }) => <Input {...field} className="h-[31px]" />}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Người ký:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="nguoi_ky"
              control={control}
              render={({ field }) => <Input {...field} className="h-[31px]  border-gray-300" type="text" />}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Ngày ký:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="ngay_ky"
              control={control}
              render={({ field }) => (
                <DatePicker {...field} placeholder="Chọn ngày" format={'DD/MM/YYYY'} className="w-full" />
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Tình trạng hiệu lực:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="tinh_trang_hieu_luc"
              control={control}
              render={({ field }) => (
                <Select {...field} allowClear className="w-full ">
                  <Option key="1" value="hieu_luc">
                    Hiệu lực
                  </Option>
                  <Option key="2" value="het_hieu_luc">
                    Hết hiệu lực
                  </Option>
                </Select>
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Độ mật</label>
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
            <label className={labelStyle}>Ngày hiệu lực:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="ngay_hieu_luc"
              control={control}
              render={({ field }) => (
                <DatePicker {...field} placeholder="Chọn ngày" format={'DD/MM/YYYY'} className="w-full" />
              )}
            />
          </Col>
          <Col className="mt-1" span={4}>
            <label className={labelStyle}>Ngày hết hiệu lực:</label>
          </Col>
          <Col span={8}>
            <Controller
              name="ngay_het_hieu_luc"
              control={control}
              render={({ field }) => (
                <DatePicker {...field} placeholder="Chọn ngày" format={'DD/MM/YYYY'} className="w-full" />
              )}
            />
          </Col>
          <Col className="mt-3" span={4}>
            <label className={labelStyle}>Ghi chú:</label>
          </Col>
          <Col span={20}>
            <div className=""></div>
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
            {typeEdit ? 'Lưu' : 'Ban hành'}
          </Button>
        </div>
      </form>
    </div>
  )
}
