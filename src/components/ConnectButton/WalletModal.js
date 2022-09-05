import { useState } from "react";
import {
  Button,
  Box,
  Stack,
  Typography,
  Hidden,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import {
  connectors,
  connectorLocalStorageKey,
  walletLocalStorageKey
} from "./config";
import { ConnectorNames } from "utils/web3React";
import { ethers } from "ethers";

// export function BusdBalance() {
//   const { account } = useEthers();
//   const busdBalanceBigNumber = useTokenBalance(BusdAddress, account);
//   const busdBalance =
//     busdBalanceBigNumber && ethers.utils.formatUnits(busdBalanceBigNumber, 18);
//   return busdBalance;
// }

export default function ConnectModal({ login, open, onClose }) {
  const { account } = useWeb3React();

  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { bgcolor: "#111820" } }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Connect Wallet
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 1 }}>
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ maxWidth: 360 }}
        >
          {connectors.map((wallet) => (
            <Box key={wallet.title} sx={{}}>
              <Button
                color="secondary"
                onClick={() => {
                  const isIOS =
                    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                    !window.MSStream;

                  // Since iOS does not support Trust Wallet we fall back to WalletConnect
                  if (wallet.title === "Trust Wallet" && isIOS) {
                    login(ConnectorNames.WalletConnect);
                  } else {
                    login(wallet.connectorId);
                  }

                  localStorage.setItem(walletLocalStorageKey, wallet.title);
                  localStorage.setItem(
                    connectorLocalStorageKey,
                    wallet.connectorId
                  );
                  onClose();
                }}
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{
                    width: 128,
                    height: 128,
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: 1,
                    border: "1px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.4)"
                    }
                  }}
                >
                  <Box component="img" src={wallet.icon} sx={{ width: 40 }} />
                  <Typography
                    color="white"
                    fontWeight="bold"
                    sx={{ fontSize: 14 }}
                  >
                    {wallet.title}
                  </Typography>
                </Stack>
              </Button>
            </Box>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
