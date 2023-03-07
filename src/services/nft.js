import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "SX2yA2nqvd7x2spVDDPXvmTColXMGV-H",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const getNftsByAddress = async (address) => {
  const nfts = await alchemy.nft.getNftsForContract(address);
  return nfts;
};

const getOwners = async (address, id) => {
  const owner = await alchemy.nft.getOwnersForNft(address, id);
  return owner;
};

const ntfService = { getNftsByAddress, getOwners };

export default ntfService;
