import { useState, useEffect, useMemo } from "react";
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
  Divider,
  Menu,
  MenuItem,
  ButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useYNSContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Chip = styled(MuiChip)(({ theme }) => ({
  padding: "24px 5px",
  fontSize: 20,
  borderRadius: 30,
  background: "linear-gradient(30deg, #9F1FED, #645FF2, #38BDD1)",
  backgroundClip: "text",
  textFillColor: "transparent",
  border: "1px solid #666",
}));

const domains = ["ux", "eos", "eth", "yoddaverse"];

export default function Hero() {
  const [year, setYear] = useState(1);
  const [domain, setDomain] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [register, setRegister] = useState(false);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const YNSContract = useYNSContract();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleYear = (type) => {
    if (type === "add") {
      setYear(year + 1);
    } else if (year > 1) {
      setYear(year - 1);
    }
  };

  const handleRegister = async () => {
    try {
      const txOptions = {
        value: ethers.utils.parseEther(domainPrice.toString()),
      };
      const tx = await YNSContract.register(domain, selectedIndex, txOptions);
      await tx.wait();
      enqueueSnackbar(
        <Stack>
          <Typography>Your domain is registered successfully!</Typography>
          {/* <Link href={`https://testnets.opensea.io/${account}`} color="#ffffff">View on Opensea</Link> */}
        </Stack>,
        {
          variant: "success",
        }
      );
    } catch (error) {
      console.log(error);
      enqueueSnackbar(getErrorMessage(error.error), {
        variant: "error",
      });
    }
  };

  const handleClickBuy = () => {
    if (domain == "") {
      enqueueSnackbar("Please input domain", {
        variant: "error",
      });
    } else {
      setRegister(true);
    }
  };

  const domainPrice = useMemo(() => {
    if (domain.length === 2) {
      return 0.01;
    } else if (domain.length === 3) {
      return 0.005;
    } else if (domain.length === 4) {
      return 0.004;
    } else if (domain.length >= 5) {
      return 0.003;
    }
  }, [domain]);

  return (
    <Stack
      sx={{
        pt: { xs: 1, md: 5 },
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Paper
            sx={{
              height: { xs: 60, md: 78 },
              borderRadius: 1.5,
              pl: 3,
              mt: { xs: 1, md: 5 },
              width: 1,
              boxShadow: (theme) =>
                theme.palette.mode === "light"
                  ? "0px 0px 10px 2px #cccccc"
                  : "0px 0px 10px 2px #222222",
            }}
          >
            <Stack direction="row" sx={{ height: 1 }}>
              <InputBase
                sx={{ width: 1, fontSize: 20 }}
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
              <ButtonGroup>
                <Button
                  variant="default"
                  onClick={handleClick}
                  sx={{
                    borderRadius: 0,
                    fontSize: 20,
                    borderLeft: "1px solid #ffffff20",
                    textTransform: "lowercase",
                    width: { xs: 80, md: 140 },
                  }}
                >
                  .{domains[selectedIndex]}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onChange={(e) => setDomain(e.target.value)}
                  PaperProps={{
                    sx: { borderRadius: 0, width: { xs: 80, md: 140 } },
                  }}
                >
                  {domains.map((item, index) => (
                    <div key={index}>
                      <MenuItem
                        onClick={(e) => handleMenuItemClick(e, index)}
                        sx={{ fontSize: 20 }}
                      >
                        .{item}
                      </MenuItem>
                      <Divider />
                    </div>
                  ))}
                </Menu>
                <Hidden mdDown>
                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      fontSize: 20,
                      minWidth: 200,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    onClick={handleClickBuy}
                  >
                    Buy Domain
                  </Button>
                </Hidden>
                <Hidden mdUp>
                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      fontSize: 20,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    onClick={handleClickBuy}
                  >
                    Buy
                  </Button>
                </Hidden>
              </ButtonGroup>
            </Stack>
          </Paper>
        </Stack>
        {register && (
          <>
            <Hidden mdDown>
              <Stack sx={{ mt: 5 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize={32}>
                    {domain}.{domains[selectedIndex]}
                  </Typography>
                  <Button variant="outlined">Register</Button>
                </Stack>
                <Divider sx={{ mt: 1 }} />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={4}
                  sx={{ mt: 4 }}
                >
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Registration Period
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ borderBottom: "1px solid #333", p: 1, height: 56 }}
                    >
                      <IconButton onClick={() => handleYear("minus")}>
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Typography
                        sx={{ fontSize: 24, width: 160, textAlign: "center" }}
                      >
                        {year} &nbsp; year
                      </Typography>
                      <IconButton
                        color="primary"
                        onClick={() => handleYear("add")}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </Stack>
                  </Stack>

                  <Typography fontSize={24}>=</Typography>
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Domain Name Price
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{
                        borderBottom: "1px solid #333",
                        p: 1,
                        height: 56,
                      }}
                    >
                      <Typography fontSize={24}>{domainPrice} ETH</Typography>
                    </Stack>
                  </Stack>

                  <Typography fontSize={24}>+</Typography>
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Period Price
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{
                        borderBottom: "1px solid #333",
                        p: 1,
                        height: 56,
                      }}
                    >
                      <Typography fontSize={24}>{0.01 * year} ETH</Typography>
                    </Stack>
                  </Stack>

                  <Typography fontSize={24}>=</Typography>
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Total Price
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{
                        borderBottom: "1px solid #333",
                        p: 1,
                        height: 56,
                      }}
                    >
                      <Typography fontSize={24}>
                        {(0.01 * year + domainPrice).toFixed(3)} ETH
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Typography mt={3} color="#666">
                  * Price is based on domain name length and registrantion
                  period. <br />
                  If domain name length is 3, then price is 50 Matic, if length
                  is 4, price is 40 Matic, if length is 5 or more, then price is
                  30 Matic
                </Typography>
                <Button
                  onClick={handleRegister}
                  variant="contained"
                  size="large"
                  sx={{ width: 200, height: 60, mt: 4, fontSize: 18 }}
                >
                  Register
                </Button>
              </Stack>
            </Hidden>

            <Hidden mdUp>
              <Stack sx={{ mt: 5 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize={32}>
                    {domain}.{domains[selectedIndex]}
                  </Typography>
                  <Button variant="outlined">Register</Button>
                </Stack>
                <Divider sx={{ mt: 1 }} />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={4}
                  sx={{ mt: 4 }}
                >
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Registration Period
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ borderBottom: "1px solid #333", p: 1, height: 56 }}
                    >
                      <IconButton onClick={() => handleYear("minus")}>
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Typography
                        sx={{ fontSize: 24, width: 160, textAlign: "center" }}
                      >
                        {year} &nbsp; year
                      </Typography>
                      <IconButton
                        color="primary"
                        onClick={() => handleYear("add")}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                  <Typography fontSize={24}>=</Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={4}
                  sx={{ mt: 4 }}
                >
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Registration Price
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{
                        borderBottom: "1px solid #333",
                        p: 1,
                        height: 56,
                      }}
                    >
                      <Typography fontSize={24}>{10} Matic</Typography>
                    </Stack>
                  </Stack>
                  <Typography fontSize={24}>+</Typography>
                  <Stack>
                    <Typography fontSize={12} color="#666">
                      Registration Price
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{
                        borderBottom: "1px solid #333",
                        p: 1,
                        height: 56,
                      }}
                    >
                      <Typography fontSize={24}>{30 * year} Matic</Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ width: 200, height: 60, mt: 4, fontSize: 18 }}
                >
                  Register
                </Button>
              </Stack>
            </Hidden>
          </>
        )}
      </Container>
    </Stack>
  );
}
