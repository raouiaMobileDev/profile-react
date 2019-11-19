import React from 'react';


class Comment extends React.Component {


    constructor () {
      super()    
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        characterCount: 0
      }
    }
    
    handleChange (event) {
      console.log(this)
      this.setState({
        characterCount: event.target.value.length
      })
    }
    
    render() {
      return (
        <div>
          <textarea className="form-control" placeholder="Write a comment..." onChange={this.handleChange}/>
          <small>{this.props.maxLetters - this.state.characterCount} Remaining</small>
        </div>
      )
    }
  }

  export default  Comment;