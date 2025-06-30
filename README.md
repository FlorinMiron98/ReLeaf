# ReLeaf
## Table of Contents
1. [UX](#ux)
   - [Project Goals](#project-goals)
   - [User Stories](#user-stories)
2. [Features](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md)
   - [Navigation Bar](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#navigation-bar)
   - [Home Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#home-page)
   - [About Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#about-page)
     - [Statistics](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#statistics)
     - [Mission and Vision Section](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#mission-and-vision-section)
     - [History Section](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#history-section)
   - [Blog Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#blog-page)
   - [Single Blog Post Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#single-blog-post-page)
     - [Blog Post Details](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#blog-post-details)
     - [Comments Section](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#comments-section)
   - [Donations Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#donations-page)
     - [Donation Cards](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#donation-cards)
     - [Donation Amount Selector](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#donation-amount-selector)
   - [Login/Register Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#loginregister-page)
   - [Stripe Payment](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#stripe-payment)
   - [Payment Confirmation Page](https://github.com/FlorinMiron98/ReLeaf/blob/main/features.md#payment-confirmation-page)
4. [Technologies Used](#technologies-used)
5. Data Schema
6. Testing
   - Validator Testing
   - Performance, Accessibility and Best Practices Testing
   - Manual Testing
   - Automated Testing
   - Bugs
7. Deployment
8. [Credits](#credits)
   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
## Ux
### Project Goals
1. Allow users to easily and securely donate money to support tree-planting efforts.
2. Clearly communicate the organization’s mission, impact, and values to gain user confidence.
3. Enable user accounts and interactions to encourage engagement and a sense of belonging.
4. Design a responsive and user-friendly website that works well on all devices.
5. Give admins tools to create and manage blog content without editing code.
6. Require users to log in before donating to ensure secure and trackable contributions.
### User Stories
1. As a potential donor, I want to create an account and log in so that I can securely access my profile and donate to tree-planting projects.
2. As a visitor to the website, I want to read about the organization and its mission, so that I can understand who is behind the project and feel confident about donating.
3. As a visitor or user, I want to read blog posts about the charity’s work and updates, and as a logged-in user, I want to leave comments on posts, so that I can stay informed and engage with the organization.
4. As a logged-in user, I want to see suggested donation options, but be able to enter a custom amount, so that I can donate whatever feels right to me.
5. As a visitor using any device (phone, tablet, or desktop), I want to view and use the website comfortably, so that I can read content, donate, and navigate easily no matter what screen I'm on.
## Technologies used
1. **HTML5** - The foundational markup language for structuring web content.
2. **CSS3** - Used for styling and layout, enhancing the visual appearance of the project.
3. **Bootstrap5** - Used for creating responsiveness across all screen sizes, pre-designed components and utility classes. More about Bootstrap on the [official Bootstrap website](https://getbootstrap.com/)
4. **JavaScript** - It is used to handle user interactions, manipulate the DOM, and manage application logic.
5. **Django** - A high-level Python web framework that promotes rapid development and clean, pragmatic design. It handles the backend, including URL routing, data modeling, and server-side logic. More about Django on the [official website](https://www.djangoproject.com/)
6. **Vitest** - A fast and lightweight testing framework built for modern JavaScript projects. It is used to implement test-driven development (TDD). More about Vitest on the [official website](https://vitest.dev/)
## Credits
### Content
- [ChatGPT](https://chatgpt.com/) - Used to create content for:
  - `<meta>` keywords attribute
  - `<meta>` description content
  - Home page heading and lead paragraph
  - About page heading, lead paragraph and content of other sections
  - Blog posts content
  - Donations page heading, lead paragraph and donation cards content
### Media
1. favicon: [Image source](https://icons8.com/icons/set/leaf)
2. tree-hugging.jpg: [Image source](https://unsplash.com/photos/a-person-hugging-a-tree-in-a-forest-yIsjn-IGWqc) - Photo by [Trent Haaland](https://unsplash.com/@trenthaaland)
3. planting-your-seedling.jpg: [Image source](https://pixabay.com/photos/plant-planting-life-nature-natural-7702566/) - Photo by [F1Digitals](https://pixabay.com/users/f1digitals-1568321/)
4. many-hands-one-tree.jpg: [Image source](https://unsplash.com/photos/a-group-of-people-holding-hands-on-top-of-a-tree-DNkoNXQti3c) - Photo by [Shane Rounce](https://unsplash.com/@shanerounce)
5. forest-edge.jpg: [Image source](https://www.pexels.com/photo/lush-springtime-landscape-with-dense-trees-32602818/) - Photo by [Наталья Севрук](https://www.pexels.com/@636238602/)
6. woman-walking-under-tree.jpg: [Image source](https://unsplash.com/photos/woman-walking-under-tree-during-daytime-Z5qD8T3wVvk) - Photo by [Kevin Young](https://unsplash.com/@kevinjyoung)
7. amazon-planting.jpg: [Image source](https://unsplash.com/photos/people-in-yellow-jacket-and-black-backpack-FyCjvyPG9Pg) - Photo by [Eyoel Kahssay](https://unsplash.com/@eyoelkahssay)
8. volunteer.jpg: [Image source](https://unsplash.com/photos/man-in-white-shirt-planting-at-daytime-1JgUGDdcWnM) - Photo by [Jed Owen](https://unsplash.com/@jediahowen)
9. amazon-jungle.jpg: [Image source](https://pixabay.com/photos/body-of-water-nature-tree-river-3228741/) - Photo by [estevesbae](https://pixabay.com/users/estevesbae-8123618/)
10. trees-landscape.jpg: [Image source](https://pixabay.com/photos/meadow-landscape-fruit-trees-7196549/) - Photo by [analogicus](https://pixabay.com/users/analogicus-8164369/)
11. tree-illustration.png: [Image source](https://www.freepik.com/free-vector/autumn-tree-concept-illustration_90470531.htm#fromView=keyword&page=1&position=7&uuid=06aedf97-6c80-481b-9f07-2202c2fac22b&query=Tree+Illustration)
12. forest-trees.jpg: [Image source](https://unsplash.com/photos/forest-trees-jFCViYFYcus) - Photo by [Lukasz Szmigiel](https://unsplash.com/@szmigieldesign)
13. two-brown-trees.jpg: [Image source](https://www.pexels.com/photo/two-brown-trees-1632790/) - Photo by [Johannes Plenio](https://www.pexels.com/@jplenio/)
### Code
1. Code for all website's icons was created using [Font Awesome](https://fontawesome.com/).
2. Code for importing Google Fonts inside the `static/assets/styles.css` file was created using [Google Fonts](https://fonts.google.com/).
3. Code for template inheritance was created using the built-in Django's `{% extends %}` and `{% include %}` tags.
