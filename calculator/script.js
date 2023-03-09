let display = document.getElementById('result');

function addToResult(value) {
    display.value += value;
    if(value == '%') {
        let result = eval(display.value.replace('%', '/100'));
        display.value = result;
    }
}

function clearResult() {
    display.value = '';
}

function clearRecent() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    // let expression = display.value;

    // expression.replace('÷', '/')
    // let result = eval(expression);

    // let result = eval(expression.replace(/÷/g, '/'))
    // display.value = result;

    // console.log(result);

    let expression = display.value.replace(/÷/g, '/');
    expression = expression.replace(/×/g, '*');

    let result = eval(expression);
    display.value = result;
}


