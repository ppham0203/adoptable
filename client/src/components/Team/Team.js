import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Team.css";

const Team = () => (

  <div>
  	<Container>
          <Row>
          <h1>The Dream Team</h1>
            <Col size="md-3">
            <img className="andrewteamimg" src={require("../../assets/images/andrewdog.jpg")} onmouseover="" alt='Andrew'/>
            <h1>Andrew</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-3">
           <img className="toriteamimg" src={require("../../assets/images/toridog.jpeg")} alt='Tori'/>
            <h1>Tori</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-3">
            <img className="peterteamimg" src={require("../../assets/images/peterdog.jpg")} alt='Peter'/>
            <h1>Peter</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-3">
            <img className="ianteamimg" src={require("../../assets/images/iandog.png")} alt='Ian'/>
            <h1>Ian</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Container>
  </div>
);

export default Team;
