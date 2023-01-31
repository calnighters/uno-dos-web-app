import { Container } from "@chakra-ui/react";
import teamMembers from "../const/teamMembers";
import TeamMember from "./TeamMember";
import Carousel from "./Carousel";

const teamMembersArray = teamMembers.map((member, index) => (
  <TeamMember key={index} teamMember={member} />
));

const TeamMemberCarousel = () => {
  return (
    <Container maxW="100%" maxH="100%" centerContent>
      <Carousel content={teamMembersArray} />
    </Container>
  );
};

export default TeamMemberCarousel;
