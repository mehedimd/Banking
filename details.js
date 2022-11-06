
document.querySelector('#depositBtn').addEventListener('click', function(){
    let getDepositValue = document.querySelector('#depositField').value;
    let depositValue = parseFloat(getDepositValue);

    let depositNow = document.querySelector('#depositBlance');
    let getDepositBlance = depositNow.innerText;
    let depositBlance = parseFloat(getDepositBlance);

    let depositTotal = depositValue + depositBlance;
    let depositAmount = depositTotal.toFixed(2);
    let deposit = parseFloat(depositAmount);

    depositNow.innerText = depositAmount;

    let total = document.querySelector('#totalBlance');
    let totalText = total.innerText;
    let getTotal = parseFloat(totalText);
    let subTotal = getTotal + depositValue;
    let subTotalAmount = subTotal.toFixed(2);


    total.innerText = subTotalAmount; 
    
    document.querySelector('#depositField').value = '';
    
})

document.querySelector('#withdrawBtn').addEventListener('click',function(){

    let withdrawField = document.querySelector('#withdrawField').value;
    let withdrawValue = parseFloat(withdrawField);

    let totalBlance = document.querySelector('#totalBlance');
    let totalBlanceText = totalBlance.innerText;
    let totalFloat = parseFloat(totalBlanceText);

    // console.log(withdrawValue);
    // console.log(totalFloat);

   
    if(withdrawValue <= totalFloat){
        
        let withdrawBlance = document.querySelector('#withdrawBlance');
        let withdrawBlance2 = withdrawBlance.innerText;
        let withdrawBlance3 = parseFloat(withdrawBlance2);

        let withdrawBlanceNow = withdrawBlance3 + withdrawValue;

        let subWithdrawBlance = parseFloat(withdrawBlanceNow);
        let totalWithdrawBlance = subWithdrawBlance.toFixed(2);
        withdrawBlance.innerText = totalWithdrawBlance;

        console.log(totalFloat);
        console.log(totalWithdrawBlance);

        let mainBlance = totalFloat - withdrawValue;

        totalBlance.innerText = mainBlance;     

    }
    else{
        alert('insufficient Blance')
    }


    document.querySelector('#withdrawField').value = '';



})