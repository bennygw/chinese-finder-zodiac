# 🧧 Chinese Zodiac Finder

A responsive web application that identifies the Chinese Zodiac animal based on the user's birth year. This project demonstrates basic DOM manipulation, CSS styling, and JavaScript logic.

## 🚀 Live Demo
Check out the live application here: https://bennygw.github.io/chinese-finder-zodiac/

## 🛠️ Built With
- **HTML5**: Semantic structure for the web.
- **CSS3**: Custom styling with a modern and clean UI.
- **Vanilla JavaScript**: Pure logic for zodiac calculation and dynamic UI updates.

## 📖 How it Works
The application uses the mathematical modulo operator (`%`) on the 12-year cycle of the Chinese Zodiac. 
1. The user inputs a year.
2. The logic calculates `year % 12`.
3. The result is matched with an array of zodiac animals and displayed instantly on the screen.

## 📂 Project Structure
```text
├── index.html   # Main structure
├── style.css    # UI styling
└── script.js    # Logic & DOM manipulation
