# 📦 Dynamic Cargo Tracking Panel (Vanilla JS & DOM Manipulation)

A dynamic, purely JavaScript-driven web application that simulates a real-time cargo branch management panel. This project was built strictly using Vanilla JavaScript to deeply practice and master fundamental to intermediate DOM (Document Object Model) manipulation techniques and Array management.

## 🚀 About The Project

This application dynamically renders a list of pending cargoes, masks customer names for privacy, generates unique 10-digit tracking numbers, and categorizes them based on their delivery status. 

There are no UI buttons or Event Listeners in this build. The entire system is designed to be controlled via the Browser Console to demonstrate how JavaScript arrays and functions directly interact with the DOM hierarchy in real-time.

## 🧠 Core Concepts & DOM Methods Applied

This project heavily focuses on the following JavaScript and DOM concepts:

*   **Variables, Arrays & Parallel Data Management**
*   **String, Math, and Date Objects**
*   **DOM Selectors** (`getElementById`)
*   **DOM Styling** (`element.style`)
*   **Modifying Page Content** (`textContent`)
*   **Attributes Management** (`getAttribute`, `setAttribute`)
*   **CSS Class Manipulation** (`classList.add`, `classList.remove`)
*   **Parent & Child Elements** (`appendChild`)
*   **DOM Traversal** (`firstElementChild`, `nextElementSibling`, `children`)
*   **Creating Elements** (`createElement`)
*   **Removing Elements** (`remove`)
*   **Replacing Elements** (`replaceChild`) - *The core feature for marking damaged cargoes!*

## 🛠️ How to Test / Usage

Since the application is controlled via functions interacting directly with the DOM, you can test its features using your browser's Developer Tools Console.

1. Open `index.html` in your browser.
2. Open the Developer Console (F12 or Right Click -> Inspect -> Console).
3. Find a tracking number on the screen (e.g., `8394028394`).
4. Run the following commands in the console to see the DOM manipulate in real-time:

**To deliver a cargo (Moves element to the Delivered list):**
```javascript
deliverCargo("TRACKING_NUMBER_HERE")
```

**To cancel a cargo (Completely removes element from the DOM):**
```javascript
cancelCargo("TRACKING_NUMBER_HERE")
```

**To report damaged cargo (Replaces the existing element with a new Error Element):**
```javascript
reportDamagedCargo("TRACKING_NUMBER_HERE")
```

## 📂 File Structure
*   `index.html` - The static skeleton containing only the parent containers.
*   `style.css` - Custom CSS classes applied dynamically via JS (`.success`, `.danger`, etc.)
*   `script.js` - The core engine handling data arrays, DOM traversal, and element rendering.

## 🎯 Author
Built to master DOM Manipulation in JavaScript.
