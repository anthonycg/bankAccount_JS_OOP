class Ninja {
    constructor(username, health) {
    this.username = username
    this.health = health
    this.speed = 3
    this.strength = 3
}


    sayName() {
        console.log(`My name is ${this.username}`)
    }

    showStats() {
        console.log(`health: ${this.health} speed: ${this.speed} strength ${this.strength}`)
    }

    drinkSake() {
        this.health += 10
        console.log(`${this.username}'s health is now ${this.health}`)
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed= 10, strength=10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }

    speakWisdom() {
        this.drinkSake()
        console.log(`I drank sake, so my health is now ${this.health} and my wisdom is greater.`)
    }
}

const anthony = new Ninja('anthony', 100)

anthony.drinkSake()
anthony.showStats()
anthony.sayName()

arkeem = new Sensei("arkeem")

arkeem.speakWisdom()