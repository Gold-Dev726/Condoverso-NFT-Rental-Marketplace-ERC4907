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

export default function ConnectModal({ logout, open, onClose }) {
  const { account } = useWeb3React();

  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundImage: "url(/images/dot_bg.png)",
          backgroundSize: "100% 100%",
          borderRadius: 2,
          width: 300
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography variant="h4" textAlign="center">
          Logout
        </Typography>
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
        <Box sx={{ height: "1px", width: 1, bgcolor: "white", mt: 1 }} />
      </DialogTitle>
      <DialogContent sx={{ p: 1 }}>
        <Stack spacing={2} justifyContent="center">
          {/* <Stack
            direction="row"
            spacing={15}
            sx={{ px: { xs: 5, md: 10 }, mt: 2, pb: 5 }}
          >
            <Stack alignItems="center">
              <Box component="img" src="/images/usdc.png" sx={{ width: 60 }} />
              <Typography variant="h4" sx={{ mt: 1 }}>
                USDC
              </Typography>
              <Typography variant="h4" sx={{ mt: 3 }}>
                {Number(usdcBalance).toFixed(2)}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1 }} color="primary">
                ~{Number(usdcBalance).toFixed(2)}$
              </Typography>
            </Stack>
          </Stack> */}
          <Button
            variant="outlined"
            onClick={() => {
              logout();
              onClose();
            }}
          >
            Disconnect
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
