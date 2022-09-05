import {
  Stack,
  Box,
  Typography,
  Container,
  IconButton,
  Button,
  InputBase
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Icon } from "@iconify/react";
import medium from "@iconify/icons-cib/medium";
import twitter from "@iconify/icons-cib/twitter";
import telegram from "@iconify/icons-cib/telegram";
import discord from "@iconify/icons-cib/discord";
import linkedin from "@iconify/icons-cib/linkedin";
import instagram from "@iconify/icons-cib/instagram";
import menuConfig from "./MenuConfig";
import Logo from "components/Logo";
import { Link as ScrollLink } from "react-scroll";
export default function MainFooter() {
  return (
    <Stack
      sx={{
        mt: 10,
        py: 5
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Logo sx={{ width: 160 }} />
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Join our community
          </Typography>
          <Stack direction="row" alignItems="center" spacing={{ xs: 1, md: 2 }}>
            <IconButton
              sx={{ width: 50, height: 50 }}
              href="https://yoddaverse.com"
              target="_blank"
            >
              <Icon icon={twitter} />
            </IconButton>
            <IconButton
              sx={{ width: 50, height: 50 }}
              href="https://yoddaverse.com"
              target="_blank"
            >
              <Icon icon={discord} />
            </IconButton>
            <IconButton
              sx={{ width: 50, height: 50 }}
              href="https://yoddaverse.com"
              target="_blank"
            >
              <Icon icon={telegram} />
            </IconButton>
            <IconButton
              sx={{ width: 50, height: 50 }}
              href="https://yoddaverse.com"
              target="_blank"
            >
              <Icon icon={instagram} />
            </IconButton>
            <IconButton
              sx={{ width: 50, height: 50 }}
              href="https://yoddaverse.com"
              target="_blank"
            >
              <Icon icon={medium} />
            </IconButton>
          </Stack>

          <Box
            sx={{
              width: { xs: 1, md: 400 },
              height: "1px",
              bgcolor: "#ffffff30",
              my: 2
            }}
          />
          <Typography color="#ffffff30" textAlign="center">
            Copyright ©2022 Condoverso. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
