class Food {
    gameBoard = null;
    x = 0;
    y = 0;
    randomX = 0;
    randomY = 0;
    randomPosition = [0, 0];
    currentPosition = [];
    color;
    food;

    constructor(foodWidth, foodHeight, gameBoardWidth, gameBoardHeight, color) {
        this.x = foodWidth;
        this.y = foodHeight;
        this.randomX = Math.floor((Math.random() * gameBoardWidth));
        this.randomY = Math.floor((Math.random() * gameBoardHeight));
        this.currentPosition[0] = this.randomX;
        this.currentPosition[1] = this.randomY;
        this.color = color;

        this.gameBoard = document.querySelector("#gameBoard");
        this.food = this.gameBoard.getContext("2d");
    }

    constructFood = () => {
        this.food.fillStyle = this.color;
        if (this.randomX != 0 && this.randomY != 0) {
            this.food.fillRect(this.randomX, this.randomY, this.x, this.y);
        }
        // food.fillRect(270, 135, this.x, this.y);
    };

    removeFood = () => {
        this.food.fillStyle = "white";
        this.food.fillRect(this.currentPosition[0], this.currentPosition[1], this.x, this.y);
    };
}