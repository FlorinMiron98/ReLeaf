# Testing
## [Main README.md] file
## Table of Contents
1. [Validator Testing](#validator-testing)
2. [Performance, Accessibility and Best Practices Testing](#performance-accessibility-and-best-practices-testing)
3. [Manual Testing](#manual-testing)
4. [Automated Testing](#automated-testing)
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
    
   - Payment Confirmation Page

     ![Payment confirm page](https://github.com/user-attachments/assets/1b449a15-d9f0-418b-8c1f-85b5a93de751)

2. [W3C Styles Validator](https://jigsaw.w3.org/css-validator/)
   The result for all CSS files checking is "Congratulations! No Error Found."

   ![Core](https://github.com/user-attachments/assets/130740f2-5b39-439f-bc4e-47c554f4b21f)


## Performance, Accessibility and Best Practices Testing
Performance, accessibility, and best practices tests were conducted using [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview). Results for each page:
1. Home Page
   - **Performance**: 100
   - **Accessibility**: 95
   - **Best Practices**: 75

   ![Home Page](https://github.com/user-attachments/assets/4a9952f5-8d41-4076-a7fc-9f2e14c4aa35)

2. About Page
   - **Performance**: 99
   - **Accessibility**: 100
   - **Best Practices**: 57

   ![About Page](https://github.com/user-attachments/assets/43753535-6d07-41ef-b799-a9965001a521)

3. Blog Page
   - **Performance**: 95
   - **Accessibility**: 98
   - **Best Practices**: 75

   ![Blog Page](https://github.com/user-attachments/assets/5f89c213-687c-49a3-9ac0-1e43307500d3)

4. Donations Page
   - **Performance**: 96
   - **Accessibility**: 96
   - **Best Practices**: 71

   ![Donations Page](https://github.com/user-attachments/assets/1912941d-965b-4d25-a88e-2bf8a4676165)

5. Register/Login Page
   - **Performance**: 100
   - **Accessibility**: 96
   - **Best Practices**: 75

   ![Register Page](https://github.com/user-attachments/assets/ea1ff6da-7d18-40b0-a89e-a5044dc813b4)

6. Payment Confirmation Page
   - **Performance**: 100
   - **Accessibility**: 95
   - **Best Practices**: 75

**Notes**:
- The website currently lacks HTTPS because enabling SSL/TLS certificates on AWS incurs additional costs, which negatively impacts the Google Lighthouse best practices score.

## Manual Testing
The following tables outlines the results of manual testing conducted based on user stories to ensure the application behaves as expected and meets user requirements.
1. As a potential donor, I want to create an account and log in so that I can securely access my profile and donate to tree-planting projects.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Verify that the register page is accessible | User can navigate to the register page | Passed |
   | Create a new donor account with valid details | Account is successfully created and the user is logged in automatically | Passed |
   | Log in with valid credentials | User is successfully logged in and redirected to home page | Passed |
   | Verify validation for required fields during signup | Appropriate error messages shown for missing fields | Passed |
   | Verify that password meets security requirements | User cannot create account with weak password | Passed |
   | Verify login with invalid credentials | Error message displayed and login denied | Passed |
   | Verify user session remains active after login | User stays logged in while browsing | Passed |
   | Verify logout functionality | User can log out and session is terminated | Passed |
   | Verify that user can access profile only after login | Profile page is restricted to logged-in users | Passed |

2. As a visitor to the website, I want to read about the organization and its mission, so that I can understand who is behind the project and feel confident about donating.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Verify that the About Us page is accessible | Visitor can navigate to the About Us page | Passed |
   | Verify the presence of organization’s mission statement | Mission statement is clearly displayed and readable | Passed |
   | Verify that content on About Us page loads correctly | All text, images, and links load without errors | Passed |
   | Verify navigation to About Us page from homepage | Visitor can easily find and access About Us page | Passed |
   | Verify responsiveness of About Us page on different devices | Content displays properly on desktop, tablet, mobile | Passed |
   | Verify no login is required to access About Us page | Page accessible to all visitors without login | Passed |

3. As a visitor or user, I want to read blog posts about the charity’s work and updates, and as a logged-in user, I want to leave comments on posts, so that I can stay informed and engage with the organization.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Verify that the blog posts page is accessible to visitors | Visitors can navigate to and view the list of blog posts | Passed |
   | Verify that individual blog posts load correctly | Blog posts display full content, images author and post date | Passed |
   | Verify that visitors can read blog posts without logging in | Blog content is accessible without requiring login | Passed |
   | Verify that logged-in users can see a comment input field | Comment box is visible only to logged-in users | Passed |
   | Verify that logged-in users can submit a comment successfully | Submitted comment appears under the blog post | Passed |
   | Verify comment validation (e.g., empty comment, length) | Appropriate error messages shown for invalid comments | Passed |
   | Verify that comments from logged-in users are attributed | Comments display username or profile info correctly | Passed |
   | Verify that comments are saved and displayed after refresh | Comments persist and are visible after page reload | Passed |
   | Verify that non-logged-in visitors cannot submit comments | Comment input is hidden or disabled for visitors | Passed |

4. As a logged-in user, I want to see suggested donation options, but be able to enter a custom amount, so that I can donate whatever feels right to me.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Verify that suggested donation amounts are displayed | Suggested amounts (e.g., $10, $25, $50) are visible | Passed |
   | Verify that user can select a suggested donation amount | Clicking a suggested amount redirects the user to the payment page | Passed |
   | Verify that user can select a custom donation amount | User can manually select any valid donation amount | Passed |
   | Verify that donation can be submitted with suggested amount | Payment page is displayed correctly with a suggested amount | Passed |
   | Verify that donation can be submitted with selected amount | Payment page is displayed correctly with a custom entered amount | Passed |
   | Verify error handling if donation submission fails | Appropriate error message displayed on failed transaction | Passed |

5. As a visitor using any device (phone, tablet, or desktop), I want to view and use the website comfortably, so that I can read content, donate, and navigate easily no matter what screen I'm on.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Verify website layout adapts correctly on desktop devices | Content displays properly and navigation works on desktop | Passed |
   | Verify website layout adapts correctly on tablets | Content displays properly and navigation works on tablets | Passed |
   | Verify website layout adapts correctly on mobile phones | Content displays properly and navigation works on mobiles | Passed |
   | Verify text is readable without zooming on all device types | Text size and contrast are comfortable to read | Passed |
   | Verify buttons and links are easily tappable on touch devices | Buttons and links respond well to taps with no misclicks | Passed |
   | Verify key user flows (reading content, donating, navigating) | Core tasks can be completed comfortably on all devices | Passed |
   | Verify images and media resize appropriately | Images scale correctly without distortion on different screens | Passed |

## Automated Testing
- Automated tests can be found in the commit history.
- Commit messages clearly indicate whether the commit contains tests or features, using prefixes such as:
  - `test: ...` for commits adding or updating tests
  - `feat: ...` for commits adding new features
