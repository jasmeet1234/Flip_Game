# FLIP: Memory Matching Game

Flip is a web-based memory matching game developed using React.js as part of my hands-on learning process in modern frontend frameworks. The project focuses on applying component-driven development, state management with React Hooks, and responsive design principles. Through building Flip, I strengthened my skills in interactive UI design, dynamic data handling, and scalable frontend architecture.

---

## Table of Contents
- Introduction
- Features and Game Modes
- Gameplay Mechanics
- Technical Architecture
- User Statistics and Tracking

---

## Introduction
Flip was designed and built while I was learning React.js, with the goal of practicing core frontend development concepts in a project-driven environment.  
The game challenges players to find and match pairs of hidden cards, offering different levels of difficulty. It emphasizes clean component structure, efficient state handling, and user-centric interactive design.

---

## Features and Game Modes

### Casual Mode
Designed for a quick and relaxed experience, this mode presents a limited set of cards, enabling players to get familiar with the game's mechanics while maintaining a smooth flow of interaction.

### Hard Mode
An advanced difficulty level where the number of cards increases significantly, offering a more complex grid and demanding greater focus on matching patterns within larger datasets.

---

## Gameplay Mechanics
- Players select a game mode (Casual or Hard).
- A randomized grid of facedown cards is generated.
- Clicking two cards reveals them:
  - A match leaves the cards face up.
  - A mismatch causes them to flip back after a short interval.
- The goal is to match all card pairs in the fewest number of moves and minimum time.

Gameplay state is dynamically updated using React Hooks to ensure a responsive, smooth user experience.

---

## Technical Architecture
- **Frontend Framework:** React.js with functional components and React Hooks (useState, useEffect).
- **State Management:** Local state handles card matching logic, timer, and user statistics.
- **UI Design:** Built with HTML5, CSS3, and React's JSX templating, styled for responsiveness across devices.
- **Session Management:** Pause and resume functionality maintains session integrity without page reload.

---

## User Statistics and Tracking
The game tracks and displays important player statistics in real time:

- **Total Cards Flipped**
- **Matched Cards**
- **Games Won**
- **Games Lost**
- **Games Abandoned**

These metrics are updated dynamically as the player progresses through each session.

---

**Thank you for checking out Flip — a practical React.js learning project built with a focus on clean structure, responsive design, and interactive frontend functionality.**

---
