let startBtn = document.getElementById("start"),
	budgetValue = document.getElementByClassName("budget-value")[0],
	dayBudgetValue = document.getElementByClassName("daybudget-value")[0],
	levelValue = document.getElementByClassName("level-value")[0],
	expensesValue = document.getElementByClassName("expenses-value")[0],
	optionalExpensesValue = document.getElementByClassName("optionalexpenses-value")[0],
	incomeValue = document.getElementByClassName("income-value")[0],
	monthSavingsValue = document.getElementByClassName("monthsavings-value")[0],
	yearSavingsValue = document.getElementByClassName("yearsavings-value")[0],


	expensesItem = document.getElementByClassName("expenses-item"),
	expensesBtn = document.getElementByTagName("button")[0],
	optionalExpensesBtn = document.getElementByTagName("button")[1],
	countBtn = document.getElementByTagName("button")[2],
	optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	incomeItem = document.querySelector(".choose-income"),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector(".choose-sum"),
	persentValue = document.querySelector(".choose-persent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");


	let money,time;

	function start() {
		money = +prompt("ваш бюджет на месяц",'');
		time = prompt("введите дату", '');

		while (isNaN(money) || money == '' || money == null){
			money = prompt("ваш бюджет", '');
		} 
	}






	
