import React from "react";
import Profile from "../images/profile.png";
import Container from "react-bootstrap/Container";

export default function AboutMe() {
  return (
    <Container className="content">
      <h2>About me</h2>
      <img src={Profile} alt="profile" className="profile" />
      <p className="about-text">
        Aspiring Full-Stack Developerand recent graduate from the University of
        Washington with a major in Biochemistry. Decided to change my career path toward tech after working for a while in the research field. Very excited to take on new
        challenges and to become a software developer in the future to develop
        exciting and innovative applications for users.
      </p>

      <p className="about-text">
        Gained interest in computer programming after taking classes
        in JAVA and Python. I hope to learn more and to become a better
        programmer and developer.{" "}
      </p>
      <p className="about-text">
        Main Interests: React, Website development, App development, Softare development, snowboarding.{" "}
      </p>
    </Container>
  );
}
