import React, { useState } from "react";
import { Input, Alert, AlertIcon, Button, Box } from "@chakra-ui/react";
import { Form } from "react-final-form";
import { useQuery } from "@tanstack/react-query";

import nft from "../../services/nft";
import validateAddress from "../../services/validate";

const InputForm = ({ setNftList }) => {
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { status, error, refetch } = useQuery({
    queryKey: ["nfts"],
    queryFn: () => nft.getNftsByAddress(address),
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
    } else {
      setErrorMessage("");
      refetch();
    }
  };

  return (
    <>
      <Box w={500} p={4} m="20px auto">
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
              <Input name="address" label="Address" onChange={onChange} />
              <Button
                isLoading={submitting}
                loadingText="Submitting"
                type="submit"
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
