import { useRef, useState } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, IconButton, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
// hooks
import useLocales from 'hooks/useLocales';
// components
import MenuPopover from 'components/MenuPopover';
import { Icon } from '@iconify/react';
import enIcon from '@iconify/icons-flagpack/gb-ukm';
import esIcon from '@iconify/icons-flagpack/es';
import ruIcon from '@iconify/icons-flagpack/ru';
import arIcon from '@iconify/icons-flagpack/eg';
import frIcon from '@iconify/icons-flagpack/fr';
import deIcon from '@iconify/icons-flagpack/de';
import zhIcon from '@iconify/icons-flagpack/cn';
// ----------------------------------------------------------------------
const flags = {
  "en": enIcon,
  "es": esIcon,
  "ru": ruIcon,
  "ar": arIcon,
  "fr": frIcon,
  "de": deIcon,
  "zh": zhIcon,
}
export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLang = (value) => {
    onChangeLang(value);
    handleClose();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        {/* <img src={currentLang.icon} alt={currentLang.label} /> */}
        <Icon icon={flags[currentLang.value]} width="28" />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ py: 1 }}>
        {allLang.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => handleChangeLang(option.value)}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemIcon>
              <Icon icon={flags[option.value]} size={30} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: 'body2' }}>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
