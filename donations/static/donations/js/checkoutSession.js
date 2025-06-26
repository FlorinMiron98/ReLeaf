const donationCardButtons = document.querySelectorAll(".donation-card__button");
const donationAmountForm = document.getElementById("donation-amount-form");
const donationAmountRange = document.getElementById("amount-range");

const donationToast = document.getElementById("donation-toast");
const toast = new bootstrap.Toast(donationToast);
const loginRequiredMessage = document.querySelector(".login-required-message");

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

    if (!response.ok) {
      throw new Error(
        "Something went wrong. Please restart the page and try again."
      );
    }

    const data = await response.json();

    if (!data.userIsAuthenticated) {
      loginRequiredMessage.textContent = "You must be authenticated first.";
      toast.show();

      return;
    }

    const stripePublicKey = Stripe(data.stripePublicKey);

    stripePublicKey.redirectToCheckout({
      sessionId: data.id,
    });
  } catch (error) {
    loginRequiredMessage.textContent = error.message;
    toast.show();
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
