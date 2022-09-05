import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Link
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { registerToken } from "utils/wallet";
import { USDCAddress, ICOAddress, SWINKAddress } from "contracts/address";
import { Faqs } from "./Texts";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "none",
  marginBottom: "15px",
  borderRadius: 2,
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardArrowDownIcon sx={{ fontSize: "1.5rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  borderTop: `1px solid ${
    theme.palette.mode === "light" ? "#00000020" : "#ffffff20"
  }`,
  paddingLeft: "25px",
  paddingRight: "30px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0 20px 20px 20px"
}));

export default function Hero() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack
      sx={{
        py: 20,
        bgcolor: "#140f29",
      }}
      id="faq"
    >
      <Stack id="faq">
        <Container maxWidth="md">
          <Typography align="center" variant="h3" color="primary">
            FAQ
          </Typography>
          <Typography align="center" color="grey.600" sx={{ mt: 2, mb: 5 }}>
            Frequently Asked Questions
          </Typography>
          {Faqs.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary>
                <Typography fontWeight="bold">{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ whiteSpace: "pre-line", py: 2 }}>
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Stack>
    </Stack>
  );
}
