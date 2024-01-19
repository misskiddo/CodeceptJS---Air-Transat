'use strict';
 
var passengers = function(){
    var passengers = {};


    var information = new DataTable(['Title', 'FirstName', 'LastName', 'Day', 'Month', 'Year', 'Gender', 'Province']); //



    information.add(['Ms', 'Toni', 'Cabrera', '04', 'June', '1987', 'Female', 'QC']);
    information.add(['Mr', 'Max', 'Cabrera', '01', 'July', '2000', 'Female', 'QC']);
    information.add(['Ms', 'Tara', 'Cabrera', '04', 'June', '1987', 'Female', 'QC']);
    information.add(['Ms', 'Persy', 'Cabrera', '04', 'June', '1987', 'Female', 'QC']);

    passengers.information = information;
    
    return passengers;
}

module.exports = passengers;