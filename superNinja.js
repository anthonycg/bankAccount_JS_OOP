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

const anthony = new Ninja('anthony', 100)

anthony.drinkSake()
anthony.showStats()
anthony.sayName()