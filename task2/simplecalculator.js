function calculateLone() {
    const loneAmount = parseFloat(document.getElementById("loneAmountInput").value);
    const InterestRate = parseFloat(document.getElementById("InterestRateInput").value);
    const loneTerm = parseFloat(document.getElementById("loneTermInput").value);


    if (isNaN(loneAmount) || isNaN(InterestRate) || isNaN(loneTerm)) {
        showError('pleace enter valid Numbers for all fields');
        return;
    }
    const monthlyInterest = InterestRate / 100 / 12;
    const totalPayments = loneTerm;
    const monthlypayment = (loneAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlypayment * totalPayments) - loneAmount;
    const TotalAmount = (loneAmount + totalInterest)

    displayResult(monthlypayment, totalInterest, TotalAmount);



}

function displayResult(monthlypayment, totalInterest, TotalAmount) {
    const resulDiv = document.getElementById("result");

    resulDiv.innerHTML = `
    <p><strong>Monthly EMI : ${monthlypayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest : ${totalInterest.toFixed(2)}</strong></p>
    <p><strong>Total Amount : ${TotalAmount.toFixed(2)}</strong></p>
    
    `;
}

function showError(message) {
    const resulDiv = document.getElementById("result");
    resulDiv.innerHTML = ` <p class="error">${message}</p>
    `;
}

document.getElementById("calculateBtn").addEventListener("click", calculateLone);