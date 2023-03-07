import React from "react";
import { Box, Image, useDisclosure, Text } from "@chakra-ui/react";

import ModalBox from "./ModalBox";

const Card = ({
  id,
  title,
  description,
  image,
  address,
  collectionName,
  floorPrice,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text>{title ? title : "#" + id}</Text>
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
        <Image h="400px" w="100%" objectFit="cover" src={image} alt={title} />
      </Box>
      {isOpen ? (
        <ModalBox
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          nft={{ id, title, description, address, collectionName, floorPrice }}
          mt="500px"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
