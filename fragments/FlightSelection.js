const { I } = inject();

module.exports = {

  root: '#flight0',

  // Locators
  oneWayTab : '#OW-tab',



  originCityLocator : '#departureOriginDropDown-input',
  originDropdownLocator : '#departureOriginDropDown-list', 
  destinationCityLocator : '#departureDestinationDropDown-input',
  destinationDropdownLocator : '#departureDestinationDropDown-list',
 // activeOriginCity : '.liItem-departureOriginDropDown.active',
 activerOriginCityDropdown : '//*[@id="departureOriginDropDown"]/child::ul[1]', 
 activerDestinationCityDropdown : '//*[@id="departureDestinationDropDown"]/child::ul[1]', 
  activeDestinationCity : '.liItem-departureDestinationDropDown.active',
  continueButton : '.TS-btn.btn-whiterabbit.TS-focusable.stepSetContinue.btnUpdateLevel',
   


  // Methods 

  // Select One-Way Tab and verify that the to-Date field is not displayed
  selectOneWay(){
    I.click(this.oneWayTab);
    I.dontSee(this.destinationCityLocator);
  },

  

  async selectOriginCity(origin){
    I.click(this.originCityLocator); 
    I.clearField(this.originCityLocator);
    I.fillField(this.originCityLocator, origin);
    I.waitForText(origin, 5, this.activerOriginCityDropdown);
    I.pressKey('Enter');
    
  },

  async selectDestinationCity(destination){
    I.clearField(this.destinationCityLocator);
    I.fillField(this.destinationCityLocator, destination);
    I.waitForText(destination, 5, this.activerDestinationCityDropdown);
    I.pressKey('Enter');
  },

  selectFromDate(from){
    I.fillField('#tsDatePickerFirstCalendar-input', from);
    I.pressKey('Enter');
  
  },

  selectToDate(to){
    I.fillField('#tsDatePickerSecondCalendar-input',to);
    I.pressKey('Enter');
  },

  // Select number of Adults passengers
  selectAdults(number){
    within('#tsTravelersSelectorRtOj-adults', () => {
      for (i = 1; i < number; i++){
        I.click('.plus.TS-btn.btn-level1');
      }
     
      });
  },

  // Select number of Children passengers
  selectChildren(number){
    within('#tsTravelersSelectorRtOj-children', () => {
      for (i = 0; i < number; i++){
        I.click('.plus.TS-btn.btn-level1');
      }
     
      });
  },

    // Select number of Infants on seat 
    selectInfants(number){
      within('#tsTravelersSelectorRtOj-babySeat', () => {
        for (i = 0; i < number; i++){
          I.click('.plus.TS-btn.btn-level1');
        }
       
        });
    },

    selectInfantsOnLap(number){
      within('#tsTravelersSelectorRtOj-babyLap', () => {
        for (i = 0; i < number; i++){
          I.click('.plus.TS-btn.btn-level1');
        }
       
        });

      
    },

    introduceAges(ages){
      var size = ages.length;

      for( i=0 ; i< size ; i++){
        I.fillField('#tsTravelersSelectorRtOj-'+i+'-childAgeInput', ages[i]);
      }
    },

    clickContinue(){
      I.click(this.continueButton);

    }

}
