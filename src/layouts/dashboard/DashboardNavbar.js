import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import Searchbar from './Searchbar';
import ConnectButton from 'components/ConnectButton';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const { isCollapse } = useCollapseDrawer();

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        })
      }}
    >
      <ToolbarStyle>
        <Hidden lgUp>
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover /> */}
          <ConnectButton />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
