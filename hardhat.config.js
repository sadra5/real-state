require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {

    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia",  // Ankr’s Sepolia endpoint :cite[2]
      accounts: [
        "beacd4d82a41f59000a1f1c83d9f39afc65dfe7ae1f0734ed49d69b71d10de54",
        "7d9b109ad10a162e8ebe723410af1cb77530857587e4e04d7330a93751cbd4e5",
        "bec80abc042e21dc5dcf0a55a47d9976f4d235c703fbc370e0605ea2923ab840",
        "9ae2aa5ae526f1db315a96079bbbea64aa81709cde5ac6edc57c4e66615c3a05"
      ],  // Wallet private key (never expose publicly!)
    },

    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com",
      accounts: ["beacd4d82a41f59000a1f1c83d9f39afc65dfe7ae1f0734ed49d69b71d10de54"],
    },

    mekong: {
      url: "https://mekong.rpc.ethereum.org",  // Example endpoint (check Ethereum blog for updates)
      accounts: ["beacd4d82a41f59000a1f1c83d9f39afc65dfe7ae1f0734ed49d69b71d10de54"],
    },
  },
};
