// CLASES
class BankAccount {
    constructor(bankAccountName, bankAccountAmount) {
      this.bankAccountName = bankAccountName
      this.bankAccountAmount = bankAccountAmount
    }
  
    addMoney(amount) {
      if (amount > 0) {
        return (this.bankAccountAmount = this.bankAccountAmount + amount)
      }
      return `No se añadió ningún monto adicional.`
    }
  }
  
  const myBankAccount = new BankAccount("BBVA", 5000)
  console.log(myBankAccount)
  
  myBankAccount.addMoney(0)
  console.log(myBankAccount)
  
  myBankAccount.addMoney(5)
  console.log(myBankAccount)
  
  let bankAccounts = []
  
  // SELECCIÓN
  const bankAccountName = document.querySelector("#bank-account-name")
  console.log(bankAccountName)
  
  const bankAccountAmount = document.querySelector("#bank-account-amount")
  console.log(bankAccountAmount)
  
  const createBankAccountButton = document.querySelector("#create-bank-account")
  console.log(createBankAccountButton)
  
  const resultArea = document.querySelector("#result")
  console.log(resultArea)
  
  // EVENTOS
  
  createBankAccountButton.addEventListener("click", (evt) => {
    evt.preventDefault()
    console.log("evt", evt)
  
    const bankAccountNameValue = bankAccountName.value
    console.log(bankAccountNameValue)
    const bankAccountAmountValue = Number(bankAccountAmount.value)
    console.log(bankAccountAmountValue)
    console.log(typeof bankAccountAmountValue)
  
    const newBankAccount = new BankAccount(
      bankAccountNameValue,
      bankAccountAmountValue
    )
  
    console.log("new bank account", newBankAccount)
    bankAccounts.push(newBankAccount)
    console.log("bankAccounts:", bankAccounts)
  
    resultArea.innerHTML = /* HTML */ `
      <article class="border p-2.5 my-2.5">
        ${bankAccounts
          .map((bankAccount, index) => {
            return /* HTML */ `
              <h1 class="text-sm font-medium text-gray-900">
                ${bankAccount["bankAccountName"]}
              </h1>
              <p class="mt-1 text-sm text-gray-500">
                ${bankAccount.bankAccountAmount}
              </p>
              <input
                class="ring-1 ring-gray-300"
                type="number"
                id="amount-input-${index}"
                min="0"
              />
              <button
                class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-300 mt-2.5 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-teal-800"
                data-index="${index}"
              >
                Agregar dinero
              </button>
            `
          })
          .join("")}
      </article>
    `
  })
  
  resultArea.addEventListener("click", (evt) => {
    console.log("evt", evt)
  
    const index = evt.target.getAttribute("data-index")
    console.log("index", index)
  
    const amountInput = document.querySelector(`#amount-input-${index}`)
    console.log(amountInput)
  
    const amount = Number(amountInput.value)
    console.log("amount", amount)
  
    bankAccounts[index].addMoney(amount)
  
    resultArea.innerHTML = /* HTML */ `
      <article class="border p-2.5 my-2.5">
        ${bankAccounts
          .map((bankAccount, index) => {
            return /* HTML */ `
              <h1 class="text-sm font-medium text-gray-900">
                ${bankAccount["bankAccountName"]}
              </h1>
              <p class="mt-1 text-sm text-gray-500">
                ${bankAccount.bankAccountAmount}
              </p>
              <input
                class="ring-1 ring-gray-300"
                type="number"
                id="amount-input-${index}"
                min="0"
              />
              <button
                class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-300 mt-2.5 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-teal-800"
                data-index="${index}"
              >
                Agregar dinero
              </button>
            `
          })
          .join("")}
      </article>
    `
  })
  