class GameBoard {
    //Dimensions
    dimensionOfSnakeAndFood = [30, 15];
    gameBoard = null;
    gameBoardDimension = [600, 600];
    gameBoardDimensionMax = [270, 135];

    //Snake Properties
    interval;
    snake;
    food;
    snakePosition = [0, 0];
    snakeDirection = [0, 0];
    changeSnakeDirection;

    //Conditions
    isDirectionX = false;
    isDirectionY = false;
    wasFoodEaten = false;

    initialize() {
        this.gameBoard = document.querySelector("#gameBoard");
        this.gameBoard.style.border = "1px solid white";
        let gameBoardCanvas = gameBoard.getContext("2d");
        gameBoardCanvas.fillStyle = "white";
        gameBoardCanvas.fillRect(0, 0, this.gameBoardDimension[0], this.gameBoardDimension[1]);

        this.snake = new Snake(this.snakePosition[0], this.snakePosition[1], this.dimensionOfSnakeAndFood[0], this.dimensionOfSnakeAndFood[1], "red");
        this.food = new Food(this.dimensionOfSnakeAndFood[0], this.dimensionOfSnakeAndFood[1], this.gameBoardDimensionMax[0], this.gameBoardDimensionMax[1], "blue");

        document.addEventListener("keydown", this.changeSnakeDirection);
        this.interval = setInterval(this.updateGameCanvas, 20);
    }

    updateGameCanvas = () => {
        this.clearGameCanvas();
        this.getSnakeCurrentPosition();
        this.snake.constructSnake();
        if (this.wasFoodEaten == false) {
            this.food.constructFood();
        }
    };

    clearGameCanvas = () => {
        let gameBoardCanvas = this.gameBoard.getContext("2d");
        gameBoardCanvas.fillStyle = "white";
        gameBoardCanvas.fillRect(0, 0, this.gameBoardDimension[0], this.gameBoardDimension[1]);
    };

    getSnakeCurrentPosition = () => {
        if (this.snake.x >= 0 || this.snake.x < this.gameBoardDimensionMax[0]) {
            this.snake.x += this.snakeDirection[0];
        }
        if (this.snake.x > this.gameBoardDimensionMax[0]) {
            clearInterval(this.interval);
            alert("Game Over");
        }
        if (this.snake.x < 0) {
            clearInterval(this.interval);
            alert("Game Over");
        }

        if (this.snake.y >= 0 || this.snake.y < this.gameBoardDimensionMax[1]) {
            this.snake.y += this.snakeDirection[1];
        }
        if (this.snake.y > this.gameBoardDimensionMax[1]) {
            clearInterval(this.interval);
            alert("Game Over");
        }
        if (this.snake.y < 0) {
            clearInterval(this.interval);
            alert("Game Over");
        }
        this.eatFood();
    };

    eatFood = () => {
        for (let i = 1; i <= Math.floor(this.dimensionOfSnakeAndFood[0] / 2); i++) {
            for (let j = 1; j <= Math.floor(this.dimensionOfSnakeAndFood[1] / 2); j++) {
                if (this.snake.x == (this.food.randomX - i) && this.snake.y == (this.food.randomY - j)) {
                    this.wasFoodEaten = true;
                    this.food.removeFood();
                    this.createNewFood();
                    this.makeSnakeGrow();
                }
                else if (this.snake.x == (this.food.randomX + i) && this.snake.y == (this.food.randomY + j)) {
                    this.wasFoodEaten = true;
                    this.food.removeFood();
                    this.createNewFood();
                    this.makeSnakeGrow();
                }
                else if (this.snake.x == (this.food.randomX - i) && this.snake.y == (this.food.randomY + j)) {
                    this.wasFoodEaten = true;
                    this.food.removeFood();
                    this.createNewFood();
                    this.makeSnakeGrow();
                }
                else if (this.snake.x == (this.food.randomX + i) && this.snake.y == (this.food.randomY - j)) {
                    this.wasFoodEaten = true;
                    this.food.removeFood();
                    this.createNewFood();
                    this.makeSnakeGrow();
                }
            }
        }
    };

    createNewFood = () => {
        this.food.randomX = Math.floor((Math.random() * this.gameBoardDimensionMax[0]));
        this.food.randomY = Math.floor((Math.random() * this.gameBoardDimensionMax[1]));
        this.wasFoodEaten = false;
        this.food.constructFood();
    };

    makeSnakeGrow = () => {
        if (this.snakeDirection[0] == +1) {
            this.snake.makeSnakeGrow();
        }
        else if (this.snakeDirection[0] == -1) {
            this.snake.makeSnakeGrow();
        }
        else if (this.snakeDirection[1] == +1) {
            this.snake.makeSnakeGrow();
        }
        else if (this.snakeDirection[1] == -1) {
            this.snake.makeSnakeGrow();
        }
    };

    changeSnakeDirection = (e) => {
        switch (e.keyCode) {
            case 38: //Up
                if (this.isDirectionY == false) {
                    this.snakeDirection[1] -= 1;
                    this.snakeDirection[0] = 0;
                    this.isDirectionY = true;
                    this.isDirectionX = false;
                }
                break;
            case 40: //Down
                if (this.isDirectionY == false) {
                    this.snakeDirection[1] += 1;
                    this.snakeDirection[0] = 0;
                    this.isDirectionY = true;
                    this.isDirectionX = false;
                }
                break;
            case 37: //Left
                if (this.isDirectionX == false) {
                    this.snakeDirection[0] -= 1;
                    this.snakeDirection[1] = 0;
                    this.isDirectionX = true;
                    this.isDirectionY = false;
                }
                break;
            case 39: //Right
                if (this.isDirectionX == false) {
                    this.snakeDirection[0] += 1;
                    this.snakeDirection[1] = 0;
                    this.isDirectionX = true;
                    this.isDirectionY = false;
                }
                break;
        }
    };
}



//Diri e butang ang controls para ma control ang movement sa snake