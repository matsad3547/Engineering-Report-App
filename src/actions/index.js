
export const changeMetricVal = ({ id, val, name }) => {
  return {
    type: 'CHANGE_METRIC_VAL',
    id,
    val,
    name,
  }
}

export const saveReportNotes = output => {
  return {
    type: 'SAVE_REPORT_NOTES',
    string: output,
  }
}

export const setNewReportConfig = ({model, shortName, configNum, ballast}) => {
  return {
    type: 'SET_NEW_REPORT_CONFIG',
    model,
    shortName,
    configNum,
    ballast,
  }
}

export const saveReport = output => {
  return {
    type: 'SAVE_REPORT_AND_RESET',
    output,
  }
}

export const requestReports = () => {
  return {
    type: 'REPORTS_REQUESTED',
  }
}

export const receiveReports = reports => {
  return {
    type: 'REPORTS_RECEIVED',
    reports,
  }
}

export const reportError = error => {
  return {
    type: 'REPORTS_ERRORED',
    error
  }
}

export const queueReport = report => {
  return {
    
  }
}
