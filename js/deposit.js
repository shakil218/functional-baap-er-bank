document.querySelector('#btn-deposit').addEventListener('click' , function (){
  const newDepositAmount = getInputFieldValueByID('deposit-field')
  const previousDepositAmount = getTextElementValueById('deposit-total')
  const newDepositTotalAmount = previousDepositAmount + newDepositAmount
  const newDepositTotalBalance = setTextElementValueById('deposit-total',newDepositTotalAmount)
  
  const previousBalance = getTextElementValueById('balance-total')
  const newBalanceAmount = previousBalance + newDepositAmount
  const newTotalBalanceAmount = setTextElementValueById('balance-total',newBalanceAmount)
})