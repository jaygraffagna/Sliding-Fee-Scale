const fpl = 4320;
const fpl_array = [
    12140, 
    16460,
    20780, 
    25100, 
    29420, 
    33740,
    38060,
    42380,
    46700,
    51020
];

var MonthlyUI;
var BiweeklyUI;
var WeeklyUI;
var IncomeUI;
var PersonsUI;
var FeeUI;

function calc() {
    let income = IncomeUI.value;
    let persons = PersonsUI.value;

    if(!income || !persons)
        return;

    var fpl_val = fpl_array[persons - 1];
    if (persons > 10) {
        fpl_val = fpl_array[9] + (persons - 10) * fpl;
    }  
    
    if (MonthlyUI.checked) { // monthly
        income *= 1;
    } else if (BiweeklyUI.checked) { // biweekly
        income *= 2.167;
    } else if (WeeklyUI.checked) { // weekly
        income *= 4.3;
    } 

    var prct =  (((income*12)/fpl_val*100).toFixed(2)); 

    let rate = 150;
    if(prct <= 125){
        rate = 50;
    } else if(prct > 125 && prct <= 150){
        rate = 60;
    } else if(prct > 150 && prct <= 175){
        rate = 70;
    } else if(prct > 175 && prct <= 200){
        rate = 80;
    } else if(prct > 200 && prct <= 225){
        rate = 90;
    } else if(prct > 225 && prct <= 250){
        rate = 100;
    } else if(prct > 250 && prct <= 275){
        rate = 110;
    } else if(prct > 275 && prct <= 300){
        rate = 120;
    } else if(prct > 300 && prct <= 325){
        rate = 130;
    } else if(prct > 325 && prct <= 350){
        rate = 140;
    } 
    FeeUI.value = "$" + rate + ".00/hr"
}

const Init = function(){
    IncomeUI = document.getElementById('income');
    PersonsUI = document.getElementById('persons');
    FeeUI = document.getElementById('fee');
    MonthlyUI = document.getElementById('monthly');
    BiweeklyUI = document.getElementById('biweekly');
    WeeklyUI = document.getElementById('weekly');

    IncomeUI.addEventListener('input', calc);
    PersonsUI.addEventListener('input', calc);
    MonthlyUI.addEventListener('input', calc);
    BiweeklyUI.addEventListener('input', calc);
    WeeklyUI.addEventListener('input', calc);
}();