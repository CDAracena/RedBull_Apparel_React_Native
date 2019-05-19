import React, { Component } from 'react';
import { View } from 'react-native';
import stripe from 'tipsi-stripe';


stripe.setOptions({
  publishableKey: 'pk_test_cPNZJdGfdiMnSisz2x3qiV8700IJnTFley',
});
const theme = {
  primaryBackgroundColor: '#000',
  secondaryBackgroundColor: '#fff',
  primaryForegroundColor: '#880D1E',
  secondaryForegroundColor: '#fff',
  accentColor: '#880D1E',
  errorColor:   '#880D1E'
}

class NewCardPage extends Component {
  componentDidMount() {
    
    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'zip', // or 'full'
      theme
    };
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
          console.log(response)
        // Get the token from the response, and send to your server
      })
      .catch(error => {
          console.log(error)
        // Handle error
      });
  }
  render() {
    return <View />
  }
}

export default NewCardPage