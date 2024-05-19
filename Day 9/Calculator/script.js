// This function clear all the values
function clearScreen() {
    var clear = document.getElementById("clear")
    document.getElementById("result").value = "";
    }
    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }

    // This function evaluates the expression and returns result
    function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
    }

    
    //This function check if press only number otherwise show alert box
    window.addEventListener('keypress',(event)=>{
        operator = ['-','+','/','*']
        key = event.key
        code = event.code
        if (code.includes('Digit') || operator.includes(key) ){
            parent = document.getElementById("result")
            parent.innerText = parent.innerText + key
            console.log(event)
    
        }
        else{
           
            alert("Only numbers are allowed")
        }
        
    })
      function equal(){
        equ = document.getElementById("equal").value
      }