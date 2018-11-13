class DiceSet {
    // You have a `DiceSet` class which has a list for 6 dices
    // You can roll all of them with roll()
    // Check the current rolled numbers with getCurrent()
    // You can reroll with reroll()
    // Your task is to roll the dices until all of the dices are 6
        dices: number[];
        readonly numOfDices: number = 6;
    
        roll(): number[] {
            this.dices = [];
            for(var i = 0; i < this.numOfDices; i++) { 
                this.dices.push(Math.floor(Math.random() * 6 + 1));
            }
            return this.dices;
        }
    
        reroll(index?: number) {
            if(index == undefined) {
                for(var i = 0; i < this.numOfDices; i++) { 
                    this.dices[i] = Math.floor(Math.random() * 6 + 1);
                }
            } else {
                this.dices[index] = Math.floor(Math.random() * 6 + 1);
            }
        }
        
        getCurrent(index?: number) {
            if(index == undefined) {
                for(var i = 0; i < this.numOfDices; i++) { 
                    console.log(this.dices[i]);
                }
            } else {
                console.log(this.dices[index]);
            }        
        }
        checkIfItsSix(){
            for (let i: number = 0; i < diceSet.dices.length; i++){
                if (this.dices[i] !== 6){
                    while (this.dices[i] !== 6){
                    diceSet.reroll(i);
                    } 
                }
                //return diceSet.dices[i] === 6;
            }
        }
        // if (this.dices !==6)
            //diceSet.reroll(i);

        untilSixFunction (){
            while (this.dices.every(this.dices.checkIfItsSix())) {

                diceSet.reroll();
            }
        }
    }
    
    let diceSet = new DiceSet();
    diceSet.roll();
    diceSet.getCurrent();
    console.log("------------------");
    diceSet.reroll();
    diceSet.getCurrent();
    console.log("------------------");
    diceSet.getCurrent(5);
    diceSet.reroll();
    diceSet.getCurrent();
    console.log("------------------");
    diceSet.reroll(4);
    diceSet.getCurrent();

