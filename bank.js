let depositBtn = document.getElementById('deposit')
let widrawBtn = document.getElementById('widraw')
let inputAmount = document.getElementById('inputAmount')
let bal  = document.getElementById('balance')

class Bank {
    constructor (balance) {
            this.balance = balance
            
    }

    widraw(amount) {
        if (this.balance - amount <= 0) {
            return alert(`  your can not widraw more than your balance`)
        } 
            this.balance -= amount
            console.log(`your account is Debited of ${amount} `);
            console.log({Balance : this.balance})
        
        
    }
    deposit(amount) {
        this.balance += amount
        console.log(`your account is Credited of ${amount} `);
        console.log({Balance : this.balance})
    }

}
const ujjwal = new Bank(100)

depositBtn.onclick = () => {
            ujjwal.deposit(Number(inputAmount.value))
            inputAmount.value = ""
            showBalance()
}
widrawBtn.onclick = () => {
    ujjwal.widraw(Number(inputAmount.value))
    inputAmount.value = ""
    showBalance()
}
  showBalance = () =>{
    bal.innerText = ` Balance = $ ${ujjwal.balance}`
  }
  showBalance()




