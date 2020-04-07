const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
  it("Should not accept invalid coins", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.insertCoin(250);
    //Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    });
    expect(machine.balance).to.equal(0); // Use an ES6 getter
  });
  it("Should accept coins sequentially", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.insertCoin(500);
    machine.insertCoin(100);
    //Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 1,
      500: 1,
    });
    expect(machine.balance).to.equal(600); // Use an ES6 getter
  });
  it("Should return the inventory array", () => {
    //Setup
    const machine = new VendingMachine();

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

    const inventory = [
      [juice, coffee, b, c],
      [d, e, f, g],
      [h, i, j, k],
      [l, m, n, o],
    ];

    expect(machine.inventory).to.eql(inventory);
  });
  it("Should accept a row and a column", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.enterRow("a");
    machine.enterColumn(2);
    //Assert
    expect(machine.row).to.equal("a");
    expect(machine.column).to.equal(2);
  });
  it("Should only accept row and column valuees of a-d and 1-4", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.enterRow("e");
    machine.enterColumn(5);
    //Assert
    expect(machine.row).to.equal("invalid row selection");
    expect(machine.column).to.equal("invalid column selection");
  });
  it("Should properly 'dispense' selection(check for valid input, dispense item, remove item from stock give change", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(3);
    machine.confirmsPurchase();
    //Assert
    expect(machine.inventory[0][2].count).equal(6);
    expect(machine.balance).equal(0);
    expect(machine.row).equal("invalid row selection");
    expect(machine.column).equal("invalid column selection");
  });
  it("Should return an error message when there is no inventory", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();
    machine.insertCoin(500);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();
    // console.log(machine.inventory[0][0].count)

    //Assert
    expect(machine.inventory[0][0].count).to.equal(0);
  });
  it("Should return an error message when there is insufficient funds", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise
    machine.insertCoin(100);
    machine.enterRow("a");
    machine.enterColumn(1);
    machine.confirmsPurchase();

    //Assert
    expect(machine.inventory[0][0].count).to.equal(5);
  });
  it("Should return a balance of 0 at the beginning", () => {
    //Setup
    const machine = new VendingMachine();

    //Excercise

    //Assert
    expect(machine.balance).to.equal(0);
  });
});
