pragma solidity >=0.4.25 <0.9.0;

contract Payment {
    enum PaymentStatus { Pending, Paid, Refunded }

    PaymentStatus private status;

    event LogNewPayment(string description);

    constructor() public {
        status = PaymentStatus.Pending;
    }

    // Function to make payment
    function makePayment() public payable {
        require(status == PaymentStatus.Pending, "Payment has already been made");
        status = PaymentStatus.Paid;
        emit LogNewPayment("Payment has been made");
    }

    // Function to refund payment
    function refundPayment() public {
        require(status == PaymentStatus.Paid, "Payment has not been made yet");
        status = PaymentStatus.Refunded;
        payable(msg.sender).transfer(address(this).balance);
        emit LogNewPayment("Payment has been refunded");
    }

    function getStatus(PaymentStatus _status) internal pure returns (string memory) {
     if (PaymentStatus.Pending == _status) return "Pending";
     if (PaymentStatus.Paid == _status) return "Paid";
     if (PaymentStatus.Refunded == _status) return "Refunded";
    }

    function getPaymentStatus() public view returns (string memory) {
         PaymentStatus _status = status;
         return getStatus(_status);
    }
}