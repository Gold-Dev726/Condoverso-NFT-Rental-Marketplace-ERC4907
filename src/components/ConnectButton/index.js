import { useState } from "react";
import { Button, Box, Stack, Typography, Hidden } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import useLocales from "hooks/useLocales";
import WalletModal from "./WalletModal";
import LogoutModal from "./LogoutModal";
import { ethers } from "ethers";

// export function BusdBalance() {
//   const { account } = useEthers();
//   const busdBalanceBigNumber = useTokenBalance(BusdAddress, account);
//   const busdBalance =
//     busdBalanceBigNumber && ethers.utils.formatUnits(busdBalanceBigNumber, 18);
//   return busdBalance;
// }

export default function ConnectButton({ sx }) {
  const { account } = useWeb3React();
  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const { login, logout } = useAuth();
  const { translate } = useLocales();

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenLogout = () => {
    setOpenLogout(true);
  };
  const handleCloseLogout = () => {
    setOpenLogout(false);
  };

  return (
    <>
      {account ? (
        <>
          <Button
            onClick={handleOpenLogout}
            color="primary"
            variant="contained"
            sx={{
              fontSize: 16,
              fontWeight: "bold",
              minWidth: 156,
              height: 50
            }}
          >
            {`${account.slice(0, 4)}...${account.slice(-4)}`}
          </Button>
        </>
      ) : (
        <Button
          onClick={handleOpenLogin}
          color="primary"
          variant="contained"
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            minWidth: 156,
            height: 50
          }}
        >
          {translate("Homepage.btn_connect")}
        </Button>
      )}

      <WalletModal login={login} open={openLogin} onClose={handleCloseLogin} />
      <LogoutModal
        logout={logout}
        open={openLogout}
        onClose={handleCloseLogout}
      />
    </>
  );
}
