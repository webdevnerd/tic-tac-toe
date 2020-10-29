var player_one_sign = "";
var player_two_sign = "";
var current = 1;

var btnX = document.getElementById('chooseX');
var btnO = document.getElementById('chooseO');
var btn1 = document.getElementById('00');
var btn2 = document.getElementById('01');
var btn3 = document.getElementById('02');
var btn4 = document.getElementById('10');
var btn5 = document.getElementById('11');
var btn6 = document.getElementById('12');
var btn7 = document.getElementById('20');
var btn8 = document.getElementById('21');
var btn9 = document.getElementById('22');

var board = document.getElementById('board');
board.style.visibility = 'hidden';

function chooseSign(elem) {
    player_one_sign = elem.innerHTML;
    if (player_one_sign == 'X') player_two_sign = 'O';
    else player_two_sign = 'X';
    btnX.disabled = true;
    btnO.disabled = true;
    board.style.visibility = 'visible';
}

// btnX.addEventListener('click', () => {
//     player_one_sign = 'X';
//     player_two_sign = 'O';
//     btnX.disabled = true;
//     btnO.disabled = true;
// })

// btnO.addEventListener('click', () => {
//     player_one_sign = 'O';
//     player_two_sign = 'X';
//     btnX.disabled = true;
//     btnO.disabled = true;
// })

function clickfunc(elem) {
    if (current == 1) {
        elem.innerHTML = player_one_sign;
        current = 2;
        
    }
    else {
        elem.innerHTML = player_two_sign;
        current = 1;
    }
    elem.disabled = true;
    checkWin();
}


function checkWin() {
    var val1 = btn1.innerHTML;
    var val2 = btn2.innerHTML;
    var val3 = btn3.innerHTML;
    var val4 = btn4.innerHTML;
    var val5 = btn5.innerHTML;
    var val6 = btn6.innerHTML;
    var val7 = btn7.innerHTML;
    var val8 = btn8.innerHTML;
    var val9 = btn9.innerHTML;
    
    if (val1 != '?' && val1 == val2 && val2 == val3) {
        if (player_one_sign == val1) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val1 != '?' && val1 == val4 && val1 == val7) {
        if (player_one_sign == val1) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val4 != '?' && val5 == val4 && val4 == val6) {
        if (player_one_sign == val4) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val7 != '?' && val7 == val8 && val9 == val7) {
        if (player_one_sign == val7) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val2 != '?' && val2 == val5 && val2 == val8) {
        if (player_one_sign == val2) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val3 != '?' && val3 == val6 && val3 == val9) {
        if (player_one_sign == val3) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val1 != '?' && val1 == val5 && val1 == val9) {
        if (player_one_sign == val1) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }

    else if (val3 != '?' && val3 == val5 && val3 == val7) {
        if (player_one_sign == val3) alert('Congrats!!! Player 1 wins');
        else alert('Congrats!!! Player 2 wins');
        location.reload();
    }
}

