class Snake {
    snakeLength = [];
    x = 0;
    y = 0;
    directionX = 0;
    directionY = 0;
    color;
    gameBoard = null;

    constructor(x, y, snakeWidth, snakeHeight, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.snakeLength[0] = snakeWidth;
        this.snakeLength[1] = snakeHeight;
        
    }

    constructSnake = () => {
        this.gameBoard = document.querySelector("#gameBoard");
        let snake = this.gameBoard.getContext("2d");
        snake.fillStyle = this.color;
        snake.fillRect(this.x, this.y, this.snakeLength[0], this.snakeLength[1]);
    };
}


//Diri e butang ang pag move sa snake sa iyang current direction.
//Example kung nag atubang ang snake to the right, kai mu padayon ra siya ug abante pa right.