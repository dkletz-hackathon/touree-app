import React from 'react'
import { Row, Col } from 'shards-react'

import SmallStats from '../../../components/analytics/SmallStats'

export default class Stats extends React.Component {
  state = {
    smallStats: [
      {
        label: "Impressions",
        value: "100.4 K",
        percentage: "12.4",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: {md: "6", sm: "6"},
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(23,198,113,0.1)",
            borderColor: "rgb(23,198,113)",
            data: [1, 2, 1, 3, 3, 3, 3, 6, 6, 6,6]
          }
        ]
      },
      {
        label: "Click-Through Rate",
        value: "20.1%",
        percentage: "90%",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: {md: "4", sm: "6"},
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(55, 203, 240,0.1)",
            borderColor: "rgb(55, 203, 240)",
            data: [1, 7, 1, 3, 1, 4, 8]
          }
        ]
      },
      {
        label: "Views",
        value: "1.2M",
        percentage: "98%",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: {md: "4", sm: "6"},
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(255,180,0,0.1)",
            borderColor: "rgb(255,180,0)",
            data: [2, 3, 3, 3, 4, 3, 3]
          }
        ]
      },
      {
        label: "Unique Viewers",
        value: "998K",
        percentage: "110%",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: {md: "4", sm: "6"},
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(255,0,200,0.1)",
            borderColor: "rgb(255,0,0)",
            data: [2, 3, 3, 3, 4, 4,4,4,4,4]
          }
        ]
      }
    ]
  }

  render() {
    return (
      <Row>
        {this.state.smallStats.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
            <SmallStats
              id={`small-stats-${idx}`}
              variation="1"
              chartData={stats.datasets}
              chartLabels={stats.chartLabels}
              label={stats.label}
              value={stats.value}
              percentage={stats.percentage}
              increase={stats.increase}
              decrease={stats.decrease}
            />
          </Col>
        ))}
      </Row>
    )
  }
}
