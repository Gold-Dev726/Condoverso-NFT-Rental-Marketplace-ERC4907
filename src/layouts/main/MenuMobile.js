import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Drawer,
  Collapse,
  Stack,
  ListItemText,
  ListItemIcon,
  Button,
  ListItemButton,
  IconButton
} from "@mui/material";
// components
import Logo from "components/Logo";
import NavSection from "components/NavSection";
import Scrollbar from "components/Scrollbar";

// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.h4,
  justifyContent:'center',
  color: "white",
  height: ITEM_SIZE,
  textTransform: "capitalize",
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  "&:hover": {
    color: theme.palette.primary
  }
}));

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func
};

function MenuMobileItem({ item, isOpen, onOpen, onClose }) {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Box component={Icon} sx={{ width: 16, height: 16, ml: 1 }} />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <NavSection
              navConfig={children}
              sx={{
                "& .MuiList-root:last-of-type .MuiListItemButton-root": {
                  height: 200,
                  backgroundSize: "92%",
                  backgroundPosition: "center",
                  bgcolor: "background.neutral",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(/static/illustrations/illustration_dashboard.png)",
                  "& > *:not(.MuiTouchRipple-root)": { display: "none" }
                },
                "& .MuiListSubheader-root": {
                  pl: PADDING,
                  display: "flex",
                  alignItems: "center",
                  "&:before": {
                    ml: "6px",
                    mr: "22px",
                    width: 8,
                    height: 2,
                    content: "''",
                    borderRadius: 2,
                    bgcolor: "currentColor"
                  }
                },
                "& .MuiListItemButton-root": {
                  pl: PADDING,
                  "&:before": { display: "none" },
                  "&.active": { color: "primary.main", bgcolor: "transparent" }
                },
                "& .MuiListItemIcon-root": {
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  "&:before": {
                    width: 4,
                    height: 4,
                    content: "''",
                    borderRadius: "50%",
                    bgcolor: "currentColor"
                  }
                }
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      onClick={onClose}
      sx={{
        "&.active": {
          color: "white",
          fontWeight: "fontWeightMedium",
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            )
        }
      }}
    >
      {/* <ListItemIcon>{icon}</ListItemIcon> */}
      <ScrollLink to={path.slice(2)} spy smooth onClick={onClose}>
        <ListItemText
          sx={{ textAlign: "center", color: "white" }}
          disableTypography
          primary={title}
        />
      </ScrollLink>
    </ListItemStyle>
  );
}

export default function MenuMobile({ isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: "common.white" })
        }}
      >
        <MenuIcon color="primary" />
      </IconButton>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, height: "100vh", background: "#1b1b23" } }}
      >
        <Scrollbar>
          <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
            <Box component={RouterLink} to="/">
              <Logo sx={{ width: 120 }} />
            </Box>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                ml: 1,
                ...(isHome && { color: "common.white" })
              }}
            >
              <CloseIcon color="primary" />
            </IconButton>
          </Stack>

          <List disablePadding sx={{ mt: 10 }}>
            {navConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isOpen={open}
                onClose={handleDrawerClose}
                onOpen={handleOpen}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
