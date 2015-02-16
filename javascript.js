/**
 * Created by hampsonj on 16/02/2015.
 */

// set page color
document.body.style.backgroundColor = "cornsilk";

// select element and assign to pressit
var pressit = document.getElementById('button1');

// create a function for when button pressed
var checking = function thereaction() {alert('boom')};

// put event handler on button1 element and link to function for when button pressed
pressit.onclick = checking;


