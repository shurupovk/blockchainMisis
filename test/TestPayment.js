const Payment = artifacts.require("./Payment.sol");
const truffleAssert = require('truffle-assertions');

contract('Payment', (accounts) => {

  it("should return the status Pending", async ()=> {
    const instance = await Payment.deployed();
    const status = await instance.getPaymentStatus();
    assert.equal(status, "Pending");
  });

  it("should make a payment", async ()=> {
    const instance = await Payment.deployed();
    await instance.makePayment({from: accounts[0], value: web3.utils.toWei("0.1", "ether")});
    const status = await instance.getPaymentStatus();
    assert.equal(status, "Paid");
  });

  it("should not make a payment if already made", async ()=> {
    const instance = await Payment.deployed();
    try {
      await instance.makePayment({from: accounts[0], value: web3.utils.toWei("0.1", "ether")});
      assert.fail("Expected revert not received");
    } catch (error) {
      assert.include(error.message, "Payment has already been made", "Payment should not be made twice");
    }
  });

  it("should refund a payment", async ()=> {
    const instance = await Payment.deployed();
    await instance.refundPayment({from: accounts[0]});
    const status = await instance.getPaymentStatus();
    assert.equal(status, "Refunded");
  });

  it("should not refund a payment if not made yet", async ()=> {
    const instance = await Payment.deployed();
    try {
      await instance.refundPayment({from: accounts[0]});
      assert.fail("Expected revert not received");
    } catch (error) {
      assert.include(error.message, "Payment has not been made yet", "Payment should not be refunded before being made");
    }
  });
});
