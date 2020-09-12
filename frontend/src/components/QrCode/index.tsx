
import React from 'react';
import QRCode from 'qrcode.react';

import { Container, Square } from './styles';

const QrCode: React.FC = () => {
  const qrcode = "$2a$10$NyMUABJroKUW5P5OFHBJcuVtSzB41OC8E6RXHniEDnQZj33y956cu"
  return (
    <Container>
      <Square>
        <QRCode value={qrcode} size={256} />
      </Square>
    </Container>
  );
};

export default QrCode;