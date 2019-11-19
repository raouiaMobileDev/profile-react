import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc';
import User from '../User/User';
import {Container} from 'react-bootstrap';

class UserBuilder extends Component
{
    
    state={
        users:[],
    };
   
    

    constructor(props) {
        super(props);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          
          this.setState({
            users: this.gridThreeColumns(jsonData)
          }, () => {
            console.log(this.state.users);
          });

          console.log('this.state.users');
          console.log(this.state.users);
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })
      }

     

       gridThreeColumns = (list) => {
        let newUsers = [];
        let users = list;
    
        let count = 1;
        let vessel = {};
    
        if(users){
            users.forEach( element =>{
                if(count === 1){
                    vessel["blockOne"] = element;
                    count++;
                } else if(count===2) {
                    vessel["blockTwo"] = element;
                    newUsers.push(vessel);
                    count++
                  } else {
                    vessel["blockThree"] = element;
                    newUsers.push(vessel);
                    count = 1;
                    vessel = {};
                
                    }
    
                   
            })
        }
        return newUsers;
    }



         buildUsers = () => (
            <div>
              {this.state.users.map(user => (
                 <User 
                   key={user.id}
                   item={user}    
                 /> 
                
              ))}
            </div>
          );


    render(){

        return(
            <Hoc>
            
            <Container>
            {this.buildUsers()}
            </Container>
             
                    
            </Hoc>
        )
    }
}

export default  UserBuilder;