import React, {useState, useEffect} from 'react';
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

const openCardPayment = () => {
    const options = {
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'zip', // or 'full'
        theme,
        prefilledInformation: {
        email: "Tester@test.com",
        phone: '555555555',
        billingAddress: {
            name: 'Annoying Tester',
            line1: '123 Fake St',
            line2: 'Apartment 1',
            state: 'NY',
            city: 'New York',
            country: 'US',
            postalCode: '90210'
        }
        }
      };
      stripe.paymentRequestWithCardForm(options)
        .then(response => {
            console.log(response)
          // Get the token from the response, and send to your server
        })
        .catch(error => {
            console.log(error)
          // Handle error
        })
}

const CardPayment = props => {
 useEffect(() => {
    openCardPayment()
 }, [])
    return( 
    <View />
    )
  
}

export default CardPayment