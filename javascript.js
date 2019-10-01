var audio1 = new Audio('1.mp3');
var audio2 = new Audio('2.mp3');
var audio3 = new Audio('3.mp3');
var audio4 = new Audio('4.mp3');
var audio5 = new Audio('5.mp3');
var audio6 = new Audio('6.mp3');
var audio7 = new Audio('7.mp3');
var audio8 = new Audio('8.mp3');
var audio9 = new Audio('9.mp3');
var audio10 = new Audio('10.mp3');
var audio11 = new Audio('11.mp3');
var audio12 = new Audio('12.mp3');
var audio13 = new Audio('13.mp3');
var keystring = 0;

var limit = 0;

document.onkeydown = function(e) {
  if (e.which == 81) {
  	//Q
    audio1.play();
    keystring += 81;
  } else if (e.which == 87) {
  	//W
    audio2.play();
    keystring += 87;
  } else if (e.which == 51) {
  	//3
    audio3.play();
    keystring += 51;
  } else if (e.which == 69) {
  	//E
    audio4.play();
    keystring += 69;
  } else if (e.which == 52) {
  	//4
    audio5.play();
    keystring += 52;
  } else if (e.which == 82) {
  	//R
    audio6.play();
    keystring += 82;
  } else if (e.which == 84) {
  	//T
    audio7.play();
    keystring += 84;
  } else if (e.which == 54) {
  	//6
    audio8.play();
    keystring += 54;
  } else if (e.which == 89) {
  	//Y
    audio9.play();
    keystring += 89;
  } else if (e.which == 55) {
  	//7
    audio10.play();
    keystring += 55;
  } else if (e.which == 85) {
  	//U
    audio11.play();
    keystring += 85;
  } else if (e.which == 56) {
  	//8
    audio12.play();
    keystring += 56;
  } else if (e.which == 73) {
  	//I
    audio13.play();
    keystring += 73;
  }
    else if (e.which == 27) {
  	//esc
    limit = 0;
  }

  	if (keystring == 841) {
  	alert("Congratulation! Now you can some melody.")
  	limit = 0;
  	keystring = 0;
  	}


  	limit ++;

  	if (limit == 15) {
  	alert("Try again!")
  	limit -= 15;
  	keystring = 0;
  	}

};
