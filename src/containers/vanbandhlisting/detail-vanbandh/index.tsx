import { Breadcrumb, Row, Tabs } from 'antd'
import { useEffect } from 'react'
import { CaretRight } from '../../../components/CustomIcon'
import DocumentEditingHistory from '../../../components/documentjob/DocumentEditingHistory'
import { UseDHDetailController } from './controller'
import DHDetail from './DHDetail'
const { TabPane } = Tabs

export default function VanBanDHListingContainer({ id }: any) {
  const controller = UseDHDetailController()
  useEffect(() => {
    controller.getDetail(id)
  }, [])
  return (
    <>
      <Row className="inline-flex" style={{ fontWeight: 500, fontSize: 14 }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Danh sách văn bản điều hành</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Chi tiết văn bản điều hành</span>
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
            }}
          >
            {controller.state.detailDH?.so_ky_hieu} : {controller.state.detailDH?.trich_yeu}
          </div>
          <DHDetail id={id} />
        </TabPane>
        <TabPane tab="Lịch sử chỉnh sửa" key="history">
          <DocumentEditingHistory id={id} />
        </TabPane>
      </Tabs>
    </>
  )
}
