/* --------------------------------------Start-01-------------------------------------------- */
function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Please input a valid number.";
  }
  let degreeValue = radian * 57.2958;
  return degreeValue;
}
let finalDegreeValue0 = radianToDegree("shejan");
let finalDegreeValue1 = radianToDegree(10);
let finalDegreeValue2 = radianToDegree(25);
let finalDegreeValue3 = radianToDegree(199);

console.log(finalDegreeValue0);

finalDegreeValue1 = finalDegreeValue1.toFixed(2);
finalDegreeValue1 = parseFloat(finalDegreeValue1);
console.log(finalDegreeValue1);

finalDegreeValue2 = finalDegreeValue2.toFixed(2);
finalDegreeValue2 = parseFloat(finalDegreeValue2);
console.log(finalDegreeValue2);

finalDegreeValue3 = finalDegreeValue3.toFixed(2);
finalDegreeValue3 = parseFloat(finalDegreeValue3);
console.log(finalDegreeValue3);

/* ----------------------------------------end-01-------------------------------------------- */

/* --------------------------------------Start-02-------------------------------------------- */
function isJavaScriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "Please input a valid file extension.";
  } else if (fileName.endsWith(".js") == true) {
    return true;
  } else {
    return false;
  }
}

let output0 = isJavaScriptFile(11);
console.log(output0);

let output1 = isJavaScriptFile("app.js");
console.log(output1);

let output2 = isJavaScriptFile("js.png");
console.log(output2);

let output3 = isJavaScriptFile("image.js.png");
console.log(output3);

let output4 = isJavaScriptFile("image.jpg.js");
console.log(output4);
/* ----------------------------------------end-02-------------------------------------------- */

/* --------------------------------------Start-03-------------------------------------------- */
function oilPrice(dieselQuantity, pettrolQuantity, octaneQuantity) {
  if (
    typeof dieselQuantity !== "number" ||
    typeof pettrolQuantity !== "number" ||
    typeof octaneQuantity !== "number"
  ) {
    return "Please input a valid number.";
  }

  let dieselPrice = 114;
  let totalDieselPrice = dieselQuantity * dieselPrice;

  let pettrolPrice = 130;
  let totalPettrolPrice = pettrolQuantity * pettrolPrice;

  let octanePrice = 135;
  let totalOctanePrice = octaneQuantity * octanePrice;

  let totalPrice = totalDieselPrice + totalPettrolPrice + totalOctanePrice;
  return totalPrice;
}

let totalOilPrice0 = oilPrice("shejan", 1, 1);
console.log(totalOilPrice0);

let totalOilPrice1 = oilPrice(1, 1, 1);
console.log(totalOilPrice1);

let totalOilPrice2 = oilPrice(30, 20, 10);
console.log(totalOilPrice2);

let totalOilPrice3 = oilPrice(1, 0, 2);
console.log(totalOilPrice3);

let totalOilPrice4 = oilPrice(0, 2, 3);
console.log(totalOilPrice4);
/* ----------------------------------------end-03-------------------------------------------- */

/* --------------------------------------Start-04-------------------------------------------- */
function publicBusFare(People) {
  if (typeof People !== "number") {
    return "Please input a valid number.";
  }

  let withoutBusPeople = People % 50;
  let withoutMicrobusPeople = withoutBusPeople % 11;
  let publicBusPeople = withoutMicrobusPeople;

  let publicBusTicketPrice = 250;
  let totalPublicbusTicketPrice = publicBusPeople * publicBusTicketPrice;
  return totalPublicbusTicketPrice;
}

let input0 = "shejan";
let input1 = 50;
let input2 = 55;
let input3 = 112;
let input4 = 235;
let input5 = 365;

let totalPublicBusTicketPrice0 = publicBusFare(input0);
console.log(totalPublicBusTicketPrice0);

let totalPublicBusTicketPrice1 = publicBusFare(input1);
console.log(totalPublicBusTicketPrice1);

let totalPublicBusTicketPrice2 = publicBusFare(input2);
console.log(totalPublicBusTicketPrice2);

let totalPublicBusTicketPrice3 = publicBusFare(input3);
console.log(totalPublicBusTicketPrice3);

let totalPublicBusTicketPrice4 = publicBusFare(input4);
console.log(totalPublicBusTicketPrice4);

let totalPublicBusTicketPrice5 = publicBusFare(input5);
console.log(totalPublicBusTicketPrice5);
/* ----------------------------------------end-04-------------------------------------------- */

/* --------------------------------------Start-05-------------------------------------------- */

// ----------------------------------
const object1 = {
  name: "abul",
  friend: "babul",
};
const object2 = {
  name: "babul",
  friend: "abul",
};

function isBestFriend(object1, object2) {
  if (typeof object1 !== "object" || typeof object2 !== "object") {
    return "Please input a valid object.";
  } else if (object1.name == object2.friend && object1.friend == object2.name) {
    return true;
  } else {
    return false;
  }
}

let invalid1 = isBestFriend("shejan", "shejan");
console.log(invalid1);

let isBestFriend1 = isBestFriend(object1, object2);
console.log(isBestFriend1);

// -----------------------------------

// ---------------------------------------------
const object3 = {
  name: "abul",
  friend: "kabul",
};
const object4 = {
  name: "kabul",
  friend: "sabul",
};

function isBestFriend(object3, object4) {
  if (typeof object3 !== "object" || typeof object4 !== "object") {
    return "Please input a valid object.";
  } else if (object3.name == object4.friend && object3.friend == object4.name) {
    return true;
  } else {
    return false;
  }
}

let invalid2 = isBestFriend("shejan", "shejan");
console.log(invalid2);

let isBestFriend2 = isBestFriend(object3, object4);
console.log(isBestFriend2);

// ----------------------------------------------

// ---------------------------------------------------------
const object5 = {
  name: "abul",
  friend: "kabul",
};
const object6 = {
  name: "kabul",
  friend: "sabul",
};

function isBestFriend(object5, object6) {
  if (typeof object5 !== "object" || typeof object6 !== "object") {
    return "Please input a valid object.";
  } else if (object5.name == object6.friend && object5.friend == object6.name) {
    return true;
  } else {
    return false;
  }
}

let invalid3 = isBestFriend("shejan", "shejan");
console.log(invalid3);

let isBestFriend3 = isBestFriend(object5, object6);
console.log(isBestFriend3);
// ----------------------------------------------------------
/* ----------------------------------------end-05-------------------------------------------- */
