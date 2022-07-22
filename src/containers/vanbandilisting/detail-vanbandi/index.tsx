import { Breadcrumb, Row, Tabs } from 'antd'
import { useEffect } from 'react'
import DocumentEditingHistory from '../../../components/documentjob/DocumentEditingHistory'
import { UseDIDetailController } from './controller'
import DIDetail from './DIDetail'
const { TabPane } = Tabs

export default function DIDetailContainer({ id }: any) {
  const controller = UseDIDetailController()
  useEffect(() => {
    controller.getDetail(id)
  }, [])
  return (
    <>
      <Row className="inline-flex" style={{ fontWeight: 500, fontSize: 14 }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Danh sách văn bản đi</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Chi tiết văn bản đi</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Tabs className="w-full">
        <TabPane tab="Thông tin văn bản" key="infomation">
          <div
            style={{
              fontFamily: 'SF Pro Display',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '22px',
              color: '#595959',
              marginBottom: '14px',
              padding: '0 16px',
            }}
          >
            {controller.state.detailDI?.so_ky_hieu} : {controller.state.detailDI?.trich_yeu}
          </div>
          <DIDetail id={id} />
        </TabPane>
        <TabPane tab="Lịch sử chỉnh sửa" key="history">
          <DocumentEditingHistory id={id} />
        </TabPane>
      </Tabs>
    </>
  )
}
