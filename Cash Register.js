/*
JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
  var change = {};


  let cidTotal = 0, changeTotal = cash - price;
  cid.map(item => {
    cidTotal += item[1]
  })
  console.log(changeTotal, cidTotal)
  if (changeTotal == cidTotal) {
    change["status"] = "CLOSED";
    //change["change"] = convert(getChange(changeTotal, cid));
    change["change"] = cid;
  }
  else if (changeTotal > cidTotal) {
    change["status"] = "INSUFFICIENT_FUNDS";
    change["change"] = [];
  }
  else if (changeTotal < cidTotal) {
    let currentChange = getChange(changeTotal, cid);
    if (currentChange.indexOf("no") == -1) {
    change["status"] = "OPEN";
      change["change"] = convert(currentChange);
    }
    else {
      change["status"] = "INSUFFICIENT_FUNDS";
      change["change"] = [];
    }
  }

  // Here is your change, ma'am.
  return change;
}

var currencyObj = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01
}

let convert = (val) => {
  let changeArray = [],
    returnChange = [],
    changeObj = {};
  let locVal = val;
  if (locVal.lastIndexOf(",") === locVal.length - 1)
    locVal = locVal.substring(0, locVal.length - 1);
  changeArray = locVal.split(",");
  changeArray.map(item => {

    if (changeObj.hasOwnProperty(item)) {

      changeObj[item] = getSum(changeObj[item], currencyObj[item]);

      console.log(changeObj[item])
    }
    else {
      changeObj[item] = currencyObj[item];
    }

  })
  let keys = Object.keys(changeObj)

  keys.forEach(key => {
    returnChange.push([key, changeObj[key]]);
  })

  return returnChange;
}

let getDiff = (a, b) => ((a * 1000) - (b * 1000)) / 1000;
let getSum = (a, b) => ((a * 1000) + (b * 1000)) / 1000;

let getChange = (val, cid) => {
  if (val >= 20 && cid[7][1] >= 20) {
    cid[7][1] = getDiff(cid[7][1], 20);
    return cid[7][0] + "," + getChange(getDiff(val, 20), cid);
  }
  else if (val >= 10 && cid[6][1] >= 10) {
    cid[6][1] = getDiff(cid[6][1], 10);

    return cid[6][0] + "," + getChange(getDiff(val, 10), cid);
  }
  else if (val >= 5 && cid[5][1] >= 5) {
    cid[5][1] = getDiff(cid[5][1], 5);
    return cid[5][0] + "," + getChange(getDiff(val, 5), cid);
  }
  else if (val >= 1 && cid[4][1] >= 1) {
    cid[4][1] = (cid[4][1] - 1).toFixed(3);
    return cid[4][0] + "," + getChange(getDiff(val, 1), cid);
  }
  else if (val >= 0.25 && cid[3][1] >= 0.25) {
    cid[3][1] = getDiff(cid[3][1], 0.25);
    return cid[3][0] + "," + getChange(getDiff(val, 0.25), cid);
  }
  else if (val >= .1 && cid[2][1] >= .1) {
    cid[2][1] = getDiff(cid[2][1], 0.1);
    return cid[2][0] + "," + getChange(getDiff(val, .1), cid);
  }
  else if (val >= .05 && cid[1][1] >= .05) {
    cid[1][1] = getDiff(cid[1][1], 0.05);
    return cid[1][0] + "," + getChange(getDiff(val, .05), cid);
  }
  else if (val >= .01 && cid[0][1] >= .01) {
    cid[0][1] = getDiff(cid[0][1], 0.01);
    return cid[0][0] + "," + getChange(getDiff(val, .01), cid)
  }
  else if (val == 0) {
    return ""
  }
  else {
    console.log(val)
    return "no"
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);
