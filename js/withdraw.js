document.querySelector('#btn-withdraw').addEventListener('click' , function (){
  const newWithdrawAmount = getInputFieldValueByID('withdraw-field')
  const previousWithdrawAmount = getTextElementValueById('withdraw-total')
  const newWithdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount
  const newWithdrawTotalBalance = setTextElementValueById('withdraw-total',newWithdrawTotalAmount)
  
  const previousBalance = getTextElementValueById('balance-total')
  const newBalanceAmount = previousBalance - newWithdrawAmount
  const newTotalBalanceAmount = setTextElementValueById('balance-total',newBalanceAmount)
})