// Question 1: Use the array of shop items provided and present the the information in the following format

```
=======================================
Name: 	 Air Max 97
Price: 	 130
About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
Category: shoes
=======================================
Name: 	 Adidas NMD R1
Price: 	 128
About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
Category: shoes
=======================================
Name: 	 Gucci Oversize T-shirt with Interlocking G
Price: 	 580
About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
Category: shirts
=======================================
Name: 	 Nike Sportswear Club
Price: 	 18.97
About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
Category: shirts
=======================================
Name: 	 Spanx Flare Jeans, Vintage Indigo
Price: 	 148
About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
Category: pants
=======================================
Name: 	 Bonobos Premium Stretch Jeans
Price: 	 69
About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
Category: pants
```

function formatShopItem(shopItem) {
  const {name, price, desc, category } = shopItem;
  const formattedItem = `
===========================================================================================
Name: ${name}
Price: ${price}
About: ${desc}
Category: ${category}
============================================================================================
`;
  return formattedItem;
}

// Question 2: Write a function that parses through the below object and displays all of their favorite food dishes as shown:
```
pizza contains:
Deep Dish
South Side Thin Crust
tacos contains:
Anything not from Taco bell
burgers contains:
Portillos Burgers
ice_cream contains:
Chocolate
Vanilla
Oreo
shakes contains:
oberwise contains:
Chocolate
dunkin contains:
Vanilla
culvers contains:
All of them
mcDonalds contains:
Sham-rock-shake
cupids_candies contains:
Chocolate Malt
```
// Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

function fastFood (obj) {
  for (let key in obj) {
    const value = obj[key];

  if (Array.isArray(value)) {
    console.log(key + "contains:");
    value.forEach((item) => {
        console.log(item);
    });
  } else if (typeof value === "object") {
    console.log(key + ":");
    fastFood(value);
  } else {
    console.log(key + ":" + value);
  }
 }
}

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[
      {
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt",
    },
   ],
};

fastFood(hwPerson);

// Question 3: Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than 10 then resolve it and console log "Big word". 
// If the length of the string is less than 10 then reject it and  console log "Small String"

function promiseWord(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small string");
        }
    });
}

promiseWord("Hello Everybody!")
.then((result => console.log(result))
.catch((error => console.log(error))

promiseWord("Hi!")
.then((result => console.log(result))
.catch((error => console.log(error))

// Question 4: Create a base class of GameMember and 2 children classes of Dealer, Player
// both dealer and player have:
// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
// hit() : ability to add  a random number [1-13] to their hand
// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
// When a Player hits they can hit as long as their total is under 21. Use the randomNumber function provided below to gernerate a random number 1-12

function randomNumber () {
    return Math.floor(Math.random() * 13) + 1;
}

class GameMember {
    constructor() {
        this.hand = [randomNumber(), randomNumber()];
    }

    hit() {
       throw new Error("hit() must be implemented in the child class.");
    }
}

class Dealer extends GameMember {
    hit() {
        const handSum = this.hand.reduce((total, card) => total + card, 0);
            if (handSum <= 16) {
                this.hand.push(randomNumber());
            } else {
                console.log("Dealer cannot hit anymore.");
            }
    }
}

class Player extends GameMember {
    hit() {
        const handSum = this.hand.reduce((total, card) => total + card, 0);
            if (handSum <= 21) {
                this.hand.push(randomNumber());
            } else {
                console.log("Player cannot hit anymore.");
            }
    }
}

const dealer = new Dealer();
console.log("Dealer's hand:", dealer.hand);
dealer.hit();
console.log("Dealer's Hand after hitting:", dealer.hand);

const player = new Player();
console.log("Player's hand:", player.hand);
player.hit();
console.log("Player's Hand after hitting:", player.hand);

// Question 5: Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed
// Note: For #2, I runned it and it passed correctly but it's giving me a test error. 

1. https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

2. function outed(meet, boss){
    let totalScore= 0;
    let numPeople = 0;

    for (let person in meet) {
        totalScore += meet[person];
        numPeople += 1;
    }

    totalScore += meet[boss];
    numPeople ++;
  
    const happinessRating = totalScore / numPeople;

    if (happinessRating <= 5) {
        return 'Get Out Now!';
    } else {
        return 'Nice Work Champ!';
    }
}

3. https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
