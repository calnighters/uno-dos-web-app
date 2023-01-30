import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const TeamMember = ({ name, role, linkedinProfile, profilePhoto }) => {
  return (
    <Card
      direction="row"
      overflow="hidden"
      variant="outline"
      p="10px"
      bg="transparent"
      color="white"
      border="none"
      shadow="dark-lg"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={profilePhoto}
        borderRadius="lg"
      />
      <Stack p="10px" w={{ base: "100%", sm: "200px" }}>
        <Heading size="md">{name}</Heading>
        <Text py={2}>{role}</Text>
        <Link href={linkedinProfile} isExternal>
          Linkedin <ExternalLinkIcon mx="2px" />
        </Link>
      </Stack>
    </Card>
  );
};

export default TeamMember;
