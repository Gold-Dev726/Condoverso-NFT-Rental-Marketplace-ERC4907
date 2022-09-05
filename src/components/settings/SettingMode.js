import { Icon } from '@iconify/react';
// material
import { Box, Grid, Radio, Paper, RadioGroup, CardActionArea, FormControlLabel } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onChangeMode } = useSettings();

  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode} sx={{ px: 5 }}>
      <Grid container spacing={2.5} dir="ltr">
        {['light', 'dark'].map((mode, index) => (
          <Grid item xs={6} key={mode}>
            <Paper
              sx={{
                width: 1,
                zIndex: 0,
                overflow: 'hidden',
                position: 'relative',
                bgcolor: mode === 'dark' ? 'grey.900' : 'common.white',
                ...(themeMode === mode && {
                  boxShadow: (theme) => theme.customShadows.z12
                })
              }}
            >
              <CardActionArea sx={{ color: 'primary.main' }}>
                <Box
                  sx={{
                    py: 1,
                    display: 'flex',
                    color: 'text.disabled',
                    justifyContent: 'center',
                    ...(themeMode === mode && {
                      color: 'primary.main'
                    })
                  }}
                >
                  {index === 0 ? <LightModeIcon /> : <DarkModeIcon />}
                </Box>

                <FormControlLabel
                  label=""
                  value={mode}
                  control={<Radio sx={{ display: 'none' }} />}
                  sx={{
                    top: 0,
                    margin: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                  }}
                />
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}
