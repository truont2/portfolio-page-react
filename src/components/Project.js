import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default function Project(props) {
  // just define the card to make the project
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.img} alt="Card image" className="card-image"/>
      <Card.ImgOverlay className="card-content">
        <Card.Title className="card-text">{props.name}</Card.Title>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
        <a href={props.link} className="btn btn-info" role="button">Check it out</a>
      </Card.ImgOverlay>
    </Card>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={props.img} />
    //   <Card.Body>
    //     <Card.Title>{props.name}</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  );
}
