import { useEffect, useState, useRef } from "react";
import axios from "axios";
/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useCoinGeckoPrice = (token) => {
  const [price, setPrice] = useState();
  // const endpoint = `https://api.coingecko.com/api/v3/coins/${token?.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
  const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;

  useEffect(() => {
    const fectchPrice = async () => {
      const data = await axios.get(endpoint);
      setPrice(data.data[token].usd);
      console.log("coingecko:", data.data[token].usd);
    };
    fectchPrice();
  }, [endpoint, token]);

  return price;
};

// export const getCoinGeckoPrice = (token) => {
//   const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;

//   return axios.get(endpoint).then(({ data }) => {
//     return {
//       price: data[token].usd,
//     };
//   });
// };

export default useCoinGeckoPrice;
