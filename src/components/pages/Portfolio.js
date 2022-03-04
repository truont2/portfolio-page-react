import React from "react";
import Project from "../Project";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container'

import skyfall from '../images/skyfall.PNG'
import anime from '../images/anime.png';
import weather from '../images/Capture1.png'
import password from '../images/password_result.png'

export default function Portfolio() {
  // loop through porject info, pass in data as props and render a card for each project
  const proj = [
    {
      name: 'Whats that anime', 
      img:   anime,
      description: 'Front-end application that analyzes a given image and returns information of  any anime found. Utilizes HTML, CSS, and JavaScript',
      link: 'https://andrewtranmsw.github.io/whatsThatAnime/'
    }, 
    {
      name: 'Skyfall', 
      img: skyfall,
      description: 'Travel planning website that allows users to login and create their own trip plans and map out their budget with an interactive chart. Utilizes HTML, CSS, JavaScript, Express, Node.js, HandleBars. and MYSQL',
      link: 'https://skyfall-travel.herokuapp.com/'
    },
    {
      name: 'Weather Dashboard', 
      img: weather,
      description: 'Weather Dashboard that displays the current weather of a inputtted city and its 5-day forcast. Utilizes: API, HTML, CSS, JavaScript',
      link: 'https://github.com/truont2/Weather-App'
    }, 
    {
      name: 'Password Generator', 
      img: password,
      description: 'Generate a randomized password. Password length and content can be customized as well. Tech: HTML, CSS, JavaScript',
      link: 'https://truont2.github.io/Password_Generator/'
    }
  ]
  return (
    <Container className="content ">
      <Row xs={1} md={2} className="g-2">
      {proj.map((project, index) => (
        <Col>
          <Project key={index} name={project.name} img={project.img} description={project.description} link={project.link}/>
        </Col>
      ))}
    </Row>
    
    </Container>
    
  );
}
