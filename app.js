let input = document.querySelector('input');
let btns = document.querySelectorAll('button');

let result = "";
let btnArr = Array.from(btns);
btnArr.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        let clickedBtn = e.target.innerHTML;
        if(clickedBtn == '='){
            result = eval(result);
            input.value = result;
            result = "";
        }else if(clickedBtn == 'AC'){
            result = "";
            input.value = result;
        }else if(clickedBtn == "DEL"){
            result = result.substring(0, result.length - 1);
            input.value = result;
        }
        else{
            result += clickedBtn;
            input.value = result;
        }
    })
})

// Keyboard support
document.addEventListener('keydown', (e) => {

    let key = e.key;

    // Numbers and operators
    if (
        (key >= '0' && key <= '9') ||
        key == '+' ||
        key == '-' ||
        key == '*' ||
        key == '/' ||
        key == '.' ||
        key == '%'
    ) {
        result += key;
        input.value = result;
    }

    // Enter = Calculate
    else if (key == 'Enter' || key == '=') {
        if (result !== "") {
            result = eval(result);
            input.value = result;
        }
    }

    // Backspace = Delete
    else if (key == 'Backspace') {
        result = result.substring(0, result.length - 1);
        input.value = result;
    }

    // Escape = AC
    else if (key == 'Escape') {
        result = "";
        input.value = result;
    }
});