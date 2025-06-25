const donationCardButtons = document.querySelectorAll(".donation-card__button");
const donationAmountForm = document.getElementById("donation-amount-form");
const donationAmountRange = document.getElementById("amount-range");

const checkout = async function (amount) {
  try {
    const response = await fetch("create-checkout-session/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const data = await response.json();

    const stripePublicKey = Stripe(data.stripePublicKey);

    stripePublicKey.redirectToCheckout({
      sessionId: data.id,
    });
  } catch (error) {
    console.log(error);
  }
};

donationCardButtons.forEach((donationButton) => {
  donationButton.addEventListener("click", (e) => {
    const amount = +e.target.closest("[data-amount]").dataset.amount;
    checkout(amount);
  });
});

donationAmountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = +donationAmountRange.value;
  checkout(amount);
});
