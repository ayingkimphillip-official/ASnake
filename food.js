class Food {
    gameBoard = null;
    gameBoardWidth = 270;
    gameBoardHeight = 135;
    x = 0;
    y = 0;
    randomX = 0;
    randomY = 0;

    constructor(foodWidth, foodHeight, color) {
        this.x = foodWidth;
        this.y = foodHeight;
        this.randomX = Math.floor((Math.random() * this.gameBoardWidth));
        this.randomY = Math.floor((Math.random() * this.gameBoardHeight));


        this.gameBoard = document.querySelector("#gameBoard");
        let food = this.gameBoard.getContext("2d");
        food.fillStyle = color;
        if (this.randomX != 0 && this.randomY != 0) {
            food.fillRect(this.randomX, this.randomY, this.x, this.y);
        }
        // food.fillRect(270, 135, this.x, this.y);


    }
}


//Diri e butang ang random placement sa food within sa canvas.