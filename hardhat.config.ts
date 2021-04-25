export default {
  solidity: {
    compilers :[
      {
        version: "0.8.0",
        //settings: {
        //  optimizer: {
        //    enabled: true,
        //    runs: 200
        //  }
        //}
      }
    ]
  },
  networks: {
    hardhat: {
      gas: 10000000,
      accounts: {
        accountsBalance: "1000000000000000000000000",
      },
      allowUnlimitedContractSize: true,
      timeout: 1000000
    },
    coverage: {
      url: "http://localhost:8555",
    },
  },
};
