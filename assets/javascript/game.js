$(document).ready(function () {
// To get the random number & display on the page. 
var max = 120;
var min = 19;
var wins = 0;
var loses = 0;


//to get a random value for the animals.
var totalHiddenValue = 0;
var hiddenValue1 = 0;
var hiddenValue2 = 0;
var hiddenValue3 = 0;
var hiddenValue4 = 0;




var randomNumber = 0;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#random-number").html(randomNumber);

    var hiddenValue1 = Math.floor((Math.random() * 12) + 1);
    var hiddenValue2 = Math.floor((Math.random() * 12) + 1);
    var hiddenValue3 = Math.floor((Math.random() * 12) + 1);
    var hiddenValue4 = Math.floor((Math.random() * 12) + 1);

    $("#animal1, #animal2").click(function () {
        totalHiddenValue = totalHiddenValue + hiddenValue1;
        $("#hidden-value").html(totalHiddenValue);
        // game();
    })

    $("#animal2").click(function () {
        totalHiddenValue = totalHiddenValue + hiddenValue2;
        $("#hidden-value").html(totalHiddenValue);
        // game();
    })

    $("#animal3").click(function () {
        totalHiddenValue = totalHiddenValue + hiddenValue3;
        $("#hidden-value").html(totalHiddenValue);
        game();
    })

    $("#animal4").click(function () {
        totalHiddenValue = totalHiddenValue + hiddenValue4;
        $("#hidden-value").html(totalHiddenValue);
        game();
    })



// gamestart();


function game (){
    
    
    
    if (totalHiddenValue === randomNumber) {
     $("#status").text("You won!");  
    wins++;
    $("#wins").html(wins);
    gamestart();
   
    
    }
    else if (totalHiddenValue >= randomNumber) {
        $("#status").text("You lost!");
        loses++;
        $("#loses").html(loses);
        gamestart();
    }
    else{
        return;
    }
}
game();
console.log(loses);
console.log(totalHiddenValue);





















});