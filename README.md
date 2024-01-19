# Air Transat Test Suite
By Toñi Cabrera
Automation of the Air Transat site using CodeceptJS as a framework.

The following scenarios have been automated:
* E2E booking flow: Search, select tariff, seat selection, Passenger Information, and Payment (which will fail)
* Check-in
* Negative test case: Invalid passengers

# Requirements
* nodejs version 12+
* npm or yarn (recommended)
* local display (or run HEADLESS)

# Execution

## local setup
* Clone the repository locally
* execute yarn to install all dependencies

# # Run tests
Execute the following line to display available commands

To run all the tests
```
npx codeceptjs run
```

To run using the tags

```
npx codeceptjs run --grep @test
```
