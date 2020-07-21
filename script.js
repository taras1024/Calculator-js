var operationButtons = document.getElementsByClassName('operation-button');

function calculate (operation) {
    var input1 = Number(document.getElementById('number1').value);
    var input2 = Number(document.getElementById('number2').value);
    
    if (operation == '+') {
        window.alert(input1 + input2);
    } else if (operation == '-') {
        window.alert(input1 - input2);
    } else if (operation == '*') {
        window.alert(input1 * input2);
    } else if (operation == '/') {
        window.alert(input1 / input2);
    }

}


function onOperationButtonClick (eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    calculate(operation);
}


for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}

