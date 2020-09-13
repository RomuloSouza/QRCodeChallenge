
import React, { useState } from 'react';
import api from '../../services/api'

import QrCode from '../QrCode';

import { Container, Form } from './styles';

const MainForm: React.FC = () => {
  const [payerId, setPayerId] = useState('');
  const [value, setValue] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [qrCode, setQrCode] = useState('');

  const sendForm = async (e: React.MouseEvent) => {
    e.preventDefault();
    const payload = {
      payerIdentifier: payerId,
      value: value,
      receiverIdentifier: receiverId
    }

    console.log('Request payload: ', payload);
    
    try {
      const response = await api.post('/transactions/', payload);
      setQrCode(JSON.stringify(response.data))
    } catch (error) {
      alert(error);
    }
    console.log('Form successfully sent!');
  }

  return (
    <Container>
        <Form>
          <span className="title">QRCodeChallenge</span>

          <input type="text" value={payerId} onChange={e => setPayerId(e.target.value)} placeholder="Payer ID"/>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Value ID"/>
          <input type="text" value={receiverId} onChange={e => setReceiverId(e.target.value)} placeholder="Receiver ID"/>

          <button  onClick={e => sendForm(e)}>Gerar QR Code</button>
        </Form>
        <QrCode {...{qrCode}}/>
    </Container>
  );
};

export default MainForm;