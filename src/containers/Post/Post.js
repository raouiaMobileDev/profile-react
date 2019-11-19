import React from 'react';
//import { Col } from 'react-bootstrap';
import style from './Post.module.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Row, Col} from 'react-bootstrap';

//import GoMyCodeLogo from '../../../assets/images/gomycode.png';
import GoMyCodeLogo from '../../assets/images/gomycode.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
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
        <Card style={{ width: '18rem', height:'38rem'}}>
 
        {/* <Link to={`/detailPost/${props.item.blockOne.id}`}>  */}
        {/* <Link to={ { */}
       {/* pathname: "/detailPost/5952",  */}
       {/* param1: "Par1"  */}
      {/* }}> */}
       {/* <Link to={{ pathname: '/detailPost', state: { idPost: props.item.blockOne.id} }}> */}
         <Link to={{ pathname: `/detailPost/${props.item.blockOne.id}`, state: { userName: props.userName, postContent:props.item.blockOne.body} }}> 
        <Card.Img variant="top" src={GoMyCodeLogo}  />
        </Link>
        <Card.Body>
          <Card.Title>{props.item.blockOne.title}</Card.Title>
          <Card.Text>
            {props.item.blockOne.body}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card style={{ width: '18rem', height:'38rem'}}>
      <Link to={{ pathname: `/detailPost/${props.item.blockTwo.id}`, state: { userName: props.userName, postContent:props.item.blockTwo.body} }}> 
        <Card.Img variant="top" src={GoMyCodeLogo}  />
        </Link>
        <Card.Body>
          <Card.Title>{props.item.blockTwo.title}</Card.Title>
          <Card.Text>
            {props.item.blockTwo.body}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      </Col>


      <Col>
      <Card style={{ width: '18rem', height:'38rem'}}>
      <Link to={{ pathname: `/detailPost/${props.item.blockThree.id}`, state: { userName: props.userName, postContent:props.item.blockThree.body} }}> 
        <Card.Img variant="top" src={GoMyCodeLogo}  />
        </Link>
        <Card.Body>
          <Card.Title>{props.item.blockThree.title}</Card.Title>
          <Card.Text>
            {props.item.blockThree.body}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      </Col>


      </Row>
      
      );

}

export default post;




