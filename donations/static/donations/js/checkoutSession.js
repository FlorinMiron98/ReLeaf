const donationCardButtons = document.querySelectorAll(".donation-card__button");

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
    const amountStr = e.target.closest("[data-amount]").dataset.amount;
    const amount = +`${amountStr}.00`;
    checkout(amount);
  });
});
