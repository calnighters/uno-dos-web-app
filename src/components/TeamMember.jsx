import { Card, Stack, Heading, Text, Link, Avatar } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const TeamMember = ({ teamMember }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      p="10px"
      bg="transparent"
      color="white"
      border="none"
      shadow="dark-lg"
      w={{ base: "100%", sm: "400px"}}
    >
      <Avatar
        name={teamMember.name}
        maxW={{ base: "100%", sm: "200px" }}
        maxH={{ base: "100%", sm: "200px" }}
        h={{ base: "100%", sm: "200px" }}
        w={{ base: "100%", sm: "200px" }}
        src={teamMember.profilePhoto}
      />
      <Stack p="10px" w={{ base: "100%", sm: "200px" }}>
        <Heading size="md">{teamMember.name}</Heading>
        <Text py={2}>{teamMember.role}</Text>
        {teamMember.linkedinProfile ? (
        <Link href={teamMember.linkedinProfile} isExternal>
          Linkedin <ExternalLinkIcon mx="2px" />
        </Link>) : (<></>)}
      </Stack>
    </Card>
  );
};

export default TeamMember;
