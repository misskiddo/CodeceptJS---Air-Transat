Feature('Passanger Selector');

Before(({I}) => { 
   I.amOnPage('https://www.airtransat.com/');
   tryTo(() => I.click('.closeCookieLegalNotice.TS-btn.btn-level1'));
   I.click('#tsTravelersSelectorRtOj-input');
//   pause();
 
  });

Scenario('Passanger Selector - Add Children  @Features',  async ({ I, FlightSelection }) => {

 // Add 2 Children and their age
     FlightSelection.selectChildren(2);
     var ages = [5, 17];
     FlightSelection.introduceAges(ages);
});


Scenario('Passanger Selector - Error Case - Children age > 17  @Features',  async ({ I, FlightSelection }) => {

    // Add 2 Children and their age
        FlightSelection.selectChildren(2);
        var ages = [19, 1];
        FlightSelection.introduceAges(ages);
        I.pressKey('Tab');
        I.waitForText('Children must be between the ages of 2 and 17.', 3);
       // I.see('Children must be between the ages of 2 and 17.');
   });

Scenario('Passanger Selector - Error Case - Children on lap  @Features',  async ({ I, FlightSelection }) => {

    // Add 2 Children and their age
        FlightSelection.selectInfantsOnLap(8);
        I.see('Only one infant per adult is permitted.');
   });

