class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Strength level: ${this.strength}, Speed level: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake();
        console.log(`What one programmer can do in one mont, two programmers can do in two months.`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Strength level: ${this.strength}, Speed level: ${this.speed}, Health: ${this.health}`)
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();