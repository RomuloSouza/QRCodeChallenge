
import React from 'react';

import { Container, Form } from './styles';

const MainForm: React.FC = () => {
  function sendForm (){
    console.log('formulario enviado!');
  }

  return (
    <Container>
        <Form>
          <span className="title">QRCodeChallenge</span>

          <input type="text" placeholder="Payer ID"/>
          <input type="text" placeholder="Value ID"/>
          <input type="text" placeholder="Receiver ID"/>

          <button onClick={sendForm}>Enviar Formulário</button>
        </Form>
    </Container>
  );
};

export default MainForm;