import { nodes } from "./getRpcUrl";

export const registerToken = async (
  tokenAddress,
  tokenSymbol,
  tokenDecimals,
  tokenImage
) => {
  const tokenAdded = await window.ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage
      }
    }
  });

  return tokenAdded;
};

// export const setupNetwork = async () => {
//   const provider = window.ethereum;
//   if (provider) {
//     const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 4);
//     // try {
//     //   await provider.request({
//     //     method: 'wallet_addEthereumChain',
//     //     params: [
//     //       {
//     //         chainId: `0x${chainId.toString(16)}`,
//     //         chainName: 'Metis Andromeda Mainnet',
//     //         nativeCurrency: {
//     //           name: 'METIS',
//     //           symbol: 'metis',
//     //           decimals: 18,
//     //         },
//     //         rpcUrls: nodes,
//     //         blockExplorerUrls: [`${BASE_METIS_SCAN_URL}/`],
//     //       },
//     //     ],
//     //   })
//     //   return true
//     try {
//       await provider.request({
//         method: "wallet_switchEthereumChain",
//         params: [
//           {
//             chainId: `0x${chainId.toString(16)}`
//           }
//         ]
//       });
//       return true;
//     } catch (error) {
//       console.error("Failed to setup the network in Metamask:", error);
//       return false;
//     }
//   } else {
//     console.error(
//       "Can't setup the BSC network on metamask because window.ethereum is undefined"
//     );
//     return false;
//   }
// };

// import { nodes } from "./getRpcUrl";

// export const BASE_BSC_SCAN_URLS = {
//   Mainnet: "https://etherscan.io",
//   Testnet: "https://testnet.bscscan.com"
// };

// export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS["Mainnet"];

// export const registerToken = async (
//   tokenAddress,
//   tokenSymbol,
//   tokenDecimals,
//   tokenImage
// ) => {
//   const tokenAdded = await window.ethereum.request({
//     method: "wallet_watchAsset",
//     params: {
//       type: "ERC20",
//       options: {
//         address: tokenAddress,
//         symbol: tokenSymbol,
//         decimals: tokenDecimals,
//         image: tokenImage
//       }
//     }
//   });

//   return tokenAdded;
// };

// export const setupNetwork = async () => {
//   const provider = window.ethereum;
//   if (provider) {
//     const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
//     try {
//       await provider.request({
//         method: "wallet_switchEthereumChain",
//         params: [
//           {
//             chainId: `0x${chainId.toString(16)}`
//           }
//         ]
//       });
//       return true;
//     } catch (error) {
//       console.error("Failed to setup the network in Metamask:", error);
//       return false;
//     }
//   } else {
//     console.error(
//       "Can't setup the BSC network on metamask because window.ethereum is undefined"
//     );
//     return false;
//   }
// };
export const setupNetwork = async (chainId = 4) => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${chainId.toString(16)}` }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Binance Smart Chain Mainnet",
              nativeCurrency: {
                name: "BNB",
                symbol: "bnb",
                decimals: 18,
              },
              rpcUrl: "https://bsc-dataseed1.ninicoin.io",
              blockExplorerUrl: "https://bscscan.com/",
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
};