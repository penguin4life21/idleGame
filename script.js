cash = 0
cash_per_second = 0
cash_per_click = 1
t1_gens = 0
t1_income = 1
t1_baseprice = 25
t1_price_multi = 1.01
t2_gens = 0
t2_income = 10
t2_baseprice = 100
t2_price_multi = 1.02
t3_gens = 0
t3_income = 100
t3_baseprice = 250
t3_price_multi = 1.03


function buy_t1gen() {
  if (cash >= Math.round(t1_baseprice * (t1_price_multi ** t1_gens))) {
    cash -= Math.round(t1_baseprice * (t1_price_multi ** t1_gens))
    cash_per_second += t1_income
    t1_gens += 1
    document.getElementById("t1_price").innerText = Math.round(t1_baseprice * (t1_price_multi ** t1_gens))
    update_display()
  } else {
    alert("ERROR, Not Enough Cash") 
  }
}

function buy_t2gen() {
  if (cash >= Math.round(t2_baseprice * (t2_price_multi ** t2_gens))) {
    cash -= Math.round(t2_baseprice * (t2_price_multi ** t2_gens))
    cash_per_second += t2_income
    t2_gens += 1
    document.getElementById("t2_price").innerText = Math.round(t2_baseprice * (t2_price_multi ** t2_gens))
    update_display()
  } else {
    alert("ERROR, Not Enough Cash") 
  }
}

function buy_t3gen() {
  if (cash >= Math.round(t3_baseprice * (t3_price_multi ** t3_gens))) {
    cash -= Math.round(t3_baseprice * (t3_price_multi ** t3_gens))
    cash_per_second += t3_income
    t3_gens += 1
    document.getElementById("t3_price").innerText = Math.round(t3_baseprice * (t3_price_multi ** t3_gens))
    update_display()
  } else {
    alert("ERROR, Not Enough Cash") 
  }
}

function update_display() {
   document.getElementById("cash_display").innerText = cash
   document.getElementById("cash_per_second_display").innerText = cash_per_second
   document.getElementById("t1_gens_owned").innerText = t1_gens
   document.getElementById("t2_gens_owned").innerText = t2_gens
   document.getElementById("t3_gens_owned").innerText = t3_gens
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
