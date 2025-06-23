import { describe, test, expect, beforeEach } from "vitest";
import setDonationAmount from "./donations.js";

describe("Set amount", () => {
  beforeEach(() => {
    // Create DOM elements
    document.body.innerHTML = `
      <input type="range" id="amount-range" min="1" max="100" />
      <span class="amount"></span>
    `;
  });

  test("should update amount text on initialization", () => {
    const amount = document.querySelector(".amount");
    setDonationAmount();
    expect(amount.textContent).toBe("£50");
  });
});
