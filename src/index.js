// i18n
import './locales/i18n';
// scroll bar
import "simplebar/src/simplebar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Providers
import { SearchProvider } from "./contexts/SearchContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Provider as ReduxProvider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { SnackbarProvider } from "notistack";

import { store } from "redux/store";
import { BrowserRouter } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { getLibrary } from "utils/web3React";

const config = {
  // readOnlyChainId: ChainId.BSCTestnet,
};

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <SearchProvider>
          <SettingsProvider>
            <ReduxProvider store={store}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </LocalizationProvider>
            </ReduxProvider>
          </SettingsProvider>
        </SearchProvider>
      </SnackbarProvider>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById("root")
);
