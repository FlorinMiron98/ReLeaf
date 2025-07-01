# Testing
## [Main README.md] file
## Table of Contents
1. [Validator Testing](#validator-testing)
2. Performance, Accessibility and Best Practices Testing
3. Manual Testing
4. Automated Testing
5. Bugs

## Validator Testing
1. [W3C Markup Validator](https://validator.w3.org/)
   - Home Page
     
     ![Home page](https://github.com/user-attachments/assets/e7602e7d-ef2f-4541-ae40-13c03a8f4b2a)

   - About Page

     ![About page](https://github.com/user-attachments/assets/bd791434-2517-434b-b1d7-ed0498fbab53)

   - Blog Page
  
     ![Blog page](https://github.com/user-attachments/assets/b3463668-ede1-4f3d-9639-fc3a816b19e9)

   - Donations Page

     ![Donations page](https://github.com/user-attachments/assets/41e0eb73-91f3-4baf-9a86-e5aa9ce0bd5c)

     **Notes**:
     During HTML validation, errors related to the Stripe payment iframe are reported:
      - Iframe `name` attributes starting with underscores (e.g., `__privateStripeMetricsController8140`) trigger "bad value" errors because W3C forbids underscore-starting browsing context names.
      - Obsolete iframe attributes (`frameborder`, `allowtransparency`, `scrolling`) are flagged, but these are legacy attributes still used by Stripe for compatibility.
      - `src` attributes may contain characters invalid per strict URL fragment syntax rules.
   
   - Register Page

     ![Register page](https://github.com/user-attachments/assets/7f476a54-9faf-4bcb-a346-70d486d0c9e5)

     **Notes**:
     During HTML validation of the registration page, several errors were reported by the W3C Markup Validator. These errors are primarily due to the way Django’s built-in forms render HTML markup for accessibility and functionality purposes:
     1. `action`: An empty `action` attribute means the form submits to the same URL. While this behavior works perfectly in browsers and Django, the W3C validator requires the `action` attribute to be non-empty.
     2. `aria-describedby`: Django adds `aria-describedby` attributes on form inputs to improve accessibility by linking inputs to their corresponding help texts or error messages. However, when the associated descriptive elements (like help text spans) are not rendered—either because help text is missing or because errors haven’t yet occurred—the validator flags this as invalid. These attributes often become meaningful and correctly linked after a user submits invalid data and the form re-renders with validation messages.

   - Login Page

     ![Login page](https://github.com/user-attachments/assets/79d01db4-a748-4c29-b150-868d0b838f14)

     **Notes**:
     When validating the login page HTML using the W3C Markup Validator, the following error is commonly reported. This is related to Django’s default form rendering:
     - An empty `action` attribute means the form submits to the current URL. While this is standard and works correctly across browsers and Django itself, the W3C validator flags it as invalid because the `action` attribute must be non-empty according to the HTML specification.





