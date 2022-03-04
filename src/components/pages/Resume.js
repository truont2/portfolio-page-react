import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function Resume() {
  return (
    <Container className='content'>
      <h3>Resume</h3>
      <a href="https://drive.google.com/drive/u/0/folders/1Ml8QV-lttdfR2HfemGn4c9il36OHGRDs"><Button variant='secondary' role="button" className='resume'><i class="fa fa-file "></i> SEE MY RESUME</Button></a>

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
