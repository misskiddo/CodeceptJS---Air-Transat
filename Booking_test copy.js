Feature('Booking');

Before(({I}) => { 
    I.amOnPage('https://www.airtransat.com/');
 
  });

Scenario('Scenario 1 - Round Trip', async ({ I }) => {
  
   var originLocator = "#departureOriginDropDown-input";
   var destinationLocator = '#departureDestinationDropDown-input';

   
   // Select Origin city
    I.click(originLocator); 
    I.fillField(originLocator, 'Vancouver');
    I.waitForText('Vancouver', 3, '#departureOriginDropDown-list');
    I.pressKey('Enter');


    // Select Destination City

    I.fillField(destinationLocator,'Montre');
    I.waitForText('Montreal', 3, '#departureDestinationDropDown-list');
    I.pressKey('ArrowDown');
    I.pressKey('Enter');

    
    // Select From-To dates in calendar 

    I.fillField('#tsDatePickerFirstCalendar-input', "11-05-2020");
    I.pressKey('Enter');
    I.fillField('#tsDatePickerSecondCalendar-input', "12-06-2020");
    I.pressKey('Enter');


    // Select Number of passangers   
  //  I.click("#tsTravelersSelectorRtOj"); // Open the passanger layout
  //  I.waitForVisible(".travelers.TS-incrementalBox.bsh-bigDrop.active", 5);

    // Select 2 Adults
    within('#tsTravelersSelectorRtOj-adults', () => {
      I.click('.plus.TS-btn.btn-level1');
      });

   // Select 5 children
   within('#tsTravelersSelectorRtOj-children', () => {
       for(i = 0; i < 5; i++) {
            I.click('.plus.TS-btn.btn-level1');
       }
    });
    

    pause();
});

Scenario('Scenario 2 - Verify Title', async ({ I }) => {
  
    var title = await I.grabTitle();
    var assert = require('assert');
    assert.strictEqual(title, 'Cheap flights to Canada, Europe, USA and Sun destinations | Air Transat');

});


