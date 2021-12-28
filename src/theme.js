const theme = {
  global: {
    colors: {
      violentBlue: '#086788', // Card background
      rubyPink: '#D81159', // Card background
      polishedPine: '#439A86', // Card background
      charcoal: '#2C2C34', // App Bar Background
      nearBlack: '#17171A', // The back of the website
      eppeline: '#F7F1ED', // Light text color
      offlineColor: '#153B50', // Dark blue 
      onlineColor: '#32A287', // Green
      idleColor: '#FFE66D', // Yellow
      dangerRed: '#FE4A49', // Red
    },
    font: {
      family: 'Nunito',
      size: '18px',
      height: '20px',
    },
  },
  anchor: {
    hover: {
      textDecoration: 'none',
    },
  },
  heading: {
    level: {
      '4': {
        color: '#ff0000',
        font: {
          weight: '200'
        }
      }
    }
  },
  image: {
    extend: 'border-radius: 20px;'
  }
};

export default theme;