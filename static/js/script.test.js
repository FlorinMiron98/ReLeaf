import { describe, test, expect, vi, beforeEach } from "vitest";
import setDynamicPadding from "./dynamicPadding.js";

describe("setDynamicPadding", () => {
  let navbar, contentWrapper, header;

  beforeEach(() => {
    navbar = document.createElement("div");
    contentWrapper = document.createElement("div");
    header = document.createElement("header");

    document.body.append(navbar, contentWrapper, header);

    // Mock getBoundingClientRect to return a fake height
    navbar.getBoundingClientRect = vi.fn(() => ({
      height: 50,
    }));
  });
});
