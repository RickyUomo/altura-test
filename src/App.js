import { useState } from "react";
import { Container, SimpleGrid, GridItem } from "@chakra-ui/react";

import InputForm from "./components/searchbar/InputForm";
import Card from "./components/common/Card";

function App() {
  const [nftList, setNftList] = useState(null);

  return (
    <Container maxWidth={1200}>
      <InputForm setNftList={setNftList} />
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {nftList?.nfts?.length > 0
          ? nftList.nfts.slice(0, 9).map((nft, key) => {
              const tokenId = parseInt(nft.tokenId, 16),
                title = nft.title,
                address = nft.contract.address,
                image = nft.media[0].gateway;

              return (
                <GridItem key={key}>
                  <Card
                    id={tokenId}
                    title={title}
                    address={address}
                    image={image}
                  />
                </GridItem>
              );
            })
          : null}
      </SimpleGrid>
    </Container>
  );
}

export default App;
