import {
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Carousel = ({ content }) => {
  const [index, setIndex] = useState(0);

  const backArrowHandler = () => {
    if (index === 0) {
        setIndex(content.length - 1)
    } else {
        setIndex(index - 1)
    }
  };

  const forwardArrowHandler = () => {
    if (index === content.length - 1) {
        setIndex(0)
    } else {
        setIndex(index + 1)
    }
  };

  return (
    <HStack>
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        onClick={backArrowHandler}
      >
        <ArrowBackIcon />
      </Button>
      {content[index]}
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        onClick={forwardArrowHandler}
      >
        <ArrowForwardIcon />
      </Button>
    </HStack>
  );
};

export default Carousel;
