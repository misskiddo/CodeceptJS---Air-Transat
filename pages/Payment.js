const { I } = inject();

module.exports = {

  // Locators
  
  

  // Methods 

fillPaymentInformation(payment){
  // [Toni Cabrera, Visa, 4520000000000000, July , 2021, 664, San Rafael, Montreal, QC, h3x 4t5 ]
  I.fillField('#holderName',payment[0] );
  I.selectOption('#typeRef', payment[1]);

  // Iframe for the credit card number
  within({frame: '*[id*="ts-credit-cart-number"]'},() => {  
    I.fillField('#field5',  payment[2] );
  });

  I.selectOption('#month', payment[3]);
  I.selectOption('#year', payment[4]);

  // Iframe for CVV
   within({frame:'*[id*="ts-credit-cart-code"]'},() => {  
    I.fillField('#field5',  payment[5] );
  });
  
  I.fillField('#addressLine1',payment[6]);
  I.fillField('#city',payment[7]);
  I.selectOption('#stateCode', payment[8]);
  I.fillField('#postalCode',payment[9]);

},

  
clickAgreeMessages(){
  I.checkOption('*[name="isEmailNotificationAccepted"]');
},

clickPay(){
  I.click('.transat-button.transat-button--next-step');
}




}
