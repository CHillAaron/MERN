class Pet {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender
        this.energy = 100
    }
    eat(numCalories){
        console.log("Yum that was good")
        this.energy += numCalories
    }


    displayStats(){
        console.log(`Name: ${this.name}, Energy: ${this.energy}`)
    }
}

class Dog extends Pet {
    constructor(name,age,gender,breed, isNeutered){
        super(name, age, gender)
        this.breed = breed
        this.isNeutered = isNeutered
    }
    playFetch(){
        console.log(`${this.name} is fetching a ball`)
        this.energy -= 5
    }
    displayStats(){
        console.log(`Name: ${this.name}, Energy: ${this.energy}, Breed: ${this.breed}`)
    }
}

class Cat extends Pet {
    constructor(name, age, gender, isEvil){
        super(name, age, gender)
        this.isEvil = isEvil
        this.bodyCount  = 0
    }
    plotToKill(){
        console.log(`${this.name} is plotting to kill the owner`)
        this.bodyCount += 1
    }
    displayStats(){
        console.log(`Name: ${this.name}, Energy: ${this.energy}, Body Count: ${this.bodyCount}`)
    }
}



// pet1 = Pet("Junior", 4, "male")

const dog1 = new Dog("Junior", 4, "male", "Jack Russell", false)
const cat1 = new Cat("SlightlyStoopidCat III", 3, "male", true)

// console.log(dog1)
// console.log(cat1)
dog1.displayStats()
cat1.displayStats()
dog1.playFetch()
cat1.plotToKill()
console.log(cat1.bodyCount)
dog1.displayStats()


dog1.displayStats()