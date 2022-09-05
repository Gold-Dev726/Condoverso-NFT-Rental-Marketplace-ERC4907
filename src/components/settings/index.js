import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
// material
import {
  Box,
  Backdrop,
  Paper,
  Tooltip,
  Divider,
  Typography,
  Stack,
  IconButton
} from "@mui/material";
//
import Scrollbar from "../Scrollbar";
import SettingMode from "./SettingMode";
import SettingColor from "./SettingColor";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

export default function Settings() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      />

      <Box
        sx={{
          top: 12,
          bottom: 12,
          right: 0,
          position: "fixed",
          zIndex: 2001,
          ...(open && { right: 12 })
        }}
      >
        <Box
          sx={{
            p: 0.5,
            px: "4px",
            mt: -3,
            left: -44,
            top: "50%",
            color: "grey.800",
            position: "absolute",
            bgcolor: "common.white",
            borderRadius: "24px 0 16px 24px",
            boxShadow: (theme) => theme.customShadows.z12
          }}
        >
          <Tooltip title="Settings">
            <IconButton
              color="inherit"
              onClick={handleToggle}
              sx={{
                p: 0,
                width: 40,
                height: 40,
                transition: (theme) => theme.transitions.create("all"),
                "&:hover": { color: "primary.main", bgcolor: "transparent" }
              }}
            >
              {open ? <CloseIcon /> : <SettingsIcon />}
            </IconButton>
          </Tooltip>
        </Box>

        <Paper
          sx={{
            height: 1,
            width: "0px",
            overflow: "hidden",
            boxShadow: (theme) => theme.customShadows.z24,
            transition: (theme) => theme.transitions.create("width"),
            ...(open && { width: DRAWER_WIDTH })
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 2, pr: 1, pl: 2.5 }}
          >
            <Typography variant="subtitle1">Settings</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />

          <Scrollbar sx={{ height: 1 }}>
            <Stack spacing={4} sx={{ pt: 3, px: 3, pb: 15 }}>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2">Mode</Typography>
                <SettingMode />
              </Stack>

              <Stack spacing={1.5}>
                <Typography variant="subtitle2">Color</Typography>
                <SettingColor />
              </Stack>
            </Stack>
          </Scrollbar>
        </Paper>
      </Box>
    </>
  );
}
