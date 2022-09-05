// material
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Hidden } from "@mui/material";
// hooks
import useCountdown from "hooks/useCountdown";

// ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   minHeight: "100%",
//   display: "flex",
//   alignItems: "center",
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10),
// }));

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

const NumberStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: 140,
  height: 60,
  border: "1px solid #59f1f650",
}));

// ----------------------------------------------------------------------

export default function TokenCountDown({ time }) {
  const countdown = useCountdown(time);
  // const countdown = useCountdown(new Date(2022, 0, 20, 23));

  return (
    <Stack direction="row" justifyContent="center">
      <Typography>
        {countdown.days}d, {countdown.hours}h, {countdown.minutes}m,{" "}
        {countdown.seconds}s{" "}
      </Typography>
    </Stack>
  );
}
