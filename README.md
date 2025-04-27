# FLIP: Memory Matching Game

Flip is a web-based memory matching game developed using React.js during my learning journey with modern frontend frameworks. The project focuses on applying component-driven development, dynamic state management, and responsive design principles. Flip offers an engaging way to test matching skills while demonstrating technical proficiency in building scalable, interactive interfaces.

A live version of the project is available here: [Flip - Memory Matching Game](https://jasmeetflip.netlify.app/)

---

## Table of Contents
- Introduction
- Features and Game Modes
- Gameplay Mechanics
- Technical Architecture
- User Statistics and Tracking
- Snapshots
- Compatibility
---

## Introduction
Flip was built to practice the concepts of React.js including state management using Hooks, component-based design, and building dynamic, responsive web applications. The project demonstrates frontend problem-solving skills, user experience considerations, and adaptive layout handling for cross-device compatibility.

---

## Features and Game Modes

### Casual Mode
A simple and relaxed game mode with a limited number of cards, intended for players to get familiar with the mechanics and flow of the game.

### Hard Mode
An advanced mode featuring a significantly larger grid of cards, designed to offer a higher challenge through greater complexity and larger memory load.

---

## Gameplay Mechanics
- Players choose between Casual and Hard mode.
- Cards are displayed face down and randomized for each new session.
- Clicking two cards reveals them:
  - Matched cards remain face-up.
  - Mismatched cards are flipped back after a brief delay.
- Players aim to match all pairs with the fewest moves and shortest time possible.

The game dynamically updates the internal state and game statistics after every interaction, ensuring smooth and consistent gameplay.

---

## Technical Architecture
- **Frontend Framework:** React.js with functional components and Hooks (useState, useEffect).
- **State Management:** Local state-driven management of game grid, matched pairs, timers, and user statistics.
- **Responsive Design:** Built with dynamic CSS Flexbox and Grid Layouts for seamless mobile and desktop compatibility.
- **Session Handling:** Pause and Resume functionality preserves in-progress games by freezing and restoring session states.

---

## User Statistics and Tracking
The game tracks key performance indicators during gameplay:
- **Total Cards Flipped**
- **Matched Pairs**
- **Games Won**
- **Games Lost**
- **Games Abandoned**

These figures provide players with feedback on their performance, visible in the in-game dashboard.

---

## Snapshots


---

## Compatibility
Flip is fully responsive and mobile-compatible. The dynamic layout adapts fluidly across a variety of device sizes, ensuring a smooth and accessible user experience on smartphones, tablets, and desktops.

**Explore the live demo here:** [Flip - Memory Matching Game](https://jasmeetflip.netlify.app/)  
Happy matching! 🎮✨

---
