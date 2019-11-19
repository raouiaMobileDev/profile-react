
import React  from 'react';

import LikeIcon from './LikeIcon';



class Like extends React.Component {
    constructor() {
      super()
      
      this.state = {
        liked: false
      }
      
      this.toggleLike = this.toggleLike.bind(this)
    }
    
    toggleLike () {
          this.setState(previousState => ({
        liked: !previousState.liked
      }))
    }
    
    render() {
      return (
        <div style={{  margin: '20px'}}>
          {/* Include the LikeIcon subcomponent within the Like component*/}
          {this.state.liked && <LikeIcon />}
          <hr />
            <button type="button"  className="btn btn-primary" onClick={this.toggleLike}>
            <i
              className="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
            />
            &nbsp;
            <span className="align-middle">Like</span>
          </button>
        </div>
      )
    }
  }

  export default  Like;