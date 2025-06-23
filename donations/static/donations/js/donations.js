const setDonationAmount = function () {
  const amountRange = document.getElementById("amount-range");
  const amount = document.querySelector(".amount");

  function setAmount() {
    amount.textContent = `£${amountRange.value}`;
  }

  amountRange.addEventListener("input", () => {
    setAmount();
  });

  setAmount();
};

export default setDonationAmount;
