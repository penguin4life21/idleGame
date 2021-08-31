cash = 0
cash_per_second = 0
cash_per_click = 1

function buy_gen() {
  if (cash >= 25) {
    cash -= 25
    cash_per_second += 1
  } else {
    alert("ERROR, Not Enough Cash") 
  }
}

function update_display() {
   document.getElementById("cash_display").innerText = cash
}

function increment() {
  cash += cash_per_second
  update_display()
}

function click_cash() {
  cash += cash_per_click
  update_display()
}

setInterval(increment, 1000)
