import { useState, useEffect } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  Typography,
  Hidden,
  Divider,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import { useYNSContract } from "hooks/useContract";
import Blockies from "react-blockies";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";

export default function Hero() {
  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const YNSContract = useYNSContract();

  const [domain, setDomain] = useState("")

  useEffect(() => {
    const fetch = async () => {
      const res = await YNSContract.domainsByAddress(account);
      console.log(res);
      setDomain(res)
    };
    if (account) {
      fetch();
    }
  }, [account]);
  return (
    <Stack
      sx={{
        pt: 5,
      }}
      alignItems="center"
      justifyContent="center"
    >
      {account ? (
        <Container maxWidth="lg">
          <Stack sx={{ mt: 5 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Blockies seed={account} size={12} scale={3} />
              <Hidden mdDown>
                <Typography fontSize={28}>{account}</Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography fontSize={24}>{`${account.slice(
                  0,
                  6
                )}...${account.slice(-6)}`}</Typography>
              </Hidden>
            </Stack>
            <Divider sx={{ mt: 1, mb: 5 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={4}
            >
              <Typography fontSize={20}>{domain}</Typography>
              <Box flex={1} />
              <Typography color="#999">Expires 2023.08.10 at 12.00</Typography>
              <Checkbox
                color="error"
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
              />
            </Stack>

            {/* <Divider variant="dashed" sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={4}
            >
              <Typography fontSize={20}>Yoddaverse.eth</Typography>
              <Box flex={1} />
              <Typography color="#999">Expires 2023.08.10 at 12.00</Typography>
              <Checkbox
                color="error"
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
              />
            </Stack> */}
          </Stack>
        </Container>
      ) : (
        <Typography variant="h3">Please connect wallet</Typography>
      )}
    </Stack>
  );
}
