import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const DefaultContainer = ({ children }) => {
  return (
    <Container
      maxW="100%"
      w="100%"
      bg="transparent"
      centerContent
      padding="20px"
    >
      <NavBar />
      {children}
    </Container>
  );
};

export default DefaultContainer;
