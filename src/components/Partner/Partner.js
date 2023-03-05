import React from 'react';
import { Container} from './subPartner/Container';
import { Form } from './subPartner/Form';
import { Text } from './subPartner/Text'
import { Line } from './subPartner/Line';
import { Navbar } from '../Utilities/Navbar/Navbar';
import { Footer } from '../Utilities/Footer/Footer';
import { LastFooter } from '../Utilities/Footer/SubFooter/Footer';
import PopUp from './subPartner/Popup/PopUp';


export function Partner() {
  return (
    <div className="wrapper">

        <Navbar />
        <Container>
          <Text/>
          <Line/>
          <Form/>
        </Container>  
        <LastFooter />
    </div>

  );
}