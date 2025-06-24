import { describe, test, expect, vi, beforeEach } from "vitest";
import animateCount from "./core.js";

describe("animateCount", () => {
  let el;

  beforeEach(() => {
    // Use mock timers
    vi.useFakeTimers();
    el = document.createElement("div");
  });
});
