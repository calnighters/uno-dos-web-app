import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const DefaultContainer = ({ children }) => {
  return (
    <Container
      maxW="100%"
      w="100%"
      h="100vh"
      bgGradient="linear(to-bl, red.500, blue.500)"
      centerContent
      padding="20px"
    >
        <NavBar/>
      {children}
    </Container>
  );
};

export default DefaultContainer;
