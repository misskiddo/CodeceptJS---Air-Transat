const { clickContinue } = require("../fragments/FlightSelection");

const { I } = inject();
const nthTodoItem = nth => locate('.todo-list li').at(nth).as(`${nth} todo item`)

const originFlightList = nth => locate('.origin-destination-list').at(nth).as

module.exports = {

  // Locators
  
  flightDirectionHeader: '.flight-direction-header__text',
  List: '.origin-destination-list',
 // originList2: '//*[@class="origin-destination-list"]/child::li[1]',
  originList: '(//ol[@class="origin-destination-list"])[1]',
  
  destinationList: '(//ol[@class="origin-destination-list"])[2]',

  // Methods 

  async verifyFromToCities(origin, destination){
    
    let header = await I.grabTextFrom(this.flightDirectionHeader);
    header.includes(origin);
    header.includes(destination);
  },
/*
  async numberOfFlightsGo(){
   //  await I.grabTextFromAll(this.originList);
   
    within(this.originList, () => {
      locate('.origin-destination-option viewport-desktop').
      });
  },

  numberOfFlightsBack(){
    const classNames = await I.grabAttributeFrom(nthTodoItem(nthTodo), 'class');
    assert(classNames.indexOf('completed') < 0, 'Expected todo to be not already marked as completed')

  },*/

  selectEcoStandardToGo(){
     within(this.originList, () => {  
      var standard = locate('.origin-destination-option__fare-group').at(2);
      I.click(standard);
      });
  },

  selectEcoFlexToGo(){
    within(this.originList, () => {  
     var standard = locate('.origin-destination-option__fare-group').at(3);
     I.click(standard);
     });
 },
 selectClubFlexToComeBack(){
  within(this.destinationList, () => {  
   var standard = locate('.origin-destination-option__fare-group').at(5);
   I.click(standard);
   });
},

flightsSelectedAreDisplayed(){
  I.seeElement('.shopping-cart__details-animation-fix-inner');
},

clickContinue(){
    within('.page-container__button-area', () => {  
      I.click('.transat-button.transat-button--next-step');
      });
}

}
