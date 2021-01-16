class Card{
    constructor(name, cost){
        this.name = name
        this.cost = 0
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }
    showStats(){
        console.log(`Name: ${this.name}, cost AMT: ${this.cost},Power: ${this.power}, Resilience: ${this.resilience}`)
    }
    attack(target){
        target.resilience -= this.power
        if (target.resilience < 0){
            console.log(`You have defeated ${target.name}`)
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    spellEffect(target){
        if (this.stat == `resilience`){
            target.resilience += this.magnitude
            console.log(`Your resilience is now ${target.resilience}`)
        }
        else 
            target.power += this.magnitude
            console.log(`Your power is now ${target.power}`)
        
    }
    
}

const effect1 = new Effect(`Hard Algorith`, 2, `increase target's resilience by 3`, `resilience`, +3)
const effect2 = new Effect(`Unhandled Promise Rejection`, 1, `reduce target's resilience by 2`, `resilience`, -2)
const effect3 = new Effect(`Pair Programming`, 3, `increase target's resilience by 2`, `power`, +2)

const Unit1 = new Unit(`Red Belt Ninja`, 3, 3, 4)
effect1.spellEffect(Unit1)
const unit2 = new Unit(`Black Belt Ninja`, 4,5,4)
effect2.spellEffect(Unit1)
effect3.spellEffect(Unit1)
Unit1.attack(unit2)
