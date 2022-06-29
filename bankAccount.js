class User {
    constructor(username, userEmail) {
        this.name = username
        this.email = userEmail
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount
    }

    makeWithdrawl(amount) {
        this.accountBalance -= amount
    }

    displayBalance() {
        console.log(this.accountBalance)
    }

    transferBalance(user, amount) {
        this.accountBalance -= amount
        user.accountBalance += amount

        console.log(`${this.name} transferred $${amount} to ${user.name}`)
        console.log(this.accountBalance)
        console.log(user.accountBalance)
    }
}

const anthony = new User("anthony gibson", "agibson@email.com");
console.log(anthony.name)

const jazz = new User("Jasmine Brown", "jb@email.com")
const arkeem = new User("Arkeem", "arkeem@email.com")

anthony.makeDeposit(100)
anthony.makeDeposit(100)
anthony.makeDeposit(100)
anthony.makeWithdrawl(25)
anthony.displayBalance()

jazz.makeDeposit(100)
jazz.makeDeposit(100)
jazz.makeWithdrawl(25)
jazz.makeWithdrawl(25)
jazz.displayBalance()

arkeem.makeDeposit(100)
arkeem.makeWithdrawl(25)
arkeem.makeWithdrawl(25)
arkeem.makeWithdrawl(25)
arkeem.displayBalance()

anthony.transferBalance(arkeem, 100)