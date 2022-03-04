import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function Resume() {
  return (
    <Container className='content'>
      <h3>Resume</h3>
      <a href="https://drive.google.com/file/d/1DjsPRdFZ6sg0AiYTsl9gDr2Iq8y7QRP4/view?usp=sharing"><Button variant='secondary' role="button" className='resume'><i class="fa fa-file "></i> SEE MY RESUME</Button></a>

      <h4>Front-end Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h4>Back-end Proficiencies</h4>
      <ul>
        <li>MYSQL - Sequelize</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB - Mongoose</li>
      </ul>
    </Container>
  )
}
