import React from "react";
import { Box, Image, useDisclosure } from "@chakra-ui/react";

import ModalBox from "./ModalBox";

const Card = ({ id, title, description, image, address, collectionName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
        onClick={onOpen}
      >
        <Image src={image} alt={title} />
        {title ? title : "#" + id}
      </Box>
      {isOpen ? (
        <ModalBox
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          nft={{ id, title, description, address, collectionName }}
          mt="500px"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
