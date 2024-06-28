# Memory Game

This is a memory game developed with HTML, CSS, and JavaScript. The game is responsive and features different levels of difficulty.

## Features

- **Responsive Design:** The game layout adapts to different screen sizes, ensuring a good experience on both mobile and desktop devices.
- **Difficulty Levels:** Three difficulty levels available (Easy, Medium, and Hard).
- **Level Modal:** Intuitive interface for selecting the difficulty level.
- **Score and Timer:** Player information, movements, and time are displayed during the game.

## Technologies Used

- HTML
- CSS
- JavaScript

## Folder Structure

├── index.html # Home page
├── game.html # Game page
├── styles.css # Stylesheet
├── scripts.js # Scripts file
└── assets
├── images # Images used in the game
└── fonts # Fonts used in the game


## How to Run the Project

1. Clone this repository to your local environment:
    ```sh
    git clone https://github.com/your-username/repository-name.git
    ```

2. Navigate to the project directory:
    ```sh
    cd repository-name
    ```

3. Open the `index.html` file in your preferred browser to start the game.

## CSS Details

### Font Import

We use the `Chakra Petch` and `Changa` fonts from Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Changa:wght@200..800&display=swap');

CSS Variables
We define several CSS variables to facilitate style maintenance and customization:

:root {
    --header-text: 'Chakra Petch', sans-serif;
    --content-text: 'Changa', sans-serif;
    --black: #000000;
    --yellow: #FFCB05;
    --darkgray: #565656;
    --gray: #aaa;
    --aliceblue: #f0f8ff;
    --darkblue: #1E3B66;
    --darkred: #64201c;
    --firebrick: #b22222;
    --header-height: 10%;
}

Responsive Layout
We use media queries to adapt the layout to different screen sizes:

@media screen and (max-width: 850px) { ... }
@media screen and (max-width: 768px) { ... }
@media screen and (max-width: 600px) { ... }
@media screen and (max-width: 520px) { ... }
@media screen and (max-width: 400px) { ... }
@media screen and (max-width: 350px) { ... }
@media (max-height: 600px) { ... }


