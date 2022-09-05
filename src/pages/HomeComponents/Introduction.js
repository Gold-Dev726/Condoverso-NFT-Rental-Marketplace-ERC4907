import { useState, useEffect } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  Button,
  InputBase,
  Typography,
  Link,
  Hidden,
  IconButton,
  Chip as MuiChip,
  Paper,
  Grid
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useICOContract, useERC20Contract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import { USDCAddress, ICOAddress, SWINKAddress } from "contracts/address";
import useTokenBalance from "hooks/useTokenBalance";
import useLocales from "hooks/useLocales";
import { registerToken } from "utils/wallet";

export default function Hero() {
  const { translate } = useLocales()
  return (
    <Stack
      sx={{
        pt: { xs: 5, md: 10 }
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Stack alignItems="center">
          <Typography variant="h3" align="center" mb={5}>
            {translate("Homepage.browser")}
          </Typography>
          <Grid container rowSpacing={5}>
            <Grid item md={3} xs={6}>
              <Stack alignItems="center" spacing={2}>
                <Paper sx={{ borderRadius: "50%", p: 2 }}>
                  <Box
                    component="img"
                    src="/images/brave.png"
                    sx={{ width: 80 }}
                  />
                </Paper>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Link fontSize={20} fontWeight="bold" underline="none">
                    Brave
                  </Link>
                  <CallMadeIcon />
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={3} xs={6}>
              <Stack alignItems="center" spacing={2}>
                <Paper sx={{ borderRadius: "50%", p: 2 }}>
                  <Box
                    component="img"
                    src="/images/opera.png"
                    sx={{ width: 80 }}
                  />
                </Paper>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Link fontSize={20} fontWeight="bold" underline="none">
                    Opera
                  </Link>
                  <CallMadeIcon />
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={3} xs={6}>
              <Stack alignItems="center" spacing={2}>
                <Paper sx={{ borderRadius: "50%", p: 2 }}>
                  <Box
                    component="img"
                    src="/images/chrome.png"
                    sx={{ width: 80 }}
                  />
                </Paper>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Link fontSize={20} fontWeight="bold" underline="none">
                    Chrome
                  </Link>
                  <CallMadeIcon />
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={3} xs={6}>
              <Stack alignItems="center" spacing={2}>
                <Paper sx={{ borderRadius: "50%", p: 2 }}>
                  <Box
                    component="img"
                    src="/images/firefox.png"
                    sx={{ width: 80 }}
                  />
                </Paper>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Link fontSize={20} fontWeight="bold" underline="none">
                    Firefox
                  </Link>
                  <CallMadeIcon />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Container maxWidth="md" sx={{ mt: 15 }}>
        <Stack alignItems="center">
          <Typography variant="h3" align="center">
            {translate("Homepage.intro2_title")}
            <Typography variant="h3" color="primary" component="span">
              UX Blockchain
            </Typography>
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={5}
          mt={10}
        >
          <Stack flex={1} spacing={5}>
            <Typography variant="h4">
              {translate("Homepage.intro2_text1")}
            </Typography>
            <Typography variant="h4">
              {translate("Homepage.intro2_text2")}
            </Typography>
            <Typography variant="h4">
              {translate("Homepage.intro2_text3")}
            </Typography>
          </Stack>
          <Stack flex={1}>
            <Box component="img" src="/images/landing-gif-1.gif" />
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth="md" sx={{ mt: 15 }}>
        <Stack alignItems="center">
          <Typography variant="h3" align="center">
            Low Renewal Fees
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row-reverse" }}
          alignItems="center"
          spacing={5}
          mt={10}
        >
          <Stack flex={1} spacing={5}>
            <Typography variant="h4">
              NFT domains are owned not rented. Buy the domain with a one time
              registration fee and never worry about renewals again.
            </Typography>
            <Typography variant="h4">
              The domain is stored in your wallet, just like a cryptocurrency.
              No one can move it around other than you.
            </Typography>
            <Typography variant="h4">
              Point your domain to content on a decentralized storage network.
            </Typography>
          </Stack>
          <Stack flex={1}>
            <Box component="img" src="/images/landing-gif-2.gif" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
