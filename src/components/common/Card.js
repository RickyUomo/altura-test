import React, { useState } from "react";
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
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Text>{title ? title : "#" + id}</Text>
      <Box
        boxShadow="2xl"
        rounded="md"
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
        _hover={{}}
        style={{
          cursor: isHover ? "pointer" : "",
          position: "relative",
          top: isHover ? "-10px" : "0px",
          transition: "top ease 0.5s",
        }}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <Image src={image} alt={title} />
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
