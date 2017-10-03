import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from "../Grid";
// import Thumbnail from "../Thumbnail";
import "./doglist.css";

const DogList = (props) => (
<Container>
  <Row>  
  <div>
    {props.dogs.map(item => (
      <div key={item._id}>
      <Col size="xs-4 sm-4">
      <div className='panel-body'>
          <img src={item.image || "https://placehold.it/300x300"} />
          <h3><center>{item.name}</center></h3>
          </div>
        </Col>
     
   
      </div>
    ))}
  </div>
    </Row>
  </Container>
  
);



DogList.propTypes = {
  dogs: PropTypes.array.isRequired
}

export default DogList;



//   <li key={props._id}>
//   {props.name}
// </li>