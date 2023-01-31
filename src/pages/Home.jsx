import { Box, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import DefaultContainer from "../containers/DefaultContainer";
import TeamMemberCarousel from "../components/TeamMemberCarousel";

const Home = () => {
  return (
    <DefaultContainer>
      <VStack
        divider={<StackDivider />}
        spacing={4}
        align="stretch"
        maxW="80ch"
        color="white"
      >
        <Box>
          <Heading pb={2} pl={3}>
            About
          </Heading>
          <Text textAlign="center">
            This is a University group project as part of the Aston University
            Team Project (2022-23 DC2TPR_P1_A)
            <br />
            The criteria for the project is to build a card based, single player
            game that is compiled and available to play by downloading a single
            executable file.
            <br />
            The game will follow the rules and structure of the original game
            ensuring no confusion will occur for users comparing it to the
            original.
          </Text>
        </Box>
        <Box>
          <Heading pb={2} pl={3}>
            Plan
          </Heading>
          <Text textAlign="center">
            The plan is to build an implementation of the card game Uno Dos in
            the programming language C#.
            <br />
            As a stage one to the production of the application, a text based
            app will be built.
            <br />
            At stage two, we will look to move the core logic of the game into
            Unity and create a UI to interact with the game.
          </Text>
        </Box>
        <Box>
          <Heading pb={2} pl={3}>
            Team
          </Heading>
          <TeamMemberCarousel />
        </Box>
      </VStack>
    </DefaultContainer>
  );
};

export default Home;
