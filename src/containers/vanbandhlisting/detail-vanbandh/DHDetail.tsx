import React, { useEffect } from 'react'
import { Button, Text, Spacer, Divider } from '@nextui-org/react'
import { useState } from 'react'
import { Modal, Row, Col } from 'antd'
import { DownloadIcon, EditIcon, UserIcon } from '../../../components/CustomIcon'
import ShareModal from '../../../components/documentjob/ShareModal'
import RecalModal from '../../../components/documentjob/RecalModal'

import { formatDateTime } from '../../../common/helpers/formatDateTime'
import { useForm } from 'react-hook-form'
import DHCreate from '../render-vanbandh/DHCreate'
import { UseDHDetailController } from './controller'
import { UseLoginController } from '../../login/controller'
import moment from 'moment'
type Props = {}

export default function DHDetail({ id }: any) {
  const controller = UseDHDetailController()
  const loginController = UseLoginController()
  const userId = loginController.state.currentUser?.id
  const [isShareModal, setIsShareModal] = useState(false)
  const [isThuHoiModal, setIsThuHoiModal] = useState(false)
  const [editDetail, setEditDetail] = useState(false)
  const { reset } = useForm({})
  useEffect(() => {
    async function fetchData() {
      await controller.getDetail(id)
    }
    fetchData()
    reset(controller.state?.detailDH)
  }, [reset])
  const canRecal = () => {
    const c1 = userId === controller.state.detailDH?.authorId
    const c2 = controller.state.detailDH?.usersRecevie !== 0
    return c1 && c2
  }
  const canShare = () => {
    if (userId === controller.state.detailDH?.authorId) return true
  }
  const canEdit = () => {
    if (userId === controller.state.detailDH?.authorId) return true
  }
  return (
    <div className="py-[16px] pr-[16px]">
      <div className="flex">
        <div className="w-full">
          <Col className="border-2 rounded-t-md ">
            <Row
              justify="space-between"
              className="bg-gray-50 border-b w-full px-3 py-2"
              //   css={{ borderWidth: 'light' }}
            >
              <Text size={15}>Danh sách tải về</Text>
              <Button size="xs" auto className="bg-violet-500">
                <DownloadIcon className="w-4 h-4 mr-1 fill-gray-300 group-hover:fill-white" />
                Tải về
              </Button>
            </Row>
            <Col className="p-5">
              <Row>Tệp văn bản</Row>
              <Row className="bg-gray-200 h-14 "></Row>
            </Col>
          </Col>
          {/* chia sẻ văn bản*/}
          <Col className="border-2 rounded-t-md ">
            <Row
              justify="space-between"
              className="bg-gray-50 border-b w-full px-3 py-2"
              //   css={{ borderWidth: 'light' }}
            >
              <Text size={15}>Chia sẻ với</Text>

              <div className=" inline-flex justify-around">
                <Button
                  size="xs"
                  auto
                  className="bg-gray-50 text-violet-500 mr-6"
                  onClick={() => setIsThuHoiModal(true)}
                  hidden={!canRecal}
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
                  <RecalModal id={id} />
                </Modal>
                <Button
                  size="xs"
                  auto
                  className="bg-gray-50 text-violet-500"
                  onClick={() => setIsShareModal(true)}
                  hidden={!canShare}
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
                  <ShareModal id={id} />
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
              // css={{ borderWidth: 'light' }}
            >
              <Text size={15}>Thuộc tính văn bản</Text>
              <Button
                type="submit"
                onClick={() => setEditDetail(true)}
                size="xs"
                auto
                className="bg-gray-50 text-violet-500"
                hidden={!canEdit}
              >
                <EditIcon className="w-4 h-4 mr-1 fill-gray-300 group-hover:fill-white" />
                Cập nhật
              </Button>
              <Modal
                title="Cập nhật thông tin"
                onCancel={() => setEditDetail(false)}
                footer={false}
                visible={editDetail}
                width={1000}
              >
                <DHCreate idDoc={id} defaultValues={controller.state.detailDH} typeEdit={true} />
              </Modal>
            </Row>
            <Col>
              <DHProps data={controller.state.detailDH} />
            </Col>
          </Col>
        </div>

        <iframe className="w-[70%] bg-gray-400 flex-none ml-3" src={controller.state.detailDH?.url_doc}></iframe>
      </div>
    </div>
  )
}

export function DHProps({ data }: any) {
  const mockupTypeDoc = [
    { title: 'Đơn vị ban hành:', content: data?.don_vi_vao_so?.title },
    { title: 'Ngày ban hành:', content: moment(data?.ngay_ban_hanh).format('DD/MM/YYYY') },
    { title: 'Bộ phận soạn thảo:', content: data?.don_vi_soan_thao?.title },
    { title: 'Loại văn bản:', content: data?.loai_van_ban?.title },
    { title: 'Số ký hiệu:', content: data?.so_ky_hieu },
    { title: 'Trích yếu:', content: data?.trich_yeu },
    { title: 'Người ký:', content: data?.nguoi_ky },
    { title: 'Ngày ký:', content: moment(data?.ngay_ky).format('DD/MM/YYYY') },
    {
      title: 'Tình trạng hiệu lực:',
      content:
        data?.tinh_trang_hieu_luc === 'hieu_luc'
          ? 'Hiệu lực'
          : data?.tinh_trang_hieu_luc === 'het_hieu_luc'
          ? 'Hết hiệu lực'
          : '',
    },
    { title: 'Ngày hiệu lực:', content: moment(data?.ngay_hieu_luc).format('DD/MM/YYYY') },
    { title: 'Ngày hết hiệu lực:', content: moment(data?.ngay_het_hieu_luc).format('DD/MM/YYYY') },
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
    { title: 'Ghi chú:', content: data?.ghi_chu },
  ]
  return (
    <div>
      {mockupTypeDoc.map((item, index) => {
        return (
          <>
            <Row key={index} className="px-5 py-2">
              <Col span={10} className="font-medium">
                {item.title}
              </Col>
              <Col span={14}>{item.content}</Col>
              <Spacer x={2} />
            </Row>
            <Divider />
          </>
        )
      })}
    </div>
  )
}
