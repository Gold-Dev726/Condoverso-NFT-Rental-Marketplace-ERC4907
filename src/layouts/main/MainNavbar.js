import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Stack,
  Link,
} from "@mui/material";
// hooks
import useOffSetTop from "hooks/useOffSetTop";
import useLocales from "hooks/useLocales";
// components
import Logo from "components/Logo";

import ConnectButton from "components/ConnectButton";
import LanguagePopover from "./LanguagePopover";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 80;
const APP_BAR_DESKTOP = 100;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  // transition: theme.transitions.create(["height", "background-color"], {
  //   easing: theme.transitions.easing.easeInOut,
  //   duration: theme.transitions.duration.shorter
  // }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 20,
  zIndex: -1,
  margin: "auto",
  position: "absolute",
  width: "100%",
  boxShadow: `0 1px 2px 0 #ffffff20`,
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const { translate } = useLocales();
  const isHome = pathname === "/";

  return (
    <>
      <AppBar
        sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none" }}
      >
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              bgcolor: "background.default",
              height: APP_BAR_DESKTOP,
            }),
          }}
        >
          <Container maxWidth="lg">
            <Stack direction="row" alignItems="center" spacing={5}>
              <Box component={RouterLink} to="/">
                <Logo sx={{ width: { xs: 80, md: 80 } }} />
              </Box>

              <Hidden mdDown>
                <MenuDesktop
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig}
                />
              </Hidden>

              <Box flex={1} />

              <Stack direction="row" alignItems="center" spacing={2}>
                <ConnectButton />
              </Stack>
              <Hidden mdUp>
                <MenuMobile navConfig={navConfig} />
              </Hidden>
            </Stack>
          </Container>
        </ToolbarStyle>
        {isOffset && <ToolbarShadowStyle />}
      </AppBar>
      <Box sx={{ height: APP_BAR_DESKTOP }}></Box>
    </>
  );
}
