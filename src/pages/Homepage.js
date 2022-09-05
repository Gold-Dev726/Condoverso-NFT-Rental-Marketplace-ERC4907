import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useICOContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { parseEther } from "ethers/lib/utils";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";

import Hero from "./HomeComponents/Hero";
import Roadmap from "./HomeComponents/Roadmap";
import Team from "./HomeComponents/Team";
import Faq from "./HomeComponents/Faq";

export default function Homepage() {
  return (
    <Box>
      <Hero />
      <Roadmap />
      <Team />
      <Faq />
    </Box>
  );
}
