import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import useDebounce from "./Debounce";
import nft from "../../services/nft";

const InputForm = ({ setNftList }) => {
  const [address, setAddress] = useState("");
  const debounceSearch = useDebounce(address, 500);

  const { status, error, refetch } = useQuery({
    queryKey: ["nfts"],
    queryFn: () => nft.getNftsByAddress(address),
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: (data) => setNftList(data),
  });

  useEffect(() => {
    if (debounceSearch) refetch();
  }, [debounceSearch]);

  // if (status === "loading") return <h1>Loading</h1>;

  // if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  const onType = (e) => {
    const { value } = e.target;
    setAddress(value);
  };

  return (
    <FormControl marginBottom={4}>
      <FormLabel fontWeight={700} htmlFor="email">
        Contract-address
      </FormLabel>
      <Input type="text" value={address} onChange={onType} />
    </FormControl>
  );
};

export default InputForm;
