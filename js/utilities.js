function getInputFieldValueByID (inputFieldId){
  const depositField = document.getElementById(inputFieldId)
  const depositFieldValueString = depositField.value
  const depositFieldValue = parseFloat(depositFieldValueString)
  depositField.value = ''
  return depositFieldValue
}


function getTextElementValueById (textElementId){
  const textElement = document.getElementById(textElementId)
  const textElementValueString = textElement.innerText
  const textElementValue = parseFloat(textElementValueString)
  return textElementValue
}


function setTextElementValueById (textElementId,newValue){
  const textElement = document.getElementById(textElementId)
  textElement.innerText = newValue
}