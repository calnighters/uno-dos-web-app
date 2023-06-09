import {
    Box,
    Heading,
    StackDivider,
    VStack,
    Text,
    Link,
  } from "@chakra-ui/react";
  import DefaultContainer from "../containers/DefaultContainer";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Download = () => {
  return (
    <DefaultContainer>
      <VStack
        divider={<StackDivider />}
        spacing={4}
        align="stretch"
        maxW="80ch"
        color="white"
      >
        <Box align="center">
          <Heading pb={2} pl={3}>
            Download
          </Heading>
        </Box>
        <Box align="center">
            <Text padding="10px">Please follow the below steps to download and play our game:</Text>
            <Text padding="10px">1. Download the game <Link href='https://uno-dos-game.s3.eu-west-2.amazonaws.com/UnoDos.zip' isExternal>
            here<ExternalLinkIcon mx='2px' />
            </Link></Text>
            <Text padding="10px">2. Unzip the downloaded UnoDos.zip folder</Text>
            <Text padding="10px">3. Run the UnoDos.exe file</Text>
        </Box>
        
      </VStack>
    </DefaultContainer>
  );
};

export default Download;
