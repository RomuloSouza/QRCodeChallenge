
import React from 'react';
import QRCode from 'qrcode.react';

import { Container, Square } from './styles';

const QrCode: React.FC<{qrCode: string}> = (props) => {
  const classes = props.qrCode ? '' : 'closed';

  return (
    <Container className={classes}>
      <Square>
        <QRCode value={props.qrCode} size={256} />
      </Square>
    </Container>
  );
};

export default QrCode;