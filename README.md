# FAQ Accordion

A responsive FAQ Accordion created as **Task 10** of my
**Web Development Internship at Veda Technology**.

## 📌 Project Overview

This project is an interactive FAQ section where users can click
questions to expand or collapse their answers.

The project demonstrates DOM events, class manipulation, buttons,
and a simple interactive UI component using HTML5, CSS3, and
JavaScript.

## 🎯 Objective

The objective of this task was to practice:

- DOM events
- `classList.toggle()`
- JavaScript event handling
- DOM manipulation
- Interactive UI components
- Responsive design

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## ✨ Features

- 8 FAQ questions
- Expandable answers
- Collapsible answers
- Multiple answers can remain open
- Clear active state
- Accessible buttons
- Responsive design
- Smooth accordion animation

## ⚙️ How It Works

Each FAQ question is implemented as a button.

When the button is clicked, JavaScript toggles the `active` class
on the FAQ item:

```javascript
item.classList.toggle("active");
