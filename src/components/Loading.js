import { Stack } from "@mui/material";
export default function Loading() {
  //other logic
  return (
    <Stack
      sx={{ width: 1, height: "calc(100vh - 200px)" }}
      justifyContent="center"
      alignItems="center"
    ></Stack>
  );
}
