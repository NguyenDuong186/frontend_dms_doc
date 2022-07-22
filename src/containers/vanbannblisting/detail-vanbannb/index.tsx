import { Breadcrumb, Row, Tabs } from 'antd'
import { useEffect } from 'react'
import { CaretRight } from '../../../components/CustomIcon'
import DocumentEditingHistory from '../../../components/documentjob/DocumentEditingHistory'
import { UseDCDetailController } from './controller'
import DCDetail from './DetailDC'
const { TabPane } = Tabs

export default function NBDetailContainer({ id }: any) {
  const controller = UseDCDetailController()
  useEffect(() => {
    controller.getDetail(id)
  }, [])
  return (
    <>
      <Row className="inline-flex" style={{ fontWeight: 500, fontSize: 14 }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Danh sách văn bản nội bộ</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Chi tiết văn bản nội bộ</span>
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
            {controller.state.detailDC?.so_ky_hieu} : {controller.state.detailDC?.trich_yeu}
          </div>
          <DCDetail id={id} />
        </TabPane>
        <TabPane tab="Lịch sử chỉnh sửa" key="history">
          <DocumentEditingHistory id={id} />
        </TabPane>
      </Tabs>
    </>
  )
}
