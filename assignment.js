// https://github.com/fyz12/assignment

//Number 01. kilometerToMeter Calculation Program

function kilometerToMeter(kiloMetar) {
  if (kiloMetar < 0) {
    return "Please Enter Positive Value";
  }
  var metar = kiloMetar * 1000;
  return metar;
}
//Number 02. budgetCalculator Calculation Program

function budgetCalculator(clockUnit, mobileUnit, laptopUnit) {
  if (clockUnit < 0) {
    return "Please Clock unit must be grater Than zero";
  } else if (mobileUnit < 0) {
    return "Please Mobile unit must be grater Than zero";
  } else if (laptopUnit < 0) {
    return "Please Laptop unit must be grater Than zero";
  }
  var totalClockPirce = 50 * clockUnit;
  var totalMobilePrice = 100 * mobileUnit;
  var totalLaptopPirce = 500 * laptopUnit;
  var totalBudget = totalClockPirce + totalMobilePrice + totalLaptopPirce;
  return totalBudget;
}
//Number 03. hotelCost Calculation Program

function hotelCost(days) {
  var totalCost = 0;
  if (days <= 10) {
    totalCost = days * 100;
  } else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var remaining = days - 10;
    var elevenToTwentyDays = remaining * 80;
    totalCost = firstTenDays + elevenToTwentyDays;
  } else {
    var firstTenDays = 10 * 100;
    var elevenToTwentyDays = 10 * 80;
    var remaining = days - 20;
    var twentyOverDays = remaining * 50;
    totalCost = firstTenDays + elevenToTwentyDays + twentyOverDays;
  }
  return totalCost;
}
//Number 04. megaFriend Find Program

function megaFriend(friendsName) {
  var bigName = friendsName[0].length;
  var result = friendsName[0];
  for (var i = 1; i < friendsName.length; i++) {
    var big = friendsName[i].length;
    if (big > bigName) {
      result = friendsName[i];
      bigName = big;
    }
  }
  return result;
}
