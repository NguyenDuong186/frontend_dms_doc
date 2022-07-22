import { Row, Tabs } from 'antd'
import { CaretRight } from '../../../components/CustomIcon'
import DocumentEditingHistory from '../../../components/documentjob/DocumentEditingHistory'
import DHDetail from '../../vanbandhlisting/detail-vanbandh/DHDetail'
const { TabPane } = Tabs

export default function VanBanDHListingContainer() {
  return (
    <>
      <Row className="inline-flex" style={{ fontWeight: 500, fontSize: 14 }}>
        <span className="text-black font-bold">{`Chi tiết`}</span>
        <CaretRight className="w-5 h-5" />
        <span style={{ fontWeight: 600, color: '#595959' }}>Văn bản điều hành</span>
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
          ></div>
          <DHDetail />
        </TabPane>
        <TabPane tab="Lịch sử chỉnh sửa" key="history">
          <DocumentEditingHistory />
        </TabPane>
      </Tabs>
    </>
  )
}
