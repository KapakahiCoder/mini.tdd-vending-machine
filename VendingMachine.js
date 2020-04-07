// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
/*
G & C's to do: list
  - Have a cash register of available coins for change, seperate from those inserted by the customer
  - When giving change return the appropriate coinage, not just a rough number
  - Create a display inventory method for showing the customer what is available
  - Consider breaking confirmsPurchase method into smaller methods
  - Clean up purchase flow to allow multiple purchases before returning change
*/

function VendingMachine() {
  const juice = { name: `Apple Juice`, price: 350, count: 5 };
  const coffee = { name: "Tully's", price: 250, count: 7 };
  const b = { name: "b", price: 250, count: 7 };
  const c = { name: "c", price: 250, count: 7 };
  const d = { name: "d", price: 250, count: 7 };
  const e = { name: "e", price: 250, count: 7 };
  const f = { name: "f", price: 250, count: 7 };
  const g = { name: "g", price: 250, count: 7 };
  const h = { name: "h", price: 250, count: 7 };
  const i = { name: "i", price: 250, count: 7 };
  const j = { name: "j", price: 250, count: 7 };
  const k = { name: "k", price: 250, count: 7 };
  const l = { name: "l", price: 250, count: 7 };
  const m = { name: "m", price: 250, count: 7 };
  const n = { name: "n", price: 250, count: 7 };
  const o = { name: "o", price: 250, count: 7 };

  const till = {
    10: 0,
    50: 0,
    100: 0,
    500: 0,
  };
  const inventory = [
    [juice, coffee, b, c],
    [d, e, f, g],
    [h, i, j, k],
    [l, m, n, o],
  ];
  let totMoney = 0;
  let row = "invalid row selection";
  let column = "invalid column selection";

  return {
    till: till,
    insertCoin: function(coin) {
      if (till[coin] !== undefined) {
        till[coin]++;
        totMoney += coin;
      }
    },
    get balance() {
      return totMoney;
    },
    get inventory() {
      return inventory;
    },
    enterRow: function(enteredRow) {
      if (
        enteredRow !== "a" &&
        enteredRow !== "b" &&
        enteredRow !== "c" &&
        enteredRow !== "d"
      ) {
        row = "invalid row selection";
        return "invalid row selection";
      }
      console.log(enteredRow);
      row = enteredRow;
      return row;
    },
    enterColumn: function(enteredColumn) {
      if (
        enteredColumn !== 1 &&
        enteredColumn !== 2 &&
        enteredColumn !== 3 &&
        enteredColumn !== 4
      ) {
        column = "invalid column selection";
        return "invalid column selection";
      }
      console.log(enteredColumn);
      column = enteredColumn;
      return column;
    },
    get row() {
      return row;
    },
    get column() {
      return column;
    },
    confirmsPurchase: () => {
      let rowCipher = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
      };
      let rowNum = rowCipher[row];
      if (inventory[rowNum][column - 1].count === 0) {
        console.log(
          "Sorry loyal customer we are currently out of " +
            inventory[rowNum][column - 1].name
        );
        console.log("Here is your cash back, " + totMoney + " yen.");
      } else if (totMoney - inventory[rowNum][column - 1].price < 0) {
        console.log("Sorry loyal customer we require more funds");
        console.log("Here is your cash back, " + totMoney + " yen.");
        console.log("Please start the purchase process again.");
      } else {
        totMoney -= inventory[rowNum][column - 1].price;
        inventory[rowNum][column - 1].count -= 1;
        console.log("Here is your " + inventory[rowNum][column - 1].name + ".");
        console.log(
          "Thank you for your purchase. Your change is " + totMoney + " yen."
        );
      }
      totMoney = 0;
      row = "invalid row selection";
      column = "invalid column selection";
    },
  };
}

module.exports = VendingMachine;
