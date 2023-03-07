import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import ntfService from "../../services/nft";

const ModalBox = ({ isOpen, onClose, nft }) => {
  const [owners, setOwners] = useState([]);

  useQuery({
    queryKey: ["owners"],
    queryFn: () => ntfService.getOwners(nft.address, nft.id),
    onSuccess: (data) => setOwners(data.owners),
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      isCentered
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ base: "22px", md: "28px", lg: "36px" }}>
          {nft.title ? nft.title : "#" + nft.id}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text
            fontSize={{ base: "16px", md: "20px", lg: "26px" }}
            fontWeight="bold"
          >
            Collection Name:
          </Text>
          <Text fontSize={{ base: "16px", md: "20px", lg: "26px" }}>
            {nft.collectionName}
          </Text>
          <Text
            fontSize={{ base: "16px", md: "20px", lg: "26px" }}
            mt="5px"
            pt="5px"
            borderTop="1px"
            fontWeight="bold"
          >
            Description:
          </Text>
          <Text fontSize={{ base: "16px", md: "20px", lg: "26px" }}>
            {nft.description}
          </Text>
          {owners.length ? (
            <>
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "26px" }}
                fontWeight="bold"
                mt="5px"
                pt="5px"
                borderTop="1px"
              >
                Owner(s) Address:
              </Text>
              {owners.map((owner, key) => (
                <Text
                  key={key}
                  fontSize={{ base: "16px", md: "20px", lg: "26px" }}
                >
                  {owner}
                </Text>
              ))}
            </>
          ) : (
            <></>
          )}
          <Text
            fontSize={{ base: "16px", md: "20px", lg: "26px" }}
            mt="5px"
            pt="5px"
            borderTop="1px"
            fontWeight="bold"
          >
            Floor Price:
          </Text>
          <Text fontSize={{ base: "16px", md: "20px", lg: "26px" }}>
            {nft.floorPrice ? `${nft.floorPrice} ETH` : ""}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Link
            href={`https://opensea.io/assets/${nft.address}/${nft.id}`}
            target="_blank"
          >
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Buy
            </Button>
          </Link>
          <Button onClick={onClose}>Close Modal</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBox;
