import { VStack } from "@chakra-ui/react";
import teamMembers from "../const/teamMembers";
import TeamMember from "./TeamMember";

const TeamMemberDisplay = () => {
  return (
    <VStack maxW="100%">
      {teamMembers.map(({ name, role, linkedinProfile, profilePhoto }) => (
        <TeamMember
          name={name}
          role={role}
          linkedinProfile={linkedinProfile}
          profilePhoto={profilePhoto}
        />
      ))}
    </VStack>
  );
};

export default TeamMemberDisplay;
