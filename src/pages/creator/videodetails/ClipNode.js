import { Node } from 'react-json-graph'
import ProgressBar from './ProgressBar'

class ClipNode extends Node {
  renderContainer({content}) {
    return (
      <div className="analytic-node-container">
        <div className="node-heading">{content.name}</div>
        <div className="node-bar">
          <ProgressBar bgcolor="#f00" value={content.value} total={content.total}/>
        </div>
      </div>
    );
  }
}

export default ClipNode
