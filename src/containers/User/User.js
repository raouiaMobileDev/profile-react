import React from 'react';
//import { Col,  } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Row, Col, Image} from 'react-bootstrap';

//import GoMyCodeLogo from '../../../assets/images/gomycode.png';
import UserLogo from '../../assets/images/user.png';

import {
    Link,
  } from "react-router-dom";


const post = props => {

    return (
        // 
        // <div>
        // <div>  {props.item.title} </div> 
        // <div> {props.item.body}</div>
        // </div>
      
      
        <Row style={{ marginBottom: "50px"}}>

        <Col>
        <Card style={{ width: '15rem', height:'28rem'}}>
        <Link to={{ pathname: `/posts/${props.item.blockOne.id}`, state: { userName: props.item.blockOne.name} }}> 
        <Image  src={UserLogo} style={{margin:"20px"}} roundedCircle />
        </Link>
      
        <Card.Body>
          <Card.Title>{props.item.blockOne.name}</Card.Title>
          <Card.Text>
            {props.item.blockOne.email}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
     
      </Col>

      <Col>
      
      <Card style={{ width: '15rem', height:'28rem'}}> 
      <Link to={{ pathname: `/posts/${props.item.blockTwo.id}`, state: { userName: props.item.blockTwo.name} }}> 
        <Image  src={UserLogo} style={{margin:"20px"}} roundedCircle />
      </Link>
        <Card.Body>
          <Card.Title>{props.item.blockTwo.name}</Card.Title>
          <Card.Text>
            {props.item.blockTwo.email}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
     
      </Col>


      <Col>
   
      <Card style={{ width: '15rem', height:'28rem'}}>
      <Link to={{ pathname: `/posts/${props.item.blockThree.id}`, state: { userName: props.item.blockThree.name} }}> 
        <Image  src={UserLogo} roundedCircle style={{margin:"20px"}}/>
      </Link>
        <Card.Body>
          <Card.Title >{props.item.blockThree.name}</Card.Title>
          <Card.Text>
           {props.item.blockThree.email}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      </Col>


      </Row>
      
      );

}

export default post;




