import './pricing.css';
import React, { Component } from 'react';
import Header from './subPricing/header';
import Body from './subPricing/body';
import Section from './subPricing/section';
import { Navbar } from '../Utilities/Navbar/Navbar';
import { Footer } from '../Utilities/Footer/Footer';
import { FaqAns } from '../FAQ/subFAQ/QN';

export class Pricing extends Component {
  render() {
    return (
      <>
        <div className='wrapper'>
          <Navbar />
          <Header />
          <Body />
          <Section />
          <FaqAns 
          
          />
          <Footer
            title='Want to learn more?'
            btnText='Read our Blog'
            vidSrc='https://www.dropbox.com/s/k2rdqpvp1xbb4av/Footer_4.mp4?raw=1'
          />
        </div>
      </>
    );
  }
}

export default Pricing;