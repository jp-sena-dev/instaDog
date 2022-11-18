import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 1em;
    margin: 0;
    color: #262424;
  }

  .react-modal-content {
    width: 100%;
    height: min-content;

    background-color: white;
    color: white;
    
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    height: 100vh;
    width: 100vw;

    position: fixed;
    left: 0;
    bottom: 0;

    z-index: 15;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
