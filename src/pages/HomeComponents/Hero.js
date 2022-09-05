import { useState } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  Button,
  InputBase,
  Typography,
  Hidden,
  Chip as MuiChip,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useSnackbar } from "notistack";
import { Icon } from "@iconify/react";
import twitter from "@iconify/icons-cib/twitter";
import telegram from "@iconify/icons-cib/telegram";
import discord from "@iconify/icons-cib/discord";

const Chip = styled(MuiChip)(() => ({
  padding: "24px 5px",
  fontSize: 20,
  borderRadius: 30,
  background: "linear-gradient(30deg, #9F1FED, #645FF2, #38BDD1)",
  backgroundClip: "text",
  textFillColor: "transparent",
  border: "1px solid #666",
}));

const domains = ["ux", "eos", "eth", "nft"];

export default function Hero() {
  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack
      sx={{
        pt: { xs: 5, md: 10 },
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={5}>
          <Stack spacing={3} flex={1} alignItems="flex-start">
            <Typography variant="h2">Consoverso is a</Typography>
            <Typography variant="h2" color="primary.main">
              NFT Rental Marketplace
            </Typography>
            <Typography variant="h2">for Real Estate NFTs</Typography>
            <Button variant="contained" size="large">
              GET EARLY ACCESS
            </Button>
            <Stack direction="row" spacing={2}>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              >
                <Icon icon={twitter} color="#410D61" width={24} />
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              >
                <Icon icon={discord} color="#410D61" width={24} />
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              >
                <Icon icon={telegram} color="#410D61" width={24} />
              </Stack>
            </Stack>
          </Stack>
          <Stack flex={1}>
            <Box component="img" src="/images/1.png" />
          </Stack>
        </Stack>

        <Stack mt={20} alignItems="center">
          <Typography variant="h2" mb={5}>
            <Typography variant="h2" component="span" color="primary.main">
              CONDOVERSO
            </Typography>{" "}
            Ecosystem &{" "}
            <Typography variant="h2" component="span" color="primary.main">
              NFT
            </Typography>{" "}
            Collections
          </Typography>
          <Stack direction="row-reverse" spacing={5} alignItems="center">
            <Stack spacing={3} flex={1} alignItems="flex-start">
              <Typography variant="h3" color="primary.main">
                CONDOVERSO NFT
              </Typography>
              <Typography variant="h4">Trading Condoverso NFT</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Typography>
            </Stack>
            <Stack flex={2}>
              <Stack direction="row" alignItems="center">
                <Box
                  component="img"
                  src="/images/1.png"
                  sx={{
                    width: 260,
                    height: 320,
                    borderRadius: 2,
                    transform: "rotate(-10deg)",
                  }}
                />
                <Box
                  component="img"
                  src="/images/1.png"
                  sx={{ width: 300, height: 400, borderRadius: 2 }}
                />
                <Box
                  component="img"
                  src="/images/1.png"
                  sx={{
                    width: 260,
                    height: 320,
                    borderRadius: 2,
                    transform: "rotate(10deg)",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={20} alignItems="center">
          <Stack direction="row" spacing={5} alignItems="center">
            <Stack spacing={3} flex={1} alignItems="flex-start">
              <Typography variant="h3" color="primary.main">
                VR CONDOVERSO NFT
              </Typography>
              <Typography variant="h4">3D Items</Typography>
              <Typography variant="h6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Typography>
              <Typography variant="h6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Typography>
            </Stack>
            <Stack flex={1}>
              <Box component="img" src="/images/1.png" />
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={20} alignItems="center">
          <Stack direction="row-reverse" spacing={5} alignItems="center">
            <Stack spacing={3} flex={1} alignItems="flex-start">
              <Typography variant="h3" color="primary.main">
                Partners
              </Typography>
              <Typography variant="h4">NFT Collections</Typography>
              <Typography variant="h6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Typography>
            </Stack>
            <Stack flex={1}>
              <Box component="img" src="/images/1.png" />
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={20} alignItems="center">
          <Stack direction="row" spacing={5} alignItems="center">
            <Stack spacing={3} flex={1} alignItems="flex-start">
              <Typography variant="h3" color="primary.main">
                Partners
              </Typography>
              <Typography variant="h4">NFT Collections</Typography>
              <Typography variant="h6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Typography>
            </Stack>
            <Stack flex={2}>
              <Stack direction="row" alignItems="center">
                <Box
                  component="img"
                  src="/images/1.png"
                  sx={{
                    width: 260,
                    height: 320,
                    borderRadius: 2,
                    transform: "rotate(-10deg)",
                  }}
                />
                <Box
                  component="img"
                  src="/images/1.png"
                  sx={{ width: 300, height: 400, borderRadius: 2 }}
                />
                <Box
                  component="img"
                  src="/images/1.png"
                  sx={{
                    width: 260,
                    height: 320,
                    borderRadius: 2,
                    transform: "rotate(10deg)",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Stack sx={{ position: "relative", width: 1, mt: 20 }}>
        <Box component="img" src="/images/slide1.png" sx={{ width: 1 }} />
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            width: 1,
            height: 1,
            bgcolor: "#410d6150",
          }}
        >
          <Typography variant="h1" fontStyle="italic">
            CONDOVERSO Ecosystem & NFT Collections
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ width: 1, bgcolor: "#140f29", pt: 20, pb: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" mb={5}>
            CONDOVERSO Features & Earnings
          </Typography>
          <Grid container spacing={5}>
            {[...Array(6)].map((item, index) => (
              <Grid item md={4}>
                <Stack
                  sx={{ bgcolor: "#310847", p: 5, borderRadius: 3 }}
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src="/images/feature1.webp"
                    sx={{ width: 240 }}
                  />
                  <Typography variant="h3" mb={1}>
                    Feature 1
                  </Typography>
                  <Typography align="center" lineHeight={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Stack>
  );
}
