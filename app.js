class Casino {
    constructor (name, timesPlayed){
        this.name = name
        this.timesPlayed = timesPlayed || 0;

    }

    
    playGame(betAmount){
        let x = Math.random() * 1
        if (x < 0.5) {
            console.log( 'Casino Wins!' )
        }
        else{
            console.log( this.name + ' wins ' + betAmount )
        }

       let answer = prompt("Are you feeling lucky? Y or N")
        
       if (answer == "Y") {
        this.timesPlayed += 1
         betAmount = betAmount * (this.timesPlayed +1)
         this.playGame(betAmount)
       } 
       else {
        console.log("Better luck next time chump ;)")
       }
    }
};


let myCasino = new Casino("Vicente")

myCasino.playGame(15)

 /*
// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
