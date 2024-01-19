Feature('Booking');

Before(({I}) => { 
   I.amOnPage('https://www.airtransat.com/');
 
  });

Scenario('E2E Scenario 1 - Round Trip  @E2E',  async ({ I, FlightSelection, TimeSelection, SeatSelection, Passenger, Insurance, Payment }) => {


    var origin = "Vanc";
    var destination = 'Montre';
    // Select Origin and Destination City
   await FlightSelection.selectOriginCity(origin);
   await FlightSelection.selectDestinationCity(destination);
    
    // Select From-To dates in calendar 
    FlightSelection.selectFromDate('11-05-2020');
    FlightSelection.selectToDate('12-06-2020');

    // Select 2 Adults
    FlightSelection.selectAdults(2); 

    FlightSelection.clickContinue();

    // Time Selection Page - Verify from/to cities
    await TimeSelection.verifyFromToCities();
    
    // Select Eco Standard Fee to go
    TimeSelection.selectEcoStandardToGo();

    // Select Club Flex Fee to Come Back 
    TimeSelection.selectClubFlexToComeBack();

    // Verify section with flight and prices are displayed
    TimeSelection.flightsSelectedAreDisplayed();

    TimeSelection.clickContinue();

    // Seat Selection Page
    I.see('Seat selection and additional bags');
    SeatSelection.clickContinue();

    // Passenger, insurance and Payment Page
    I.see('Passengers, insurance & payment');
    
    let passengers = [
        ['Ms', 'Toni', 'Cabrera', '04', 'June', '1987', 'Female', 'QC'],
        ['Mr', 'Max', 'Watson', '01', 'July', '2000', 'Male', 'ON']
    ];

    Passenger.fillPassangerInformation(passengers);
    Passenger.fillMainContactInformation();
    Passenger.clickSave();

    // Insurance section - Select Don't want insurance
    I.see('Travel insurance');    
    Insurance.dontwantInsurance();    
    Insurance.yesIamSure();
    Insurance.clickSave();

    // Payment
    let paymentInfo = ['Toni Cabrera', 'Visa', 4520000000000000, 'July' , '2021', '664', 'San Rafael', 'Montreal', 'QC', 'h3x 4t5'];
    
    Payment.fillPaymentInformation(paymentInfo);
    Payment.clickAgreeMessages();

    Payment.clickPay();

    I.see('Sorry, an error occurred'); // Because payment failed

    pause();
});



