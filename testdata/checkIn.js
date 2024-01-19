'use strict';
 
var checkIn = function(){
    var checkIn = {};


    var information = new DataTable(['FirstName', 'LastName', 'Confirmation', 'Airport' ]); 



    information.add(['Toni', 'Cabrera', 'AGP524', 'AGP']);
    information.add(['Max', 'Watson', '018dfg', 'YUL']);
    information.add(['Tara', 'Ratilla', '48TT04', 'MAD']);
    information.add(['Persy', 'Norwey', 'BN04T', 'YYZ']);

    checkIn.information = information;
    
    return checkIn;
}

module.exports = checkIn;