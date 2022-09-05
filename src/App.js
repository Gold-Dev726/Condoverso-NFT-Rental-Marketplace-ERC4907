import { useEffect } from "react";
import Router from "./router";
import ThemeConfig from "theme";
import Settings from "./components/settings";
import { switchNetwork } from "utils/wallet";
import useEagerConnect from "hooks/useEagerConnect";
import ThemeLocalization from "components/ThemeLocalization";

export default function App() {
  // switchNetwork();
  useEagerConnect();

  return (
    <ThemeConfig>
      <ThemeLocalization>
        <Settings />
        <Router />
      </ThemeLocalization>
    </ThemeConfig>
  );
}
