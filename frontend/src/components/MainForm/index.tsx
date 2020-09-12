
import React, { useState } from 'react';
import api from '../../services/api'

import { Container, Form } from './styles';

const MainForm: React.FC = () => {
  const [payerId, setPayerId] = useState('');
  const [value, setValue] = useState('');
  const [receiverId, setReceiverId] = useState('');

  const sendForm = async () => {
    const payload = {
      payerIdentifier: {payerId},
      value: {value},
      receiverId: {receiverId}
    }
    
    console.log('payload = ', payload)
    const response = await api.post('/transactions/', {payerIdentifier: payload});
    // alert(JSON.stringify(response.data));
    console.log('Form successfully sent!');
  }

  return (
    <Container>
        <Form>
          <span className="title">QRCodeChallenge</span>

          <input type="text" value={payerId} onChange={e => setPayerId(e.target.value)} placeholder="Payer ID"/>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Value ID"/>
          <input type="text" value={receiverId} onChange={e => setReceiverId(e.target.value)} placeholder="Receiver ID"/>

          <a onClick={sendForm}>Enviar Formulário</a>
        </Form>
    </Container>
  );
};

export default MainForm;