// components
import SvgIconStyle from "../../components/SvgIconStyle";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  buy: <AddShoppingCartIcon />,
  account: <ManageAccountsIcon />
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "admin",
    items: [
      { title: "Admin", path: "/app/admin", icon: ICONS.buy },
    ]
  },
  {
    subheader: "general",
    items: [
      { title: "Buy A Domain", path: "/app/buy", icon: ICONS.buy },
      { title: "My Account", path: "/app/address/1", icon: ICONS.account }
    ]
  }
];

export default sidebarConfig;
