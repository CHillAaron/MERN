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
    drinkShake(){
        this.health += 10
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkShake();
ninja1.showStats();