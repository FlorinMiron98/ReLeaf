const setDonationAmount = function () {
  const amountRange = document.getElementById("amount-range");
  const amount = document.querySelector(".amount");

  function setAmount() {
    amount.textContent = `£${amountRange.value}`;
  }

  setAmount();
};

export default setDonationAmount;
