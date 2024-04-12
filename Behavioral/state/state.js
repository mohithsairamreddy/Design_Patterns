var Small_Mario = /** @class */ (function () {
    function Small_Mario() {
    }
    Small_Mario.getinstance = function () {
        return Small_Mario.instance;
    };
    Small_Mario.prototype.Got_Mushroom = function (mario) {
        console.log("Got Mushroom!");
        mario.setState(Super_Mario.getinstance());
        mario.GotCoins(100);
    };
    Small_Mario.prototype.Got_Fire_Flower = function (mario) {
        console.log("Got FireFlower!");
        mario.setState(Fire_Mario.getinstance());
        mario.GotCoins(200);
    };
    Small_Mario.prototype.Got_Feather = function (mario) {
        console.log("Got Feather!");
        mario.setState(Cape_Mario.getinstance());
        mario.GotCoins(300);
    };
    Small_Mario.prototype.Met_Monster = function (mario) {
        console.log("Met Monster!");
        mario.setState(Small_Mario.getinstance());
    };
    Small_Mario.instance = new Small_Mario();
    return Small_Mario;
}());
var Super_Mario = /** @class */ (function () {
    function Super_Mario() {
    }
    Super_Mario.getinstance = function () {
        return Super_Mario.instance;
    };
    Super_Mario.prototype.Got_Mushroom = function (mario) {
        console.log("Got Mushroom!");
        mario.GotCoins(100);
    };
    Super_Mario.prototype.Got_Fire_Flower = function (mario) {
        console.log("Got FireFlower!");
        mario.setState(Super_Mario.getinstance());
        mario.GotCoins(200);
    };
    Super_Mario.prototype.Got_Feather = function (mario) {
        console.log("Got Feather!");
        mario.setState(Cape_Mario.getinstance());
        mario.GotCoins(300);
    };
    Super_Mario.prototype.Met_Monster = function (mario) {
        console.log("Met Monster!");
        mario.setState(Small_Mario.getinstance());
    };
    Super_Mario.instance = new Super_Mario();
    return Super_Mario;
}());
var Fire_Mario = /** @class */ (function () {
    function Fire_Mario() {
    }
    Fire_Mario.getinstance = function () {
        return Fire_Mario.instance;
    };
    Fire_Mario.prototype.Got_Mushroom = function (mario) {
        console.log("Got Mushroom!");
        mario.GotCoins(100);
    };
    Fire_Mario.prototype.Got_Fire_Flower = function (mario) {
        console.log("Got FireFlower!");
        mario.GotCoins(200);
    };
    Fire_Mario.prototype.Got_Feather = function (mario) {
        console.log("Got Feather!");
        mario.setState(Cape_Mario.getinstance());
        mario.GotCoins(300);
    };
    Fire_Mario.prototype.Met_Monster = function (mario) {
        console.log("Met Monster!");
        mario.setState(Small_Mario.getinstance());
    };
    Fire_Mario.instance = new Fire_Mario();
    return Fire_Mario;
}());
var Cape_Mario = /** @class */ (function () {
    function Cape_Mario() {
    }
    Cape_Mario.getinstance = function () {
        return Cape_Mario.instance;
    };
    Cape_Mario.prototype.Got_Mushroom = function (mario) {
        console.log("Got Mushroom!");
        mario.GotCoins(100);
    };
    Cape_Mario.prototype.Got_Fire_Flower = function (mario) {
        console.log("Got FireFlower!");
        mario.setState(Fire_Mario.getinstance());
        mario.GotCoins(200);
    };
    Cape_Mario.prototype.Got_Feather = function (mario) {
        console.log("Got Feather!");
        mario.GotCoins(300);
    };
    Cape_Mario.prototype.Met_Monster = function (mario) {
        console.log("Met Monster!");
        mario.setState(Small_Mario.getinstance());
    };
    Cape_Mario.instance = new Cape_Mario();
    return Cape_Mario;
}());
var Mario = /** @class */ (function () {
    function Mario() {
        this.LifeCount = 1;
        this.CoinCount = 0;
        this.state = Small_Mario.getinstance();
    }
    Mario.prototype.setState = function (state) {
        this.state = state;
    };
    Mario.prototype.Got_Mushroom = function () {
        this.state.Got_Mushroom(this);
    };
    Mario.prototype.Got_Fire_Flower = function () {
        this.state.Got_Fire_Flower(this);
    };
    Mario.prototype.Met_Monster = function () {
        this.state.Met_Monster(this);
    };
    Mario.prototype.Got_Feather = function () {
        this.state.Got_Feather(this);
    };
    Mario.prototype.Got_Life = function () {
        console.log("Got Life!");
        this.LifeCount += 1;
    };
    Mario.prototype.Lost_Life = function () {
        console.log("Lost Life!");
        this.LifeCount -= 1;
        if (this.LifeCount < 0) {
            this.Game_Over();
        }
    };
    Mario.prototype.Game_Over = function () {
        this.LifeCount = 0;
        this.CoinCount = 0;
        console.log("Game Over");
    };
    Mario.prototype.GotCoins = function (number_of_coins) {
        console.log("Got ".concat(number_of_coins, " Coin(s)!"));
        this.CoinCount += number_of_coins;
        if (this.CoinCount >= 5000) {
            this.Got_Life();
            this.CoinCount -= 5000;
        }
    };
    Mario.prototype.toString = function () {
        return "State: ".concat(this.state, " | LifeCount: ").concat(this.LifeCount, " | CoinsCount: ").concat(this.CoinCount, " \n");
    };
    return Mario;
}());

const mario = new Mario();
const mushroomButton = document.getElementById('mushroom-button');
const fireFlowerButton = document.getElementById('fire-flower-button');
const featherButton = document.getElementById('feather-button');
const monsterButton = document.getElementById('monster-button');
const lifeCountSpan = document.getElementById('life-count');
const coinsCountSpan = document.getElementById('coins-count');

mushroomButton.addEventListener('click', () => {
  mario.Got_Mushroom();
  updateConsole();
  updateMarioState();
});

fireFlowerButton.addEventListener('click', () => {
  mario.Got_Fire_Flower();
  updateConsole();
  updateMarioState();
});

featherButton.addEventListener('click', () => {
  mario.Got_Feather();
  updateConsole();
  updateMarioState();
});

monsterButton.addEventListener('click', () => {
  mario.Met_Monster();
  updateConsole();
  updateMarioState();
});

function updateMarioState() {
    const marioState = mario.state.constructor.name;
    const marioImage = `images/${marioState.toLowerCase()}.png`;
    document.getElementById("mario-image").src = marioImage;
  }

  function updateConsole() {
    lifeCountSpan.textContent = mario.LifeCount;
    coinsCountSpan.textContent = mario.CoinCount;
}
