const numbers = document.getElementsByClassName("btn");
const resutl = document.getElementById("result");
const logHistory = document.getElementById('history');
let his = [];
let expressionData = "";
let resultData = "";

for (let number of numbers) {
  number.addEventListener("click", function () {
    resutl.innerHTML += this.value;
  });
}

function equal() {
  let res = result.innerHTML;
  let output = eval(res);
  expressionData = res;
  resultData = output;

  his.push({expression: expressionData, result: resultData});
  showHistory();
  result.innerHTML = output;
}

function showHistory() {
    let log = "";
    for(let key in his){
        log += his[key].expression + " = " + his[key].result + "<br>" + "<br>";
    }
    logHistory.innerHTML = log;
}

function clean() {
  result.innerHTML = " ";
}

function undo() {
  let res = result.innerHTML;
  result.innerHTML = res.substring(0, res.length - 1);
}

// Change mode
let checkbox = document.querySelector("input[name = theme]");
checkbox.addEventListener("change", function() {
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

let indexHistory = document.getElementsByClassName("fa-history");
indexHistory[0].addEventListener("click", function(){
    logHistory.classList.toggle("indexHistory");
});


