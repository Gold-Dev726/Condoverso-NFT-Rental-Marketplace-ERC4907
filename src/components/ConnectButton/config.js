import { ConnectorNames } from "utils/web3React";
import Metamask from "./WalletIcons/Metamask.svg";
import WalletConnect from "./WalletIcons/WalletConnect.svg";
import TrustWallet from "./WalletIcons/TrustWallet.svg";
import MathWallet from "./WalletIcons/MathWallet.svg";
import TokenPocket from "./WalletIcons/TokenPocket.svg";
import BinanceChain from "./WalletIcons/BinanceChain.svg";
import SafePal from "./WalletIcons/SafePal.svg";
import Coin98 from "./WalletIcons/Coin98.svg";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  // {
  //   title: "Trust Wallet",
  //   icon: TrustWallet,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 3,
  // },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  // },

  // {
  //   title: "Binance Chain",
  //   icon: BinanceChain,
  //   connectorId: ConnectorNames.BSC,
  //   priority: 999,
  // },
  // {
  //   title: "SafePal",
  //   icon: SafePal,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  // },
  // {
  //   title: "Coin98",
  //   icon: Coin98,
  //   connectorId: ConnectorNames.Injected,
  //   priority: 999,
  // },
];
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
