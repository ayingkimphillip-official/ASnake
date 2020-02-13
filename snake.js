class Snake {
    snakeLength = [];
    x = 0;
    y = 0;
    directionX = 0;
    directionY = 0;
    color;
    gameBoard = null;
    snake;
    hasSnakeBeenAdded = false;

    constructor(x, y, snakeWidth, snakeHeight, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.snakeLength[0] = snakeWidth;
        this.snakeLength[1] = snakeHeight;
    }

    constructSnake = () => {
        this.gameBoard = document.querySelector("#gameBoard");
        this.snake = this.gameBoard.getContext("2d");
        this.snake.fillStyle = this.color;
        this.snake.fillRect(this.x, this.y, this.snakeLength[0], this.snakeLength[1]);
        if (this.hasSnakeBeenAdded == true) {
            this.makeSnakeGrow();
            this.hasSnakeBeenAdded = false;
        }
    };

    makeSnakeGrow = () => {
        this.hasSnakeBeenAdded = true;
        this.snake.fillRect(this.x + this.snakeLength[0], this.y, this.snakeLength[0], this.snakeLength[1]);
    };
}