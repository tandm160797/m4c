import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
  }

  // Customize scrollbar
  *::-webkit-scrollbar-button {
    background: ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarButtonColor};
  }

  *::-webkit-scrollbar {
    width:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarWidth}; 
    height:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarHeight}; 
  }

  *::-webkit-scrollbar-thumb {
    background:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarThumbColor}; 
    border-radius:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarBorderRadius}; 

    &:hover {
      background:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarThumbHoverColor}; 
    }
  }

  *::-webkit-scrollbar-track {
    background:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarTrackColor}; 
  }

  *::-webkit-scrollbar-corner {
    background:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarCornerColor}; 
  }

  *::-webkit-scrollbar-button:end {
    display: block;
  }

  *::-webkit-scrollbar-button:start {
    display: none;
  }

  *::-webkit-scrollbar-button:horizontal:increment {
    background: linear-gradient(210deg, #ddd 40%, rgba(0, 0, 0, 0) 41%),
      linear-gradient(330deg, #ddd 40%, rgba(0, 0, 0, 0) 41%), linear-gradient(90deg, #ddd 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #aaa;
  }

  *::-webkit-scrollbar-button:horizontal:decrement {
    background: linear-gradient(30deg, #ddd 40%, rgba(0, 0, 0, 0) 41%),
      linear-gradient(150deg, #ddd 40%, rgba(0, 0, 0, 0) 41%), linear-gradient(270deg, #ddd 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #aaa;
  }

  *::-webkit-scrollbar-button:vertical:increment {
    background: linear-gradient(300deg, #ddd 40%, rgba(0, 0, 0, 0) 41%),
      linear-gradient(60deg, #ddd 40%, rgba(0, 0, 0, 0) 41%), linear-gradient(180deg, #ddd 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #aaa;
  }

  *::-webkit-scrollbar-button:vertical:decrement {
    background: linear-gradient(120deg, #ddd 40%, rgba(0, 0, 0, 0) 41%),
      linear-gradient(240deg, #ddd 40%, rgba(0, 0, 0, 0) 41%), linear-gradient(0deg, #ddd 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #aaa;
  }

  *::-webkit-scrollbar-button:horizontal:increment:hover,
  *::-webkit-scrollbar-button:horizontal:decrement:hover,
  *::-webkit-scrollbar-button:vertical:increment:hover,
  *::-webkit-scrollbar-button:vertical:decrement:hover {
    background-color:  ${(globalTheme) => globalTheme.theme.scrollbar.scrollbarButtonHoverColor}; 
  }
`;
