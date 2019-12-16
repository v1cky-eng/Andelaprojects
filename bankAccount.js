class BankAccount{
	BankAccount(deposit, amount, isActive){
		this.initialDeposit = 0;
		this.amount = 10000;
	 
	}
open(){
	isActive = true;
}
makeDeposit(amount){
	return amount + initialDeposit;
}
withdrawCash(amount){
	if(amount >= 10000){
		return amount;
	}
	else{
	 console.log("Account balance is too low");
	}
}

close(){
	isActive = false;
	
}
}
new BankAccount()