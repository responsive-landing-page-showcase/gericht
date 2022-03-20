import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  
  a {
    color: unset;
    text-decoration: none;
  }
  
  .slide-bottom {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  
  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  

`;
export default Global;
