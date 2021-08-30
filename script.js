cash = 0
cash_per_second = 0
cash_per_click = 1

function increment() {
  cash = cash + cash_per_second
  document.getElementById("cash_display").innerText = cash
}

function click() {
  cash = cash + cash_per_click
  document.getElementById("cash_display").innerText = cash
}

setInterval(increment, 1000)
