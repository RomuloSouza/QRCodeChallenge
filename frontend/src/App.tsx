import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import MainForm from './components/MainForm';

function App() {
  return (
    <>
      <div style={{display: "flex"}}>
        <MainForm />
        <MainForm />

      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
