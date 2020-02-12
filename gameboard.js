class GameBoard {
    WIDTH = 30;
    HEIGHT = 15;
    gameBoard = null;
    gameBoardWidth = 600; //Must be same in css #gameBoard width
    gameBoardHeight = 600; //Must be same in css #gameBoard height
    interval;
    snake;
    food;
    x = 0;
    y = 0;
    direction = [
        "Up",
        "Down",
        "Left"
    ];
    changeSnakeDirection;

    initialize() {
        this.gameBoard = document.querySelector("#gameBoard");
        this.gameBoard.style.border = "1px solid white";
        let gameBoardCanvas = gameBoard.getContext("2d");
        gameBoardCanvas.fillStyle = "white";
        gameBoardCanvas.fillRect(0, 0, this.gameBoardWidth, this.gameBoardHeight);

        this.snake = new Snake(this.x, this.y, this.WIDTH, this.HEIGHT, "red");
        this.food = new Food(this.WIDTH, this.HEIGHT, "blue");

        this.interval = setInterval(this.updateGameCanvas, 20);

        this.changeSnakeDirection = document.event
    }

    updateGameCanvas = () => {
        this.clearGameCanvas();
        this.snake.constructSnake();
    };

    clearGameCanvas = () => {
        let gameBoardCanvas = this.gameBoard.getContext("2d");
        gameBoardCanvas.fillStyle = "white";
        gameBoardCanvas.fillRect(0, 0, this.gameBoardWidth, this.gameBoardHeight);
    };

    // moveSnake = () => {

    // };
}



//Diri e butang ang controls para ma control ang movement sa snake