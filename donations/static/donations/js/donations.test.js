import { describe, test, expect, beforeEach } from "vitest";

describe("Set amount", () => {
  beforeEach(() => {
    // Create DOM elements
    document.body.innerHTML = `
      <input type="range" id="amount-range" min="1" max="100" />
      <span class="amount"></span>
    `;
  });
});
