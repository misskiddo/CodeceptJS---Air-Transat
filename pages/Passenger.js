const { I } = inject();

module.exports = {

  // Locators
  
  

  // Methods 

 



fillPassangerInformation(passengers){
  /* passengers = [
    ['Ms', 'Toni', 'Cabrera', '04', 'June', '1987', 'Female', 'QC'],
    ['Mr', 'Max', 'Watson', '01', 'July', '2000', 'Male', 'ON']
  ]; */

  var size = passengers.length; //2

  for (i=0 ; i<size ; i++){
    I.selectOption('#ADT-'+i+'-ADT-titleRef', passengers[i][0]);
    I.fillField('#ADT-'+i+'-ADT-first', passengers[i][1]);
    I.fillField('#ADT-'+i+'-ADT-last', passengers[i][2]);
    I.fillField('#ADT-'+i+'-ADT-day', passengers[i][3]);
    I.selectOption('#ADT-'+i+'-ADT-month', passengers[i][4]);
    I.fillField('#ADT-'+i+'-ADT-year', passengers[i][5]);
    I.selectOption('#ADT-'+i+'-ADT-gender', passengers[i][6]);
   
  }
  I.selectOption('#ADT-0-ADT-stateCode', passengers[0][7]);

},

fillMainContactInformation(){
  I.selectOption('#arranger', 'ADT/0');
  I.fillField('#email', 'toni@cgi.com');
  I.fillField('#phoneNumber', '4381470593');
},

clickSave(){
  I.click('.transat-button.transat-button--functionality');
}




}
