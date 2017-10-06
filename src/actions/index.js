
export const changeMetricVal = ({ id, val, name }) => ({
  type: 'CHANGE_METRIC_VAL',
  id,
  val,
  name,
})

export const saveReportNotes = output => ({
  type: 'SAVE_REPORT_NOTES',
  string: output,
})

export const setReportConfig = ({model, shortName, configNum, ballast}) => ({
  type: 'SET_NEW_REPORT_CONFIG',
  model,
  shortName,
  configNum,
  ballast,
})

export const saveReport = output => ({
  type: 'SAVE_REPORT_AND_RESET',
  output,
})

export const receiveReports = (reports, n) => ({
  type: 'REPORTS_RECEIVED',
  reports,
  n,
})

export const queueReport = report => ({
  type: 'QUEUE_REPORT',
  report,
})

export const unqueueReport = index => ({
  type: 'UNQUEUE_REPORT',
  index,
})

export const clearQueue = () => ({
  type: 'CLEAR_QUEUE',
})

export const setUserData = ({ team,
                              displayName,
                              email,
                              uid,
                              admin,
                              approved,
                            }) => ({
  type: 'SET_USER_DATA',
  team,
  displayName,
  email,
  uid,
  admin,
  approved,
})

export const setUserProperty = (property) => {
  const key = Object.keys(property)[0]
  return {
    type: 'SET_USER_PROPERTY',
    [key]: property[key],
  }
}

export const clearUserData = () => ({
  type: 'CLEAR_USER_DATA',
})

export const receiveKeywords = keywords => ({
  type: 'KEYWORDS_RECEIVED',
  keywords,
})

export const setDataProperty = property => {
  const key = Object.keys(property)[0]
  return {
    type: 'SET_DATA_PROPERTY',
    [key]: property[key]
  }
}

export const setDataError = error => {
  const key = Object.keys(error)[0]
  return {
    type: 'SET_DATA_ERROR',
    [key]: error[key],
  }
}
