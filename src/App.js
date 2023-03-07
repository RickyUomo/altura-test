import { useState } from "react";
import {
  Container,
  SimpleGrid,
  GridItem,
  Button,
  Text,
} from "@chakra-ui/react";

import InputForm from "./components/searchbar/InputForm";
import Card from "./components/common/Card";
import GoTopBtn from "./components/common/GoTopBtn";

function App() {
  const perPage = 6;
  const [showCount, setShowCount] = useState(perPage);
  const [nftList, setNftList] = useState(null);
  const totalNfts = nftList.nfts.length || 0;

  return (
    <>
      <GoTopBtn />
      <Container maxWidth={1200}>
        <InputForm setNftList={setNftList} />
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          {nftList?.nfts?.length > 0
            ? nftList.nfts.slice(0, showCount).map((nft, key) => {
                const tokenId = parseInt(nft.tokenId, 16),
                  title = nft.title,
                  address = nft.contract.address,
                  image = nft.media[0].gateway,
                  description = nft.contract.openSea.description,
                  collectionName = nft.contract.openSea.collectionName,
                  floorPrice = nft.contract.openSea.floorPrice;

                return (
                  <GridItem key={key}>
                    <Card
                      id={tokenId}
                      title={title}
                      address={address}
                      image={image}
                      description={description}
                      collectionName={collectionName}
                      floorPrice={floorPrice}
                    />
                  </GridItem>
                );
              })
            : null}
        </SimpleGrid>
        <Container marginTop="4" mb="10px" centerContent>
          <Text mb="5px">
            {showCount} / {totalNfts} NFTs
          </Text>
          {nftList?.nfts?.length > 0 ? (
            <Button
              w="30%"
              align="center"
              colorScheme="yellow"
              onClick={() => {
                setShowCount(showCount + perPage);
              }}
            >
              Load more
            </Button>
          ) : (
            <></>
          )}
        </Container>
      </Container>
    </>
  );
}

export default App;
