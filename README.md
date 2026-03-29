# Portfolio Website

This is a static personal portfolio website for Ace King, now refactored for maintainability with separated concerns and modular JavaScript.

## Structure

- `index.html` — Page markup.
- `css/styles.css` — All styling rules.
- `js/app.js` — Behavior implemented in OOP classes:
  - `ScrollRevealManager`
  - `MobileMenu`
  - `ActiveSectionHighlighter`
  - `ContactFormHandler`
  - `PortfolioApp`

## Local development

1. Open `index.html` in your browser, or use a live server extension.
2. Commit all files to GitHub.

## Features

- responsive navigation menu
- scroll-based reveal animations
- active section highlighting
- form feedback state

## Notes

- Update content in the HTML and keep CSS/JS in their files.
- Classes in `app.js` make it easy to extend functionality with minimal side effects.
