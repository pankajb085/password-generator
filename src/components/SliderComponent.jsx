import React from 'react'
import Slider from '@mui/material/Slider';
import '../styles/_slider.scss';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from '../styles/_variables.scss';

function SliderComponent({charLength, setCharLength}) {

  const handleSliderChange = (event, newValue) => {
    setCharLength(newValue);
  };

  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            color: colors.green, // Base color
            height: "8px" 
          },
          thumb: {
            backgroundColor: colors.white, // Thumb color
            width: "28px",
            height: "28px",
            "&:hover": {
              backgroundColor: colors.veryDarkGrey,
              boxShadow: "none",
              border: `2px solid ${colors.green}`
            },
            "&.Mui-focusVisible": {
              backgroundColor: colors.veryDarkGrey,
              boxShadow: "none",
              border: `2px solid ${colors.green}`
            }
          },
          track: {
            backgroundColor: colors.green // Track color
          },
          rail: {
            backgroundColor: colors.veryDarkGrey,
            opacity: 1 // Rail color
          },
        },
      },
    },
  });

  return (
    <div className="slider-container">
      <div className="slider-value">
        <p className="char-length">Character Length</p>
        <span>{charLength}</span>
      </div>
      <ThemeProvider theme={theme}>
        <Slider value={typeof charLength === 'number' ? charLength : 0} min={5} max={20} onChange={handleSliderChange} aria-labelledby="input-slider" />
      </ThemeProvider>
    </div>
  );
};

export default SliderComponent;