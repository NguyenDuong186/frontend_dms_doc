import authStoreReducer from '../../containers/login/store'
import dataTaskStoreReducer from '../../containers/tasklisting/list-tasklisting/store'
import dataDEStoreReducer from '../../containers/vanbandenlisting/list-vanbandenlisting/store'
import dataDIStoreReducer from '../../containers/vanbandilisting/list-vanbandilisting/store'
import dataDHStoreReducer from '../../containers/vanbandhlisting/list-vanbandh/store'
import dataDCStoreReducer from '../../containers/vanbannblisting/list-vanbannb/store'
import dataExpiredStoreReducer from '../../containers/expiredlisting/list-expiredlisting/store'
import argencyStoreReducer from '../../containers/settings/argencys/argency_list/store'
import tagStoreReducer from '../../containers/settings/tags/tags_list/store'
import departmentStoreReducer from '../../containers/settings/departments/departments_list/store'
import userStoreReducer from '../../containers/settings/users/users_list/store'
import detailDEStoreReducer from '../../containers/vanbandenlisting/detail-vanbanden/store'
import detailDIStoreReducer from '../../containers/vanbandilisting/detail-vanbandi/store'
import detailDHStoreReducer from '../../containers/vanbandhlisting/detail-vanbandh/store'
import detailDCStoreReducer from '../../containers/vanbannblisting/detail-vanbannb/store'
import detailDepartmentStoreReducer from '../../containers/settings/departments/detail_department/store'
import userShareDocStoreReducer from '../../containers/sharedocument/listusersharedoc/store'
import listEditHistoryStoreReducer from '../../containers/historyeditdoc/store'
const rootReducer = {
  auth: authStoreReducer,
  dataTask: dataTaskStoreReducer,
  dataDE: dataDEStoreReducer,
  dataDI: dataDIStoreReducer,
  dataDH: dataDHStoreReducer,
  dataDC: dataDCStoreReducer,
  dataExpired: dataExpiredStoreReducer,
  argency: argencyStoreReducer,
  tag: tagStoreReducer,
  department: departmentStoreReducer,
  user: userStoreReducer,
  detailDE: detailDEStoreReducer,
  detailDH: detailDHStoreReducer,
  detailDI: detailDIStoreReducer,
  detailDC: detailDCStoreReducer,
  detailDepartment: detailDepartmentStoreReducer,
  userShareDoc: userShareDocStoreReducer,
  listEditHistory: listEditHistoryStoreReducer,
}

export default rootReducer
