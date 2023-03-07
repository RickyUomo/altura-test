import React, { useState } from "react";
import {
  Input,
  Alert,
  AlertIcon,
  Button,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { Form } from "react-final-form";
import { useQuery } from "@tanstack/react-query";

import ntfService from "../../services/nft";
import validateAddress from "../../services/validate";

const InputForm = ({ setNftList }) => {
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { status, error, refetch } = useQuery({
    queryKey: ["nfts"],
    queryFn: () => ntfService.getNftsByAddress(address),
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: (data) => setNftList(data),
  });

  if (status === "error") setErrorMessage(JSON.stringify(error));

  const onChange = (e) => {
    const { value } = e.target;
    setAddress(value);
  };

  const onSubmit = () => {
    const error = validateAddress(address);

    if (error) {
      setErrorMessage(error);
      setNftList(null);
    } else {
      setErrorMessage("");
      refetch();
    }
  };

  return (
    <>
      <Box w="90%" p={4} m="20px auto">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
            <Box
              as="form"
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="1px 1px 3px rgba(0,0,0,0.3)"
              onSubmit={handleSubmit}
            >
              <FormLabel>NFT Address</FormLabel>
              <Input name="address" label="Address" onChange={onChange} />
              <Button
                isLoading={submitting}
                loadingText="Submitting"
                type="submit"
                colorScheme="messenger"
                mt="10px"
              >
                Submit
              </Button>
            </Box>
          )}
        />
        {errorMessage ? (
          <Alert show={errorMessage} status="error">
            <AlertIcon />
            {errorMessage}
          </Alert>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default InputForm;
