import React, {Component} from 'react';

import Comment from './Comment';
import Like from './Like';

import {Image} from 'react-bootstrap';

import UserLogo from '../../assets/images/user.png';
import RaouiaLogo from '../../assets/images/raouia.png';

class DetailPost extends Component
{
  state={
    userName:undefined,
    postContent:undefined,
    comments:[]
    
};


constructor(props) {
  super(props);

  const user= this.props.location.state.userName
  const postBody=this.props.location.state.postContent
  const idPost= this.props.match.params.id

  fetch("https://jsonplaceholder.typicode.com/comments?postId="+idPost)
  .then(response => response.json())
  .then((jsonData) => { 
    this.setState({
      comments: jsonData,
      userName:user,
      postContent:postBody
    }, () => {
      console.log(this.state.comments);
    });
  })
}



/*

    componentDidMount () {
       
       // const { handle } = this.props.match.params
        const userName= this.props.location.state.userName
        console.log("id")
        console.log(this.props.match.params.id) // this is 595212758daa6810cbba4104 
     
    }
*/

buildComments= () => (
  <div>
    {this.state.comments.map(comment => (
      <div key ={comment.id} className="card-footer text-muted">
              <div className="card-block">
                <div style={{ display: 'flex',flexDirection: 'row', margin:'5px', color:'#000000'}}>
                  <Image  src={RaouiaLogo} style={{  height: '70px', width: '70px'}} roundedCircle />
                  <div className="info" style={{ marginLeft:'30px'}}>
                    <div className="row">
                      <h6> {comment.name}</h6>
                    </div>
                    <div className="row">
                      <small style={{color: '#90949c'}}>20 mins</small>
                    </div>
                  </div>
                  </div>
                </div>
                <p style={{marginLeft:"90px"}}>{comment.body}</p>
      </div>
      
    ))}
  </div>
);


    render() {
        return (
          <div className="col-8 offset-2">


            <div className="card">
              <div className="card-block">
                <div style={{ display: 'flex',flexDirection: 'row', marginBottom: '5px', margin:'20px'}}>
                  <Image  src={UserLogo} style={{  height: '70px', width: '70px'}} roundedCircle />
                  <div className="info" style={{ marginLeft:'30px'}}>
                    <div className="row">
                      <h6> {this.state.userName}</h6>
                    </div>
                    <div className="row">
                      <small style={{color: '#90949c'}}>10 mins</small>
                    </div>
                  </div>
                  </div>
                </div>
                <p style={{marginLeft:"30px"}}>{this.state.postContent}</p>
                <Like />
              </div>

            
            {this.buildComments()}

              <div className="card-footer text-muted">
                <Comment maxLetters={140} />
              </div>
          </div>
        )
      }
}

export default  DetailPost;


