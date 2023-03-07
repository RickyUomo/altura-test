import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

const Card = ({ id, title, description, image, address }) => {
  return (
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
    >
      <Image src={image} alt={title} />
      <Link href={`https://opensea.io/assets/${address}/${id}`} target="_blank">
        {title ? title : "#" + id}
      </Link>
      {description}
    </Box>
  );
};

export default Card;
