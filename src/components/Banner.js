import { useRef } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Banner() {
  const ref = useRef();
  return (
    <>
      <Container
        fluid
        className="text-center mb-4"
        md="auto"
        lg="auto"
        xs="auto"
      >
        <h1 className="text-center mt-4">Let's Take The Route Together !</h1>
        <Image
          responsive
          src="./images/people.png"
          className="banner-image mb=2"
        ></Image>
        <p>
          No more Walking Alone! An App to connect with people while working out
          in the same geographical area and make friends.{" "}
          <p>
            You can also create your own route from the map for walking, Cycling
            and hiking and then select a time and invite friends to join you.
            Also chat with them about your plans or routine in the app itself.
          </p>
        </p>
      </Container>
    </>
  );
}
