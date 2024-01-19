const { clickSave } = require("./Passenger");

const { I } = inject();

module.exports = {

  // Locators
  
  

  // Methods 

 


  selectInsuranceCovid(){
    I.checkOption('#INSURANCE_1_1');

  },


  clickSave(){
    I.click('.transat-button.transat-button--functionality');
  },

  dontwantInsurance(){
    I.click('.select-insurance__cancel-insurance-message');
  },

  yesIamSure(){
    I.click('.transat-button.transat-button--functionality');
  }
  

  




}
