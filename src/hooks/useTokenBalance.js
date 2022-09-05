import { useState, useEffect } from "react";
import useActiveWeb3React from "./useActiveWeb3React";
import { getERC20Contract } from "utils/contractHelpers";
import { formatEther, formatUnits } from "ethers/lib/utils";

const useTokenBalance = (tokenAddress) => {
  const [balance, setBalance] = useState(0);
  const { account } = useActiveWeb3React();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getERC20Contract(tokenAddress);
      try {
        const res = await contract.balanceOf(account);
        // setBalance(formatUnits(res, 18));
        setBalance(formatEther(res));
      } catch (e) {
        console.error(e);
      }
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress]);

  return balance;
};

export default useTokenBalance;
