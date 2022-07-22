import React, { useEffect } from 'react'
import { Row, Col, Text, Spacer, Divider, Button } from '@nextui-org/react'
import { useState } from 'react'
import { Modal, Space } from 'antd'
import { DownloadIcon, EditIcon, UserIcon } from '../../../components/CustomIcon'
import ShareModal from '../../../components/documentjob/ShareModal'
import RecalModal from '../../../components/documentjob/RecalModal'
import { formatDateTime } from '../../../common/helpers/formatDateTime'
import { useForm } from 'react-hook-form'
import DECreate from '../render-vanbande/DECreate'
import { UseDEListController } from '../list-vanbandenlisting/controller'
import { UseDEDetailController } from './controller'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { UseLoginController } from '../../login/controller'
import moment from 'moment'
type Props = {
  idDocDe: string | string[]
}
export default function DEDetail({ idDocDe }: Props) {
  const controller = UseDEDetailController()
  const loginController = UseLoginController()
  const userId = loginController.state.currentUser?.id
  const authorId = controller.state.detailDE?.authorId
  const { reset } = useForm({})
  const [isShareModal, setIsShareModal] = useState(false)
  const [isThuHoiModal, setIsThuHoiModal] = useState(false)
  const [editDetail, setEditDetail] = useState(false)
  useEffect(() => {
    controller.getDetail(idDocDe)
    reset(controller.state?.detailDE)
  }, [reset])

  const canRecal = () => {
    const c1 = userId === controller.state.detailDE?.authorId
    const c2 = controller.state.detailDE?.usersRecevie.length > 0
    return c1 && c2
  }
  const canShare = () => {
    const c1 = userId === controller.state.detailDE?.authorId
    return c1
  }
  const canEdit = () => {
    if (userId === authorId) return true
  }
  return (
    <div className="py-[16px] pr-[16px]">
      <div className="flex h-fit">
        <div className="w-full">
          <Col className="border-2 rounded-t-md ">
            <Row
              justify="space-between"
              className="bg-gray-50 border-b w-full px-3 py-2"
              css={{ borderWidth: 'light' }}
            >
              <Text size={15}>File tải về</Text>
              <Button size="xs" auto className="bg-violet-500">
                <DownloadIcon className="w-4 h-4 mr-1 fill-gray-300 group-hover:fill-white" />
                Tải về
              </Button>
            </Row>
            <Col className="">
              <Space className="bg-white px-5 py-3 w-full" align="center">
                <AiOutlineFilePdf className="block w-10 h-10 bg-[#fff7e6] fill-[#fa8c16] p-2 rounded-full" />
                <Space direction="vertical" size={1}>
                  <span className="font-medium">{controller.state.detailDE?.file_name}</span>
                  <span className="text-sm opacity-70">200 KB</span>
                </Space>
              </Space>
            </Col>
          </Col>
          {/* chia sẻ văn bản*/}
          <Col className="border-2 rounded-t-md ">
            <Row
              justify="space-between"
              className="bg-gray-50 border-b w-full px-3 py-2"
              css={{ borderWidth: 'light' }}
            >
              <Text size={15}>Chia sẻ với</Text>

              <div className=" inline-flex justify-around">
                <Button
                  size="xs"
                  auto
                  className="bg-gray-50 text-violet-500 mr-6"
                  onClick={() => setIsThuHoiModal(true)}
                  hidden={!canRecal()}
                >
                  <UserIcon className="w-4 h-4 mr-1 fill-gray-300 group-hover:fill-white" />
                  Thu hồi
                </Button>
                <Modal
                  title="Thu hồi văn bản"
                  onCancel={() => setIsThuHoiModal(false)}
                  footer={false}
                  visible={isThuHoiModal}
                >
                  <RecalModal setIsThuHoiModal={setIsThuHoiModal} id={idDocDe} />
                </Modal>
                <Button
                  size="xs"
                  auto
                  className="bg-gray-50 text-violet-500"
                  onClick={() => setIsShareModal(true)}
                  hidden={!canShare()}
                >
                  <UserIcon className="w-4 h-4 mr-1 fill-gray-300 group-hover:fill-white" />
                  Chia sẻ
                </Button>
                <Modal
                  title="Chia sẻ văn bản"
                  onCancel={() => setIsShareModal(false)}
                  footer={false}
                  visible={isShareModal}
                >
                  <ShareModal id={idDocDe} />
                </Modal>
              </div>
            </Row>
            <Col className="p-5">
              <Row>Văn bản chưa được chia sẻ</Row>
              <Row className="bg-gray-200 h-8 "></Row>
            </Col>
          </Col>
          {/* thuộc tính văn bản */}
          <Col className="border-x-2">
            <Row
              justify="space-between"
              className="bg-gray-50 border-b w-full px-3 py-2"
              css={{ borderWidth: 'light' }}
            >
              <Text size={15}>Thuộc tính văn bản</Text>
              <Button
                type="submit"
                onClick={() => setEditDetail(true)}
                size="xs"
                auto
                className="bg-gray-50 text-violet-500"
                hidden={!canEdit()}
              >
                <EditIcon className="w-4 h-4 mr-1 fill-gray-300 group-hover:fill-white" />
                Cập nhật
              </Button>
              <Modal
                width={1000}
                title="Cập nhật thông tin"
                onCancel={() => setEditDetail(false)}
                footer={false}
                visible={editDetail}
              >
                <DECreate
                  setEditDetail={setEditDetail}
                  idDoc={idDocDe}
                  defaultValues={controller.state.detailDE}
                  typeEdit={true}
                />
              </Modal>
            </Row>
            <Col>
              <DEProps data={controller.state.detailDE} />
            </Col>
          </Col>
        </div>

        <iframe
          className="w-[70%] bg-gray-400 flex-none ml-3"
          src={`http://localhost:5001/api/v1/documents/download/file/` + controller.state.detailDE?.file_name}
        ></iframe>
      </div>
    </div>
  )
}

export function DEProps({ data }: any) {
  const listField = [
    { title: 'vào sổ đơn vị:', content: data?.don_vi_vao_so?.title },
    { title: 'nơi gửi:', content: data?.co_quan_ban_hanh?.title },
    { title: 'ngày ban hành:', content: moment(data?.ngay_ban_hanh).format('DD/MM/YYYY') },
    { title: 'Loại văn bản:', content: data?.loai_van_ban?.title },
    { title: 'Số ký hiệu:', content: data?.so_ky_hieu },
    { title: 'Trích yếu:', content: data?.trich_yeu },
    {
      title: 'Độ khẩn:',
      content:
        data?.do_khan === 'khan'
          ? 'Khẩn'
          : data?.do_khan === 'thuong'
          ? 'Thường'
          : data?.do_khan === 'hoa_toc'
          ? 'Hỏa tốc'
          : '',
    },
    {
      title: 'Độ mật:',
      content:
        data?.do_mat === 'mat'
          ? 'Mật'
          : data?.do_mat === 'thuong'
          ? 'Thường'
          : data?.do_mat === 'tuyet_mat'
          ? 'Tuyệt mật'
          : '',
    },
    { title: 'Ngày đến:', content: moment(data?.ngay_den).format('DD/MM/YYYY') },
    { title: 'Số trang:', content: data?.so_trang },
    { title: 'Ghi chú:', content: data?.ghi_chu },
  ]

  return (
    <div>
      {listField.map((item, index) => {
        return (
          <>
            <Row key={index} align="baseline" className="px-5 py-2">
              <Text size={14} color="$gray800" transform="capitalize" className="w-24 flex-none font-medium">
                {item.title}
              </Text>
              <Spacer x={2} />
              <Row>{item.content}</Row>
            </Row>
            <Divider />
          </>
        )
      })}
    </div>
  )
}
