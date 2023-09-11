# Tic-Tac-Toe Game

Welcome to the Tic-Tac-Toe Game project! This simple web-based game allows two players to take turns and compete to get three of their symbols (X or O) in a row. This README provides essential information about the project, how to play the game, and details about the code structure.

## Table of Contents
- [Game Overview](#game-overview)
- [How to Play](#how-to-play)
- [Code Structure](#code-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)


## Game Overview

Tic-Tac-Toe is a classic two-player game where the objective is to get three of your symbols in a row (horizontally, vertically, or diagonally) on a 3x3 grid. Players take turns marking a square with their symbol (X or O), and the first player to achieve three in a row wins. The game can also end in a tie if no player wins and the grid is full.

![image](https://github.com/yashsarode45/Tik-Tac-Toe/assets/65209607/069b1dd1-a303-4e97-8ccc-c166e00fb276)


## How to Play

1. **Initial Setup**: Open the `index.html` file in your web browser.

2. **Starting a New Game**: Click the "New Game" button to start a new game.

3. **Taking Turns**: Players take turns clicking on the empty squares to place their symbol (X or O). The current player is displayed at the top of the game board.

4. **Winning**: The game will automatically determine if a player has won by getting three of their symbols in a row. If a player wins, their name will be displayed as the winner.

5. **Tie**: If all squares are filled, and no player has won, the game ends in a tie.

6. **Restarting the Game**: After a game ends (either in a win or a tie), you can click the "New Game" button to start a new game.

## Code Structure

The JavaScript code for this project is organized into functions and follows a modular structure. Here's an overview of the key components:

- `initGame()`: Initializes the game, resets the grid, and sets the starting player.

- `checkGameOver()`: Checks if the game has been won by a player or ended in a tie.

- `swapTurn()`: Switches the current player's turn between X and O.

- `handleClick(index)`: Handles player clicks on the grid, updates the game grid, and checks for a win or tie.

- Event Listeners: Attach event listeners to the game board squares and the "New Game" button to trigger the game logic.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:
```sh
git clone https://github.co
```

2. Navigate to the project directory:
```sh
cd tic-tac-toe
```

3. Open the `index.html` file in your web browser to play the game.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the project on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:
```sh
git checkout -b feature/your-feature-name
```

4. Make your changes and commit them with descriptive commit messages:
```sh
git commit -m "Add new feature" or "Fix bug"
```

5. Push your changes to your GitHub repository:
```sh
git push origin feature/your-feature-name
```

6. Open a pull request on the original repository, explaining your changes and why they should be merged.
