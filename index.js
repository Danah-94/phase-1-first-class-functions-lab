// Code your solution in this file!

/* returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. 
   The assigned function should accept an array of drivers as an argument and return the first two drivers in the array. */

   const returnFirstTwoDrivers = (array) => [ array[0] , array[1]] ;

/* returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. 
   The assigned function should accept an array of drivers as an argument and return the last two drivers in the array. */   

   const returnLastTwoDrivers = (array) => [ array[array.length - 2] , array[array.length - 1]] ;  

/* selectingDrivers — This is an array containing two elements: 
   the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).  */
   
   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/* createFareMultiplier() — This is a higher-order function that takes in one argument, an integer,
   and returns a function that will multiply a fare for a ride accordingly. 
   If createFareMultiplier() receives an argument of 4, 
   it will return a function that takes in a fare as an argument and quadruples the fare. */

   // as an Extra Explanation
   // const fareQuintupler = createFareMultiplier(5);
   // fareQuintupler(9); returns 5 * 9 which is 45// 
   
   function createFareMultiplier(numb){
       return ((fare) => Math.abs(numb * fare));
   }

/* fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
   Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it. */
   
   const fareDoubler = (fare) => Math.abs(2 * fare);

/* fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
   Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it. */  

   const fareTripler = (fare) => Math.abs(3 * fare);

/* selectDifferentDrivers() — This function takes two arguments, an array of drivers 
   and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
   Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers. */
   
   function selectDifferentDrivers(array , returnFirstTwoDrivers){
                return returnFirstTwoDrivers(array);
   }