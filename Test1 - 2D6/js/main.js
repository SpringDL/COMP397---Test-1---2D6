/*
    This file is: main.js
    Author: Danny Luk 300709186
    Date: Oct. 8, 2014
    Desc: This handles the rolling function for the pair of dice in index.html
 */

/// <reference path="jquery.js" />
var roll1 = 0;
var roll2 = 0;

//Button (BtnRoll) click in index.html will randomize 2 dice rolls and display the results back on index.html
$("#BtnRoll").click(function () {
    roll1 = Math.floor((Math.random() * 6) + 1);    //rolling dice 1
    roll2 = Math.floor((Math.random() * 6) + 1);    //rolling dice 2
    
    document.getElementById("ResultsLabel").innerHTML = "<h1>Roll Results:<h1>"     //Click = Results appear
    document.getElementById("DiceLabel1").innerHTML = "Dice One:";                  //Labelling Dice 1

    //Generate Dice image based on roll outcome
    switch (roll1) {
        case 1:
            document.getElementById("Dice1Pic").src = "img/d6_1.fw.png";
            break;
        case 2:
            document.getElementById("Dice1Pic").src = "img/d6_2.fw.png";
            break;
        case 3:
            document.getElementById("Dice1Pic").src = "img/d6_3.fw.png";
            break;
        case 4:
            document.getElementById("Dice1Pic").src = "img/d6_4.fw.png";
            break;
        case 5:
            document.getElementById("Dice1Pic").src = "img/d6_5.fw.png";
            break;
        case 6:
            document.getElementById("Dice1Pic").src = "img/d6_6.fw.png";
            break;
        default:
            break;
    }

    document.getElementById("Dice1Result").innerHTML = "Dice 1: " + roll1;          //Display Dice results > text
    document.getElementById("DiceLabel2").innerHTML = "Dice Two:";                  //Labelling Dice 2

    //Generate Dice image based on roll outcome
    switch (roll2) {
        case 1:
            document.getElementById("Dice2Pic").src = "img/d6_1.fw.png";
            break;
        case 2:
            document.getElementById("Dice2Pic").src = "img/d6_2.fw.png";
            break;
        case 3:
            document.getElementById("Dice2Pic").src = "img/d6_3.fw.png";
            break;
        case 4:
            document.getElementById("Dice2Pic").src = "img/d6_4.fw.png";
            break;
        case 5:
            document.getElementById("Dice2Pic").src = "img/d6_5.fw.png";
            break;
        case 6:
            document.getElementById("Dice2Pic").src = "img/d6_6.fw.png";
            break;
        default:
            break;
    }

    document.getElementById("Dice2Result").innerHTML = "Dice 2: " + roll2;          //Display Dice results > text

    //Checking for dubs
    if (roll1 == roll2) {
        document.getElementById("BonusText").innerHTML = "DUBS GET";                //Dubs get
    } else {
        document.getElementById("BonusText").innerHTML = "";                        //No Dubs
    }
});