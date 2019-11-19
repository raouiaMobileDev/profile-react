import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc';
import Post from '../Post/Post';
import {Container} from 'react-bootstrap';

class PostBuilder extends Component
{
    
    state={
        posts:[],
        userName:undefined,
        post:{
            userId: null,
            id: null ,
            title: null,
            body: null,
            }
        
    };
   
    

    constructor(props) {
        super(props);
        const idUser =this.props.match.params.id
        const user= this.props.location.state.userName
    
        fetch("https://jsonplaceholder.typicode.com/posts?userId="+idUser)
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          
          this.setState({
            posts: this.gridThreeColumns(jsonData),
            userName:this.props.location.state.userName
          }, () => {
            console.log(this.state.posts);
          });

          console.log('this.state.posts');
          console.log(this.state.posts);
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })
      }

     

       gridThreeColumns = (list) => {
        let newPosts = [];
        let posts = list;
    
        let count = 1;
        let vessel = {};
    
        if(posts){
            posts.forEach( element =>{
                if(count === 1){
                    vessel["blockOne"] = element;
                    count++;
                } else if(count===2) {
                    vessel["blockTwo"] = element;
                    newPosts.push(vessel);
                    count++
                  } else {
                    vessel["blockThree"] = element;
                    newPosts.push(vessel);
                    count = 1;
                    vessel = {};
                
                    }
    
                   
            })
        }
        return newPosts;
    }



         buildPosts = () => (
            <div>
              {this.state.posts.map(post => (
                 <Post 
                   key={post.id}
                   item={post} 
                   userName={this.state.userName}   
                 /> 
                
              ))}
            </div>
          );


    render(){

        return(
            <Hoc>
            
            <Container>
            {this.buildPosts()}
            </Container>
             
                    
            </Hoc>
        )
    }
}

export default  PostBuilder;