import { Breadcrumb, Button, Modal, Row, Spin, Tabs } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CaretRight, CompleteIcon, HandlerIcon } from '../../../components/CustomIcon'
import CompletedModalComp from '../../../components/documentjob/CompletedModalComp'
import DocumentEditingHistory from '../../../components/documentjob/DocumentEditingHistory'
import DocumentTask from '../../../components/documentjob/DocumentTask'
import HandleModalComp from '../../../components/documentjob/HandleModalComp'
import { UseLoginController } from '../../login/controller'
import { UseTaskListController } from '../../tasklisting/list-tasklisting/controller'
import { UseDEDetailController } from './controller'
import DEDetail from './DEDetail'

const { TabPane } = Tabs
type Props = {
  idDocDe?: string | string[]
}
export default function VanBanDenListDetail({ idDocDe }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const controller = UseDEDetailController()

  const loginController = UseLoginController()

  useEffect(() => {
    controller.getDetail(idDocDe).then(() => setTimeout(() => setIsLoading(false), 2000))
  }, [])
  const [isModal, setIsModal] = useState(false)
  const [isCompletedModal, setIsCompletedModal] = useState(false)
  const userLogin = loginController.state.currentUser?.id
  const userHandle = controller.state.detailDE?.user_xu_ly_id
  const userCompleted = controller.state.detailDE?.user_hoan_thanh_id
  const canHandlerTask = () => {
    if (userLogin === userHandle) return true
  }
  const canCompletedTask = () => {
    if (userLogin === userCompleted) return true
  }
  const ExtraButtons = (
    <div>
      <Button type="link" onClick={() => setIsModal(true)} hidden={!canHandlerTask()}>
        <HandlerIcon className="w-5 h-5 inline-block mr-2" />
        <span>Chuyển xử lý</span>
      </Button>
      <Modal
        width={1000}
        footer={false}
        title="Chuyển xử lý văn bản đến"
        visible={isModal}
        onCancel={() => setIsModal(false)}
      >
        <HandleModalComp id={idDocDe} />
      </Modal>
      <Button type="link" onClick={() => setIsCompletedModal(true)} hidden={!canCompletedTask()}>
        <CompleteIcon className="w-5 h-5 inline-block mr-2" />
        <span>Hoàn thành</span>
      </Button>
      <Modal
        width={1000}
        title="Đóng xử lý văn bản đến"
        visible={isCompletedModal}
        onCancel={() => setIsCompletedModal(false)}
        footer={false}
      >
        <CompletedModalComp id={idDocDe} />
      </Modal>
    </div>
  )

  return (
    <>
      {isLoading ? (
        <Row style={{ minHeight: 300, width: '100%' }} align="middle" justify="center">
          <Spin size="large" tip="loading..." />
        </Row>
      ) : (
        <>
          <Row className="inline-flex" style={{ fontWeight: 500, fontSize: 14 }}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <span>Danh sách văn bản đến</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span>Chi tiết văn bản đến</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Tabs tabBarExtraContent={ExtraButtons} className="w-full">
            <TabPane tab="Thông tin văn bản" key="infomation">
              <div
                style={{
                  fontFamily: 'SF Pro Display',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#595959',
                }}
              >
                {controller.state.detailDE?.so_ky_hieu} : {controller.state.detailDE?.trich_yeu}
              </div>
              <DEDetail idDocDe={idDocDe} />
            </TabPane>
            <TabPane tab="Chuyển xử lý" key="task">
              <DocumentTask id={idDocDe} />
            </TabPane>
            <TabPane tab="Lịch sử chỉnh sửa" key="history">
              <DocumentEditingHistory id={idDocDe} />
            </TabPane>
          </Tabs>
        </>
      )}
    </>
  )
}
