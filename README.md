# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/api-shortening-react-app-08FWJZerSM)
- [Live Site URL](https://statuesque-basbousa-9cebdf.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- [CRA](https://create-react-app.dev/)
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

### What I learned

In this project I've focused mainly on learning to use Tailwind CSS and Testing Library. I've also tried to break down the design in different components, aiming to:

- create reusable components to keep the code DRY (like the Round Link Button that repeats across the site and the footer lists)
- mantain separation of concerns between the logic and the redered items (example the Form section).

To highlight the use of two custom hooks:

- One to track changes in the viewport width and be able to render the nav bar according to the mobile or desktop design
- One to track hover state over the social media icons and apply conditional styling based on that.

### Useful resources

- [Ustariz Enzo post](https://dev.to/ziratsu/code-a-responsive-navbar-with-react-45le) on how to create a responsive navbar with React
- [Tanya Singh's post](https://medium.com/nerd-for-tech/how-to-add-copy-to-clipboard-functionality-in-a-reactjs-app-45404413fdb2) on how to copy data to the clipboard
- [The Net Ninja React testing Library Tutorial](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=1) - Awesome video crash course on using React Testing Library

## Author

- Frontend Mentor - [@cr1deg0](https://www.frontendmentor.io/profile/cr1deg0)
