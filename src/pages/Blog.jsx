import {
  Box,
  Heading,
  StackDivider,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Text,
} from "@chakra-ui/react";
import DefaultContainer from "../containers/DefaultContainer";
import blogPosts from "../const/blogPosts";

const Blog = () => {
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
            Blog
          </Heading>
        </Box>
        {blogPosts.map((post) => (
          <Card
            align="center"
            overflow="hidden"
            variant="outline"
            p="10px"
            bg="transparent"
            color="white"
            border="none"
            shadow="dark-lg"
            w={{ base: "100%", sm: "400px" }}
          >
            <CardHeader>
              <Heading size="md">{post.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{post.body}</Text>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </DefaultContainer>
  );
};

export default Blog;
