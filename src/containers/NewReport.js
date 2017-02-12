import { connect } from 'react-redux'

import { saveReport } from '../actions'
import { getReports } from '../actions/getReports'

import ReportInterface from '../components/ReportInterface'


const mapStateToProps = state => {
  return {
    config: state.reportConfig,
    metricValues: state.metricValues,
    notes: state.notes,
    previousMetricValues: state.previousMetricValues,
  }
}

const mapDispatchToProps = dispatch => {

  return {
    saveReport: () => dispatch(saveReport()),
    getReports: () => dispatch(getReports('reports')),
    }
}

const NewReport = connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ReportInterface)

export default NewReport
