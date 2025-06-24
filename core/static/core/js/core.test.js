import { describe, test, expect, vi, beforeEach } from "vitest";
import animateCount from "./core.js";

describe("animateCount", () => {
  let el;

  beforeEach(() => {
    // Use mock timers
    vi.useFakeTimers();
    el = document.createElement("div");
  });

  test("should count up to the target number", () => {
    // count to 5 every 100ms
    animateCount(el, 5, 100);

    // Fast-forward 500ms (5 * 100ms)
    vi.advanceTimersByTime(500);

    expect(el.textContent).toBe("5");
  });

  test("should stop incrementing after reaching the target", () => {
    animateCount(el, 3, 100);
    vi.advanceTimersByTime(1000);

    expect(el.textContent).toBe("3");
  });
});
