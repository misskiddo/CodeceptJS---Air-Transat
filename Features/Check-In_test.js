
var checkIn = require('../testdata/checkIn.js')();


Feature('Check-In');



Before(({I}) => { 
   I.amOnPage('https://www.airtransat.com/en-CA/online-check-in?');
   tryTo(() => I.click('.closeCookieLegalNotice.TS-btn.btn-level1'));
  });


  Data(checkIn.information).Scenario('Check-In with multiple users @data', ({I, current}) => {
    I.fillField('#webcheckin-firstName-textbox', current.FirstName);
    I.fillField('#webcheckin-lastName-textbox', current.LastName);
    I.fillField('#webcheckin-bookingReference-textbox', current.Confirmation);
    I.fillField('#webcheckin-departureGateway-input', current.Airport);

    I.pressKey('ArrowDown');
    I.pressKey('Enter');
    I.checkOption('.checkbox-label.checkbox-label-agreement');
    I.click('#webcheckin-btnFind');

    I.see('Error', '#webCheckInError-modalTitle');



    

  });
