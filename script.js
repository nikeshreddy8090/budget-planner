let totalIncome = 0;

let totalExpense = 0;


// Add Income

function addIncome(){

    let incomeValue = document.getElementById("income").value;


    totalIncome = totalIncome + Number(incomeValue);


    document.getElementById("totalIncome").innerHTML = totalIncome;


    calculateBalance();


}



// Add Expense

function addExpense(){


    let name = document.getElementById("expenseName").value;


    let amount = document.getElementById("expenseAmount").value;



    totalExpense = totalExpense + Number(amount);



    document.getElementById("totalExpense").innerHTML = totalExpense;



    let item = document.createElement("li");


    item.innerHTML = name + " : ₹" + amount;



    document.getElementById("expenseList").appendChild(item);



    calculateBalance();


}



// Calculate Balance

function calculateBalance(){


    let balance = totalIncome - totalExpense;


    document.getElementById("balance").innerHTML = balance;


}
