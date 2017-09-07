import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'

import { date } from '../utils/'

const ReportItem = ({ config,
                      report,
                      index,
                      queued,
                      queueReport,
                      unqueueReport,
                    }) => {

  const { model, shortName, configNum } = config

  const checked = queued.includes(report) ? true : false

  const onCheck = (e, i) => {
    e.preventDefault()
    if (checked) {
      let index = queued.indexOf(report)
      unqueueReport(index)
    }
    else queueReport(report)
  }

  const styles = {
    button: {
      height: 25,
      width: 125,
    },
    checkbox: {
      marginBottom: 5,
    },
    label: {
      color: 'white',
    },
    checked: {
      fill: 'white'
    },
    unchecked: {

    }
  }

  return (
    <div className="reportItem">
      <p>{`${index + 1}. `}{model || '<model>'}: configuration {configNum || '<#>'}</p>

      <p>desc: {shortName || '<description>'}</p>
      <p>{date(report)}</p>

      <Checkbox
        label="Select to Download"
        labelStyle={styles.label}
        style={styles.checkbox}
        iconStyle={!checked ? styles.checked : styles.unchecked}
        checked={checked}
        onCheck={onCheck}
        />
      <div className="download">
      </div>
      <RaisedButton
        containerElement={<Link to={`/app/existing_reports/${report}`}/>}
        label="View Report"
        style={styles.button}
        className="reportButton"
        />
    </div>
  )
}

export default ReportItem
