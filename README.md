# Tlabting.github.io – Personal Portfolio

This site is built with semantic HTML, custom CSS, and vanilla JavaScript, with no external JS/CSS frameworks. The only external assets are Google Fonts (Marcellus, Marcellus SC).

This repository contains the source code for my personal portfolio site, deployed at:

## Project Structure

```text
Tlabting.github.io/
├── index.html        # Main single-page layout
├── css/              # Stylesheets (global, sections, labels, buttons, etc.)
├── js/               # JavaScript (form validation, scroll-to-top, carousel logic)
├── img/              # Images (profile photo, header graphic, favicon, icons)
├── NOTES.md          # Notes taken during development
└── README.md         # This file
```

## How to Run The Project

This is a static website built with HTML, CSS, and vanilla JavaScript. There is **no build step** and **no external libraries or frameworks** required.

You can run it in a few different ways:

---

### Option 1: View the deployed site

The site is hosted on GitHub Pages:

- **Live URL:** https://tlabting.github.io

Open that link in your browser—no setup needed.

---

### Option 2: Run locally

1. Clone or download this repository:

   ```bash
   git clone https://github.com/Tlabting/Tlabting.github.io.git
   cd Tlabting.github.io

   ```

2. Run with a simple local server:

   ```bash
   cd Tlabting.github.io
   python -m http.server 8000

   Then open in your browser:

   http://localhost:8000
   ```

## References Used

- [CSS Rounded Images – W3Schools](https://www.w3schools.com/howto/howto_css_rounded_images.asp)  
  Used to create circular / rounded profile images with CSS.

- [Circular Images in CSS – WebFX](https://www.webfx.com/blog/web-design/circular-images-css/)  
  Additional reference for circular image techniques and best practices.

- [Avision Portfolio Site](https://avision.vawl.dev/)  
  Visual inspiration for hover effects on navigation labels and buttons.

- [CSS `scroll-behavior` – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior)  
  Initially considered for replicating scroll-based button behavior, then discarded as not appropriate.

- [CSS3 Transitions – W3Schools](https://www.w3schools.com/css/css3_transitions.asp)  
  Used to refresh syntax for `transition` properties for hover effects and label/button animations.

- [HTML Favicon – W3Schools](https://www.w3schools.com/html/html_favicon.asp)  
  Used to move the logo into the browser tab icon.

- [Using CSS Transitions – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using)  
  Guide for more advanced transition behavior and smooth state changes across breakpoints.

- [Sending Forms Through JavaScript – MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)  
  Initially consulted when deciding how to handle form submission, later replaced with a simpler modal-only approach.

- [`required` Attribute – W3Schools](https://www.w3schools.com/tags/att_input_required.asp)  
  Reference for HTML `required` attribute on form inputs.

- [Change Parent on Child Focus – StackOverflow](https://stackoverflow.com/questions/24287192/css-change-parent-on-focus-of-child)  
  Helped inform the approach to moving/floating labels when the input receives focus.

- [`:has()` Selector – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has)  
  Used for the floating-label effect based on the state/value of the child input.

- [Remove Focus Outline Around Inputs – StackOverflow](https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome)  
  Used to remove default focus outlines and then restyle focus states.

- [Rounded Buttons – W3Schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_round)  
  Reference for achieving pill-shaped buttons via border radius.

- [CSS `cursor` Property Example – W3Schools](https://www.w3schools.com/cssref/tryit.php?filename=trycss_cursor)  
  Starting point for implementing a custom cursor.

- [Custom Cursor in CSS – LogRocket Blog](https://blog.logrocket.com/custom-cursor-css/)  
  Deeper explanation and patterns for robust custom cursor behavior.

- [`:modal` Selector – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:modal)  
  Used when styling the `<dialog>` element used for the “form submitted” modal.

- [Client-side Form Validation – MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)  
  Main reference for custom validation messages and overall validation strategy.

- [`<input type="email">` – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email)  
  Used to leverage built-in email validation.

- [`<input type="tel">` – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel)  
  Used together with `pattern` to validate phone number format.

- [3D Card Carousel Tutorial – Lun Dev Code (YouTube)](https://www.youtube.com/watch?v=yqaLSlPOUxM)  
  Tutorial followed for implementing and adapting the 3D rotating project carousel.

- [`top` Property – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/top)  
  Used when adjusting card / element positioning and clarifying the difference between `top` and `margin-top`.

- [`animation-play-state` – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-play-state)  
  Used to pause the 3D project slider animation on hover.

- [Button as Link Without `<a>` Wrapper – StackOverflow](https://stackoverflow.com/questions/5025941/is-there-a-way-to-get-a-button-element-to-link-to-a-location-without-wrapping)  
  Helped implement buttons that open project GitHub links.

- [`window.open()` – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)  
  Used to open project GitHub links in a new tab/window from a button click.

- [JavaScript Tabs – W3Schools](https://www.w3schools.com/howto/howto_js_tabs.asp)  
  Reference for implementing toggleable tabs for previous work history.

- [Scroll-to-Top Button – W3Schools](http://www.w3schools.com/howto/howto_js_scroll_to_top.asp)  
  Base pattern for the “back to top” button that appears after scrolling.

- [`@keyframes` At-rule – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@keyframes)  
  Used to create the bounce animation on the scroll-to-top button and other custom animations.
