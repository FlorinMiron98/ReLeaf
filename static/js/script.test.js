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

  test("should set padding on the header based on navbar height", () => {
    setDynamicPadding(navbar, contentWrapper, header);
    expect(header.style.paddingTop).toBe("50px");
    expect(header.style.paddingBottom).toBe("50px");
  });
});
