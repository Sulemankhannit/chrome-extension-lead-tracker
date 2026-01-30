# Lead Tracker - Chrome Extension

A lightweight browser extension built to track and manage URLs (Leads) efficiently. This tool allows users to manually input URLs or instantly save the current active tab, with all data persisted locally using browser storage.

##  Features

* **Quick Save:** Save any text or URL from the input field.
* **Tab Grabber:** Instantly save the URL of the current active tab using the Chrome API.
* **Data Persistence:** Uses `localStorage` so data remains safe even after closing the browser.
* **Safety Lock:** Requires a double-click to delete all data, preventing accidental loss.
* **Hyperlinks:** Automatically converts saved text into clickable links.

##  Tech Stack

* **JavaScript (ES6):** Core logic, event listeners, and DOM manipulation.
* **Chrome API:** specifically `chrome.tabs.query` and `manifest.json` configuration.
* **HTML/CSS:** User Interface and styling.
* **LocalStorage:** For client-side data persistence.
##  How to Install Locally

Since this is a developer extension, it is not in the Chrome Web Store yet. You can install it manually:

1.  Clone or download this repository.
2.  Open Chrome and go to `chrome://extensions/`.
3.  Toggle **Developer mode** (top right corner) to **ON**.
4.  Click **Load unpacked** (top left).
5.  Select the folder containing these project files.
6.  The extension is now installed! Pin it to your browser bar for easy access.

##  Key Learnings

Building this project helped solidify concepts in:
* Interacting with the DOM (`querySelector`, `innerHTML`).
* Browser APIs (`localStorage`, `chrome.tabs`).
* Event Listeners (`click` vs `dblclick`).
* JSON data handling (`JSON.parse`, `JSON.stringify`).

---
*Created by Suleman Khan - Computer Science Undergraduate, NIT Kurukshetra*
