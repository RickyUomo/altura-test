import web3 from "web3";

const validateAddress = (address) => {
  let error = null;
  if (!web3.utils.isAddress(address) || address === "") {
    error = "Invalid Address";
  }

  return error;
};

export default validateAddress;
