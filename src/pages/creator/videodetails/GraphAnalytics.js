import React from 'react'
import { CardHeader, Card, CardBody } from 'shards-react'
import Graph from 'react-json-graph'

import ClipNode from './ClipNode'

const size = {
  width: 150,
  height: 40,
}
const topPadding = 25
const graphData = {
  nodes: [{
    id: '0',
    label: {
      name: 'Start',
      value: 13601,
      total: 13601,
    },
    position: {x: 20, y: topPadding + 213},
    size,
  }, {
    id: '1',
    label: {
      name: 'Hills',
      value: 8501,
      total: 13601,
    },
    position: {x: 220, y: topPadding + 87},
    size,
  }, {
    id: '2',
    label: {
      name: 'Beach',
      value: 5100,
      total: 13601,
    },
    position: {x: 220, y: topPadding + 337},
    size,
  }, {
    id: '3',
    label: {
      name: 'Temples',
      value: 4710,
      total: 8501,
    },
    position: {x: 420, y: topPadding + 25},
    size,
  }, {
    id: '4',
    label: {
      name: 'Forest',
      value: 3791,
      total: 8501,
    },
    position: {x: 420, y: topPadding + 150},
    size,
  }, {
    id: '5',
    label: {
      name: 'Temples',
      value: 3542,
      total: 5100,
    },
    position: {x: 420, y: topPadding + 275},
    size,
  }, {
    id: '6',
    label: {
      name: 'Forest',
      value: 1558,
      total: 5100,
    },
    position: {x: 420, y: topPadding + 400},
    size,
  }, {
    id: '7',
    label: {
      name: 'Dinner',
      value: 761,
      total: 4710,
    },
    position: {x: 620, y: topPadding + 0},
    size,
  }, {
    id: '8',
    label: {
      name: 'Home',
      value: 3949,
      total: 4710,
    },
    position: {x: 620, y: topPadding + 50},
    size,
  }, {
    id: '9',
    label: {
      name: 'Dinner',
      value: 2651,
      total: 3791,
    },
    position: {x: 620, y: topPadding + 125},
    size,
  }, {
    id: '10',
    label: {
      name: 'Home',
      value: 1140,
      total: 3791,
    },
    position: {x: 620, y: topPadding + 175},
    size,
  }, {
    id: '11',
    label: {
      name: 'Dinner',
      value: 1362,
      total: 3542,
    },
    position: {x: 620, y: topPadding + 250},
    size,
  }, {
    id: '12',
    label: {
      name: 'Home',
      value: 2180,
      total: 3542,
    },
    position: {x: 620, y: topPadding + 300},
    size,
  }, {
    id: '13',
    label: {
      name: 'Dinner',
      value: 812,
      total: 1558,
    },
    position: {x: 620, y: topPadding + 375},
    size,
  }, {
    id: '14',
    label: {
      name: 'Home',
      value: 746,
      total: 1558,
    },
    position: {x: 620, y: topPadding + 425},
  }],
  edges: [{
    source: '0',
    target: '1',
  }, {
    source: '0',
    target: '2',
  }, {
    source: '1',
    target: '3',
  }, {
    source: '1',
    target: '4',
  }, {
    source: '2',
    target: '5',
  }, {
    source: '2',
    target: '6',
  }, {
    source: '3',
    target: '7',
  }, {
    source: '3',
    target: '8',
  }, {
    source: '4',
    target: '9',
  }, {
    source: '4',
    target: '10',
  }, {
    source: '5',
    target: '11',
  }, {
    source: '5',
    target: '12',
  }, {
    source: '6',
    target: '13',
  }, {
    source: '6',
    target: '14',
  }],
  isStatic: true,
}

export default class GraphAnalytics extends React.Component {
  render() {
    return (
      <Card small>
        <CardHeader className="border-bottom">
          <h6 className="m-0">Analytics</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <div style={{overflow: 'auto'}}>
            <Graph
              width={800}
              height={525}
              json={graphData}
              onChange={() => {}}
              Node={ClipNode}
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
