// Math.abs() returns the absolute value
// dd = the decimal degree

function decimalBearingToDegMinSec() {
 //get the input from user
 let input_degree = document.getElementById('ddBearing').value;
 // take the input but only the degree
 let absDd = Math.abs(input_degree);
 let deg = absDd | 0;
 let frac = absDd - deg; // get only the values after the decimal
 let min = (frac * 60) | 0;
 let sec = frac * 3600 - min * 60;
 sec = sec.toFixed(2); // toFixed turns it into a string.
 console.log(deg, frac, min, sec);

 document.getElementById('decBearing').innerHTML = deg + '°' + min + "'" + sec + '"';
}

decimalBearingToDegMinSec();

// take in the bearing then convert to decimal form
// deg + min/60 + sec/3600 = dec degree
