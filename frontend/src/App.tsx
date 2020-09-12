import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import MainForm from './components/MainForm';
import QrCode from './components/QrCode';

function App() {
  return (
    <>
      <div style={{display: "flex"}}>
        <MainForm />
        {/* <MainForm /> */}
        <QrCode />

      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
