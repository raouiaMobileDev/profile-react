
import React  from 'react';

class LikeIcon extends React.Component {
    render () {
      return (
        <div>
          <span className="fa-stack fa-sm">
            <i style ={{color: '#0099ff'}} className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
          </span>
        </div>
      )
    }
  }

  export default  LikeIcon;